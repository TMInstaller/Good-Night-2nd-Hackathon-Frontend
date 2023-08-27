<script lang="ts">
  import axios from 'axios';
  import {onMount} from 'svelte';
  import {push} from "svelte-spa-router";
  import {request} from "../../services/apiService";

  let movies = [];
  let isLoading = true; // 데이터 로딩 상태를 나타내는 변수
  let selectedGenre = '';
  let isScreening = '';
  let minRating = '';

  onMount(async () => {
    try {
      movies = await request('GET', '/movies');
      isLoading = false;
    } catch (error) {
      isLoading = false;
      console.error('Error fetching movies', error);
    }
  });

  // 필요한 함수들
  function goToAddPage() {
    push('/movie/add'); // 영화 추가 페이지로 이동
  }

  function goToEditPage(id: number) {
    push(`/movie/edit/${id}`); // 영화 수정 페이지로 이동, ID를 URL 파라미터로 전달
  }

  function goToDetailPage(id: number) {
    push(`/movie/detail/${id}`); // 영화 상세 정보 페이지로 이동, ID를 URL 파라미터로 전달
  }

  function deleteMovie(id: number) {
    // 영화 삭제 로직
  }

  function applyFilters() {
    // 필터 적용 로직
  }

  function setPage(page: number) {
    // 페이지 설정 로직
  }
</script>

{#if isLoading}
    <p>Loading movies...</p>
{:else if movies.length === 0}
    <p>등록된 영화가 없습니다.</p>
{:else}
    <div class="filter-section">
        <select bind:value={selectedGenre}>
            <!-- 장르 옵션 추가 -->
        </select>

        <select bind:value={isScreening}>
            <!-- 상영 여부 옵션 추가 -->
        </select>

        <input type="number" bind:value={minRating} placeholder="평점"/>

        <button on:click={applyFilters}>필터 적용</button>
    </div>

    <div class="movie-list">
        {#each movies as movie}
            <div class="movie-item">
                <h2 on:click={() => goToDetailPage(movie.id)}>{movie.title}</h2>
                <!-- 필요한 다른 영화 정보 렌더링 -->
                <button on:click={() => goToEditPage(movie.id)}>수정</button>
                <button on:click={() => deleteMovie(movie.id)}>삭제</button>
            </div>
        {/each}
    </div>

    <div class="pagination">
        <!-- 페이지네이션 로직 (추가적인 정보 필요) -->
    </div>
{/if}
