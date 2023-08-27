<script>
    import {push} from 'svelte-spa-router';
    import ThreeCube from './ThreeCube.svelte';
</script>

<div class="onboarding-container">
    <div class="overlay-text">
        <h1>영화 리뷰를 시작하세요!</h1>
        <p>큐브를 클릭하여 영화 목록을 확인하세요.</p>
    </div>

    <div class="cube-location">
        <ThreeCube on:click={() => push('/movie/list')}/>
    </div>
</div>

<style>
    .onboarding-container {
        display: flex;
        flex-direction: column;
        align-items: center; /* 가로 정렬 */
        justify-content: center; /* 세로 정렬 */
        height: 100vh; /* 브라우저 창 높이로 설정 */
    }

    .overlay-text {
        position: relative;
        text-align: center;
        margin-bottom: 2rem; /* 텍스트와 큐브 사이의 간격을 조정 */
    }

    .cube-location {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>