<script lang="ts">
  import {onMount, onDestroy, createEventDispatcher} from 'svelte';
  import * as THREE from 'three';

  const dispatch = createEventDispatcher();

  let container: HTMLElement;
  let renderer: THREE.WebGLRenderer;

  onMount(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(25, container.clientWidth / container.clientHeight, 0.1, 1000);

    renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setClearColor(0xffffff); // 흰색 배경색 설정
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({color: 0x00ff00});
    const cube = new THREE.Mesh(geometry, material);

    scene.add(cube);

    camera.position.z = 5;

    function animate() {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    }

    animate();

    return () => {
      renderer.dispose();
    };
  });
</script>

<div bind:this={container} class="cube-container" on:click={() => dispatch('click')}>
    <div class="start-text">Start</div>
</div>

<style>
    .cube-container {
        width: 300px;
        height: 300px;
        position: relative; /* start-text를 위해 relative 설정 */
        display: flex; /* Flexbox를 사용하여 내용 중앙 정렬 */
        align-items: center;
        justify-content: center;
    }

    .start-text {
        position: absolute;
        color: #ffffff;
        font-size: 2rem;
        pointer-events: none; /* 텍스트 클릭 시 큐브 이벤트로 전달하기 위해 */
        z-index: 1;
    }
</style>

