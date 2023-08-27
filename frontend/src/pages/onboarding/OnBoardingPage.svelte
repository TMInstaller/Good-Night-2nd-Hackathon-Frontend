<script>
    import { onMount } from 'svelte';
    import * as THREE from 'three';

    let SCREEN_WIDTH = window.innerWidth;
    let SCREEN_HEIGHT = window.innerHeight;
    let aspect = SCREEN_WIDTH / SCREEN_HEIGHT;

    let container, stats;
    let camera, scene, renderer, mesh;
    let cameraRig, activeCamera, activeHelper;
    let cameraPerspective, cameraOrtho;
    let cameraPerspectiveHelper, cameraOrthoHelper;
    const frustumSize = 600;

    onMount(() => {
        init();
        animate();
    });

    function init() {
        container = document.createElement('div');
        document.body.appendChild(container);

        scene = new THREE.Scene();
        // ... [나머지 코드는 원본 코드와 동일하게 복사]

        renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
        container.appendChild(renderer.domElement);
        renderer.autoClear = false;

        window.addEventListener('resize', onWindowResize);
        document.addEventListener('keydown', onKeyDown);
    }

    function onKeyDown(event) {
        // ... [원본 코드와 동일하게 복사]
    }

    function onWindowResize() {
        // ... [원본 코드와 동일하게 복사]
    }

    function animate() {
        // ... [원본 코드와 동일하게 복사]
    }

    function render() {
        // ... [원본 코드와 동일하게 복사]
    }
</script>

<div id="info">
    <a href="https://threejs.org" target="_blank" rel="noopener">three.js</a> - cameras
    <br />
    <b>O</b> orthographic <b>P</b> perspective
</div>

<style>
    b {
        color: lightgreen;
    }
    /* 추가 스타일 필요시 여기에 */
</style>
