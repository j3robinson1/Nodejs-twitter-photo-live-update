var app = require('vbridge');
var h = require('vbridge').h;
var io = require('socket.io-client')(window.location.href);
var state = app.state({
  title: 'Ignite Board',
  img: '/test-img.jpg'
});
app(document.body, state, function render(state) {
  return h('div', [
    h('h1', state.get('title')),
    h('img.full', { src: state.get('img') })
  ]);
});
io.on('img', function(imgUrl) {
  console.log(imgUrl);
  state.set('img', imgUrl);
});

io.on('title', function(title) {
  state.set('title', title);
});