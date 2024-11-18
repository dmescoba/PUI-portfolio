"use strict";

var _animeEs = _interopRequireDefault(require("/node_modules/animejs/lib/anime.es.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var heroTimeline = _animeEs["default"].timeline({
  duration: 3000
});

heroTimeline.add({
  targets: ".line-drawing",
  strokeDashoffset: [_animeEs["default"].setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 10000,
  loop: false
}).add({
  targets: "#hero-title, #hero-positions, #hero-buttons",
  opacity: [0, 1],
  easing: "easeInOutQuad",
  duration: 1000
}, '-=8000'); // console.log("test")
// anime({
//   targets: '#move-left',
//   translateX: ["150vw", 0],
//   easing: 'easeOutQuad',
//   duration: 5000,
//   loop: false
// });
// anime({
//   targets: '#move-right',
//   translateX: ['-150vw', 0],
//   easing: 'easeOutQuad',
//   duration: 5000,
//   loop: false
// });