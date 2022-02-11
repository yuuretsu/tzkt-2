<script>
  import { route } from "./../stores";
  $route = '#none';
</script>

<div class="empty-page">
  <div class="empty-page-content">

    <p>404</p>
    <button on:click={() => $route = ''}>go to main</button>
    <button on:click={() => $route = '?a=4'}>2</button>
  </div>
</div>

<style>
  .empty-page {
    box-sizing: border-box;
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
  }
</style>