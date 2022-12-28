import html from "html-literal";

export default () => html`
  <section id="contact">
    <h3>
    !function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n(t.d3=t.d3||{})}(this,function(t){"use strict";function n(t,n){return t<n?-1:t>n?1:t>=n?0:NaN}function e(t){return 1===t.length&&(t=r(t)),{left:function(n,e,r,i){for(null==r&&(r=0),null==i&&(i=n.length);r<i;){var o=r+i>>>1;t(n[o],e)<0?r=o+1:i=o}return r},right:function(n,e,r,i){for(null==r&&(r=0),null==i&&(i=n.length);r<i;){var o=r+i>>>1;t(n[o],e)>0?i=o:r=o+1}return r}}}function r(t){return function(e,r){return n(t(e),r)}}function i(t,n){return n<t?-1:n>t?1:n>=t?0:NaN}function o(t){return null===t?NaN:+t}function u(t,n){var
    </h3>
  </section>
`;
