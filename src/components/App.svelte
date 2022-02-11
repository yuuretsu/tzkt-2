<script>
  import Header from "./Header.svelte";
  import Blocks from "./Blocks.svelte";
  import EmptyRoute from "./EmptyRoute.svelte";

  import { route } from "../stores";

  let headerHeight = "60px";
  
  const routes = {
    "#/": Blocks,
    "#blocks": Blocks,
    "#none": EmptyRoute,
  };

</script>

<scelte:window />

<Header height={headerHeight} {routes} />
<main class="container" style={`padding-top: ${headerHeight}`}>
  <svelte:component this={routes[$route] || EmptyRoute} />
</main>


<style>
  main {
    padding-top: 20px;
    height: 100%;
    box-sizing: border-box;
  }
</style>
