<script lang="ts">
  import {onMount} from 'svelte';
  import {request} from '../../services/apiService';

  export let params: { id: null };
  let id: number;

  let movieDetail = {};
  let isLoading = true;

  onMount(async () => {
    if (params.id) {
      id = Number(params.id);
      try {
        console.log("Calling API with movieId:", id);
        movieDetail = await request('GET', `/movies/${id}`);
        console.log("Received movieDetail:", movieDetail);
        isLoading = false;
      } catch (error) {
        isLoading = false;
        console.log("Error fetching movie detail:", error);
      }
    }
  });

</script>

{#if movieDetail}
    <h1>{movieDetail.title}</h1>

    <p>장르: {movieDetail.genre}</p>
    <p>상영 여부: {movieDetail.isShowing ? '상영 중' : '상영 종료'}</p>
    <p>개봉 연도: {new Date(movieDetail.releasedAt).getFullYear()}년</p>
    <p>상영 종료 예정: {new Date(movieDetail.endAt).toLocaleDateString()}</p>
    <p>생성 일자: {new Date(movieDetail.createdAt).toLocaleDateString()}</p>
    <p>마지막 수정: {new Date(movieDetail.updatedAt).toLocaleDateString()}</p>
{:else}
    <p>Loading movie detail...</p>
{/if}
