<script>
  import Loading from "../Loading.svelte";
  import { blocks } from "./../../stores";
  import Block from "./../tzkt/Block.svelte";
</script>


<svelte:head>
  <title>tzkt blocks | {$blocks[$blocks.length - 1]?.level || '...'}</title>
</svelte:head>

{#if $blocks.length}
  <ul>
    {#each [...$blocks].reverse() as block (block.hash)}
      <Block {block} />
    {/each}
  </ul>
{:else}
  <Loading />
{/if}

<style>
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
</style>