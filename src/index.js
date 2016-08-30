require('./theme/index.css');

const THREE = require('three');

const fragmentShader = require('./shaders/test.frag');
const vertexShader = require('./shaders/test.vert');

var container;
var camera, scene, renderer, mesh;
var uniforms;

init();
animate();

function init() {
    container = document.body;

    camera = new THREE.Camera();
    camera.position.z = 1;

    scene = new THREE.Scene();

    var geometry = new THREE.BoxBufferGeometry( 1, 1, 1 );

    uniforms = {
        u_time: {
            type: "f",
            value: 1.0
        },
        u_resolution: {
            type: "v2",
            value: new THREE.Vector2()
        },
        u_mouse: {
            type: "v2",
            value: new THREE.Vector2()
        }
    };

    var material = new THREE.ShaderMaterial({
        uniforms: uniforms,
        vertexShader,
        fragmentShader
    });
    // var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );

    mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio(window.devicePixelRatio);

    container.appendChild(renderer.domElement);

    onWindowResize();
    window.addEventListener('resize', onWindowResize, false);

    document.onmousemove = function(e) {
        uniforms.u_mouse.value.x = e.pageX
        uniforms.u_mouse.value.y = e.pageY
    }
}

function onWindowResize(event) {
    renderer.setSize(window.innerWidth, window.innerHeight);
    uniforms.u_resolution.value.x = renderer.domElement.width;
    uniforms.u_resolution.value.y = renderer.domElement.height;
}

function animate() {
    requestAnimationFrame(animate);

    render();
}

function render() {
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.01;
    uniforms.u_time.value += 0.05;
    renderer.render(scene, camera);
}
