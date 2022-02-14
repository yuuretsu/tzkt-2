<script>
  import Reciever from "./Reciever.svelte";
  export let block;

  const recievers = {};
  for (const [ n, transaction ] of Object.entries(block.transactions)) {
    recievers[transaction.target.address] ??= { list: [], ...transaction.target };
    recievers[transaction.target.address].list.push({ ...transaction, numberInBlock: n });
  }
  
</script>

<div class="block-body">
  {#each Object.values(recievers) as reciever (reciever.address)}
    <Reciever {reciever} />
  {/each}
</div>


<style>
  .block-body {
    padding: 10px;
    animation: arise 1s;
  }

  @keyframes arise {
    from {
      opacity: 0;
    }
  }
</style>