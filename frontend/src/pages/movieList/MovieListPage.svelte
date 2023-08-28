<script lang="ts">
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
    push(`/movie/${id}`); // 영화 상세 정보 페이지로 이동, ID를 URL 파라미터로 전달
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
            <div class="movie-item" on:click={() => goToDetailPage(movie.id)}>
                <div class="movie-image"></div>
                <h2>{movie.title}</h2>
                <!-- 필요한 다른 영화 정보 렌더링 -->
                <div class="movie-buttons">
                    <button on:click={() => goToEditPage(movie.id)}>수정</button>
                    <button on:click={() => deleteMovie(movie.id)}>삭제</button>
                </div>
            </div>
        {/each}
    </div>

    <div class="pagination">
        <!-- 페이지네이션 로직 (추가적인 정보 필요) -->
    </div>
{/if}

<!-- ... (상단의 script 부분은 동일하게 유지) ... -->

<style>

    button {
        background-color: #007BFF;
        color: #fff;
        padding: 12px 20px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.3s, box-shadow 0.3s;
        font-size: 14px;
    }

    button:hover {
        background-color: #0056b3;
        box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
    }

    select, input {
        padding: 12px;
        margin: 10px 0;
        border: 1px solid #D1D1D1;
        border-radius: 4px;
        font-size: 14px;
    }

    .filter-section {
        background-color: #FFFFFF;
        padding: 25px;
        border-radius: 8px;
        margin-bottom: 30px;
        display: flex;
        align-items: center;
        gap: 20px;
        box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
    }

    .movie-list {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 30px;
    }

    .movie-item {
        background-color: #FFFFFF;
        padding: 25px;
        border-radius: 8px;
        transition: transform 0.3s, box-shadow 0.3s;
        box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .movie-item:hover {
        transform: translateY(-5px);
        box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
    }

    .movie-item h2 {
        cursor: pointer;
        transition: color 0.3s;
    }

    .movie-item h2:hover {
        color: #007BFF;
    }

    .movie-item button {
        margin-top: 15px;
    }

    .pagination {
        margin-top: 30px;
        display: flex;
        justify-content: center;
        gap: 12px;
    }

    .movie-image {
        width: 300px;
        height: 200px;
        background-image: url('https://picsum.photos/300/200');
        background-size: cover;
        background-position: center;
        margin-bottom: 20px;
        border-radius: 8px;
        overflow: hidden;
    }
</style>
