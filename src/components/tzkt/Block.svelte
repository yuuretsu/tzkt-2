<script>
  // import { slide } from 'svelte/transition';
  export let block;
  export let showBody = false;

  function sliceAddress(address) {
    return address.slice(0, 5) + '...' + address.slice(-5);
  }


</script>

<li class="block">
  <div class="block-head">
    <div class="level">{block.level}</div>
    <img src={`https://services.tzkt.io/v1/avatars/${block.baker.address}`} width={35} height={35} alt="">
    <div>
      <div>
        {block.baker.alias || 'Baker'}
      </div>
      <div class="baker-address">
        {block.baker.address}
      </div>
    </div>
    <button class="open-btn" on:click={() => showBody = !showBody}>{showBody ? "-" : "+"}</button>
  </div>
  {#if showBody}
    <div class="block-body">
      {#each block.transactions.sort(({ amount: a }, { amount: b }) => b - a).sort(({ hash: a }, { hash: b }) => b > a) as transaction (transaction.id)}
        <!-- {@debug transaction} -->
        <div class="transaction" class:failed={transaction.status === "failed"}>
          <div>{transaction.hash}</div>
          <div class="sender">{transaction.sender.alias || sliceAddress(transaction.sender.address)}</div>
          <div class="target">{transaction.target.alias || sliceAddress(transaction.target.address)}</div>
          {#if transaction.parameter}
            <div>{transaction.parameter.entrypoint}()</div>
          {/if}
          {#if transaction.parameter && transaction.amount}
            <div>with</div>
            <div>{transaction.amount}</div>
          {:else if transaction.amount}
            <div>{transaction.amount / 1000000}</div>
          {/if}
        </div>
      {/each}
    </div>
  {/if}
</li>

<style>
  .block {
    animation: arise 1s;
  }
  
  .block-head {
    display: flex;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid gray;
  }

  .block-head > *:not(:last-child) {
    margin-right: 10px;
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

  .transaction {
    display: flex;
    align-items: center;
    font-size: 0.75em;
  }

  .transaction.failed {
    background-color: rgb(255 200 200);
  }

  .transaction .sender, .transaction .target {
    width: 210px;
  }

  @keyframes arise {
    from {
      transform: translateX(-50%);
    }
  }
</style>