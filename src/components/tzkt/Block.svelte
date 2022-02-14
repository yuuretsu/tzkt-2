<script>
  import BlockBody from "./block/BlockBody.svelte";

  export let block;
  export let showBody = false;

</script>

<li class="block" class:show-body={showBody}>
  <div class="block-head">
    <div class="level">{block.level}</div>
    <img src={`https://services.tzkt.io/v1/avatars/${block.baker.address}`} width={35} height={35} alt="">
    <div>
      <div class="baker-name">
        {block.baker.alias || 'Baker'}
      </div>
      <div class="baker-address">
        {block.baker.address}
      </div>
    </div>
    <button class="open-btn" on:click={() => showBody = !showBody}>{showBody ? "-" : "+"}</button>
  </div>
  {#if showBody}
    <BlockBody {block} />
  {/if}
</li>

<style>
  .block {
    transition-duration: 0.2s;
    animation: arise 1s;
  }

  .block.show-body {
    margin-top: 20px;
    margin-bottom: 20px;
    border: 1px solid gray;
    box-shadow: 0 0 20px 0 rgb(0 0 0 / 25%);
  }
  
  .block-head {
    display: flex;
    align-items: center;
    padding: 10px 0;
    border-bottom: 1px solid gray;
    transition-duration: 0.2s;
  }

  .block.show-body .block-head {
    padding: 10px;
  }

  .block-head > *:not(:last-child) {
    margin-right: 10px;
  }

  .baker-name {
    font-weight: bold;
  }

  .baker-address {
    font-family: monospace;
  }

  .open-btn {
    box-sizing: border-box;
    margin-left: auto;
    width: 20px;
    line-height: 18px;
    padding: 0;
    cursor: pointer;
    background-color: white;
    border: 1px solid gray;
  }

  @keyframes arise {
    from {
      opacity: 0;
      transform: translateY(-100%);
    }
  }
</style>