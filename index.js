import { Header, Nav, Main, Footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const router = new Navigo("/");

function render(state = store.Home) {
  document.querySelector("#root").innerHTML = `
  ${Header(state)}
  ${Nav(store.Links)}
  ${Main(state)}
  ${Footer()}
    `;
  afterRender(state);

  router.updatePageLinks();
}
function afterRender(state) {
  // add menu toggle to bars icon in nav bar
  // document.querySelector(".fa-bars").addEventListener("click", () => {
  //   document.querySelector("nav > ul").classList.toggle("hidden--mobile");
  // });

  if (state.view === "Contact") {
    document.querySelector("form").addEventListener("submit", event => {
      event.preventDefault();

      const Contact = event.target.elements;
      console.log("Contact", Contact);

      const requestData = {
        email: Contact.email.value,
        message: Contact.message.value
      };
      console.log("request Body", requestData);

      axios
        .post(`${process.env.CONTACT}`, requestData)
        .then(response => {
          // store.Contact.push(requestData);
          router.navigate("/Contact");
        })
        .catch(error => {
          console.log("It puked", error);
        });
    });
  }
}
router.hooks({
  before: (done, params) => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home"; // Add a switch case statement to handle multiple routes
    switch (view) {
      case "Home":
        axios
          .get(
            // Replace the key provided here with your own key from openweathermap
            `https://api.openweathermap.org/data/2.5/forecast?q=st%20louis&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&units=imperial`
          )
          .then(response => {
            console.log(response);
            // const kelvinToFahrenheit = kelvinTemp =>
            //   Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);
            store.Home.weather = {};
            store.Home.weather.city = response.data.city;
            store.Home.weather.temp = Math.round(
              response.data.list[0].main.temp
            );
            store.Home.weather.feels_like = Math.round(
              response.data.list[0].main.feels_like
            );
            store.Home.weather.temp_min = Math.round(
              response.data.list[0].main.temp_min
            );
            store.Home.weather.description =
              response.data.list[0].weather[0].main;
            store.Home.weather.icon = response.data.list[0].weather[0].icon;
            // store.Home.weather.cnt[2] = response.data.weather[0].main;

            done();
          })
          .catch(err => console.log(err));
        break;

      case "Contact":
        axios
          .get(`${process.env.CONTACT}`)
          .then(response => {
            store.Contact.contact = response.data;
            console.log(response.data);
            done();
          })
          .catch(error => {
            console.log("No Bueno", error);
            done();
          });

        break;
      default:
        done();
    }
  }
});

router
  .on({
    "/": () => render(),
    ":view": params => {
      let view = capitalize(params.data.view);
      render(store[view]);
    }
  })
  .resolve();
