<script lang="ts">
    import Router from "svelte-spa-router";

    // page imports
    import OnBoardingPage from "./pages/onboarding/OnBoardingPage.svelte";
    import HomePage from "./pages/home/HomePage.svelte";
    import AdminPage from "./pages/admin/AdminPage.svelte";
    import movieListPage from "./pages/movieList/movieListPage.svelte";
    import movieAddPage from "./pages/movieAdd/movieAddPage.svelte";
    import movieEditPage from "./pages/movieEdit/movieEditPage.svelte";
    import movieDetailPage from "./pages/movieDetail/movieDetailPage.svelte";

    // route definitions
    let routes = {
        "/": OnBoardingPage,
        "/home": HomePage,
        "/admin": AdminPage,
        "/movie/list": movieListPage,
        "/movie/add": movieAddPage,
        "/movie/edit/:id": movieEditPage,
        "/movie/:id": movieDetailPage,
    };
</script>

<Router {routes} />