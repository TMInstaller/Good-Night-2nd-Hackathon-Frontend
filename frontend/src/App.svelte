<script lang="ts">
    import Router from "svelte-spa-router";
    import OnBoardingPage from "./pages/onboarding/OnBoardingPage.svelte";
    import HomePage from "./pages/home/HomePage.svelte";
    import AdminPage from "./pages/admin/AdminPage.svelte";
    import MovieListPage from "./pages/movieList/MovieListPage.svelte";
    import MovieAddPage from "./pages/movieAdd/MovieAddPage.svelte";
    import MovieEditPage from "./pages/movieEdit/MovieEditPage.svelte";
    import MovieDetailPage from "./pages/movieDetail/MovieDetailPage.svelte";

    // route definitions
    let routes = {
        "/": OnBoardingPage,
        "/home": HomePage,
        "/admin": AdminPage,
        "/movie/list": MovieListPage,
        "/movie/add": MovieAddPage,
        "/movie/edit/:id": MovieEditPage,
        "/movie/:id": MovieDetailPage,
    };
</script>

<Router {routes} />