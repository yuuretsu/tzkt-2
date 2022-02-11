<script>
  import { blocks } from "./../stores";
  import Block from "./tzkt/Block.svelte";
</script>


<svelte:head>
  <title>tzkt blocks</title>
</svelte:head>
<ul>
  {#each [...$blocks].reverse() as block (block.hash)}
    <Block {block} />
  {/each}
</ul>

<style>
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
</style>