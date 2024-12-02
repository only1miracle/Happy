import * as THREE from 'three';

export function createscene(){
     //initital scene setup 
     const gamewindow = document.getElementById('render-target');
     const scene = new THREE.Scene();
     scene.background = new THREE.color(ox7777777);
     
     const camera =new THREE.perspectivecamera(75, gamewindow.offsetwwidth / gamewindow.offsetHeight, 0.1, 1000);

     const renderer = new THREE.WebGLRenderer();
     renderer.setsize(gamewindow.offsetWidth, gamewindow.offsetHeight);
     gamewindow.appendChild(renderer.domElement);

     const geometry =new THREE.BoxGeometry(1, 1, 1);
     const material =new THREE.MeshBasicMaterial({ color:0xff0000 });
     const mesh = new THREE.Mesh(geometry, material); 
     function draw() {
        renderer.render(scene, camera);
     }

     function Start() {
        renderer.render(scene, camera);
     }

     function stop() {
        renderer.render(scene, camera);
     }

     return{
        Start,
        stop 
     }
}

