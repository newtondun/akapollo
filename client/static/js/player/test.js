var _ = require('lodash');
var Two = require('two');
var Three = require('three');

var Scene = new Three.Scene();
var Camera = new Three.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var Renderer = new Three.WebGLRenderer();
Renderer.setSize( window.innerWidth, window.innerHeight );
document.getElementById('player').appendChild( Renderer.domElement );

var geometry = new Three.BoxGeometry( 1, 1, 1 );
var material = new Three.MeshBasicMaterial( { color: 0x00ff00 } );
var cube = new Three.Mesh( geometry, material );
Scene.add( cube );

Camera.position.z = 5;

var render = function () {
  requestAnimationFrame( render );

  cube.rotation.x += 0.1;
  cube.rotation.y += 0.1;

  Renderer.render(Scene, Camera);
};

render();
