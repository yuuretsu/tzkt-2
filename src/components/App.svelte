<script>
  import Router from "svelte-spa-router";

  import Header from "./Header.svelte";

  import Blocks from "./routes/Blocks.svelte";
  import Account from "./routes/Account.svelte";
  import EmptyRoute from "./routes/EmptyRoute.svelte";

  let headerHeight = "60px";
</script>

<Header height={headerHeight} />
<main class="container" style={`padding-top: calc(${headerHeight} + 20px)`}>
  <!-- <div class="main-inner"> -->
  <Router
    routes={{
      "/": Blocks,
      "/accounts/:address": Account,
      "*": EmptyRoute,
    }}
    restoreScrollState={true}
  />
  <!-- </div> -->
</main>

<style>
  main {
    padding-top: 20px;
    padding-bottom: 20px;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
  }
  /* .main-inner { */
  /* height: 100%; */
  /* overflow-y: auto; */
  /* } */
</style>
