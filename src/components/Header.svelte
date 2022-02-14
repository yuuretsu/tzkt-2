<script>
  import { blocks } from "./../stores";
  export let height = "60px";
  // export let routes;
</script>

<header>
  <div class="container">
    <div class="header-inner" style={`height: ${height}`}>
      <a href="#/">tezos explorer</a>
      <div>
        prev. block level: {$blocks.at(-1)?.level || "loading..."}
      </div>
    </div>
  </div>
</header>

<style>
  header {
    position: fixed;
    z-index: 9999;
    left: 0;
    top: 0;
    width: 100%;
    border-bottom: 1px solid gray;
    white-space: nowrap;
    background-color: white;
    /* box-shadow: 0 0 30px 0 rgb(0 0 0 / 50%); */
  }

  .header-inner {
    display: flex;
    align-items: center;
  }

  .header-inner > *:not(:last-child) {
    margin-right: 20px;
  }
</style>