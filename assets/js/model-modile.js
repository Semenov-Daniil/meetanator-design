import * as THREE from 'three';
import { OrbitControls } from 'OrbitControls';
import { GLTFLoader } from 'GLTFLoader';
import { RectAreaLightHelper } from 'RectAreaLightHelper'
import { RectAreaLightUniformsLib } from 'RectAreaLightUniformsLib';

function init() {
    const cnt = document.querySelector('.mobile-wrapp');

    //Scene
    const scene = new THREE.Scene();

    //Camera
    const camera = new THREE.PerspectiveCamera(75, cnt.offsetWidth / cnt.offsetHeight, 0.1, 3000);
    camera.position.set(0, 0, 0.8)

    //render
    const renderer = new THREE.WebGLRenderer({alpha: true, antialias: true})
    renderer.setSize(cnt.offsetWidth, cnt.offsetHeight)
    cnt.appendChild(renderer.domElement)

    // Model
    {
        const loader = new GLTFLoader();
        loader.load( './../../assets/media/model/scena.gltf', function ( gltf ) {
            console.log(gltf);
            gltf.scene.rotation.x = -0.1;
            gltf.scene.rotation.y = 2.8;
            gltf.scene.rotation.z = 0.1;
            // gltf.scene.scale.set(1.2, 1.2, 1.2);
            scene.add( gltf.scene );
        }, undefined, function ( error ) {
            console.error( error );
        } );
        
    }

    
    {
        const light = new THREE.DirectionalLight(0xffffff, 1)
        light.position.set(-2, 0, 10)
        light.lookAt(0, -1, 0)
        scene.add(light)

        // Helper
        // const helper = new THREE.DirectionalLightHelper(light, 5)
        // scene.add(helper)
    }

    {
        const light = new THREE.DirectionalLight(0xffffff, 1)
        light.position.set(2, 0, 5)
        light.lookAt(0, 1, 0)
        scene.add(light)

        // Helper
        // const helper = new THREE.DirectionalLightHelper(light, 5)
        // scene.add(helper)
    }

    RectAreaLightUniformsLib.init();
    {
        const rectLight = new THREE.RectAreaLight(0xffffff, 1, 100, 100);
        rectLight.position.set(-10,0,0)
        rectLight.rotation.y = Math.PI + Math.PI/4;
        scene.add(rectLight)
    }

    {
        const rectLight = new THREE.RectAreaLight(0xffffff, 1, 100, 100);
        rectLight.position.set(10,0,0)
        rectLight.rotation.y = Math.PI - Math.PI/4;
        scene.add(rectLight)
    }

    // Animate
    function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    }
    animate()

}

init();