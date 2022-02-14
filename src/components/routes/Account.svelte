<script>
  import WithSidebar from "./../WithSidebar.svelte";
  import { tzkt, sliceStr } from "./../../lib";
  import Loading from "../Loading.svelte";

  export let params = {};

</script>

<!-- <div>{JSON.stringify(params)}</div> -->

<WithSidebar>
  <div class="sidebar" slot="sidebar">
    {#await tzkt(`/accounts/${params.address}`).then(res => res.json())}
      <Loading />
    {:then account} 
      <div class="account">
        <div class="account-header">
          <img class="account-avatar" src={`https://services.tzkt.io/v1/avatars/${account.address}`} width={40} height={40} alt="">
          <div class="account-header-text">
            <p>{account.alias || "User"}</p>
            <p>{sliceStr(account.address, 5)}</p>
          </div>
        </div>
        <div>
          balance: <span class="amount">{account.balance / 1000000} ꜩ</span>
        </div>
        <div>
          counter: <span>{account.counter}</span>
        </div>
        {#if account.delegate}
          <div>
            delegation: <a href={`#/accounts/${account.delegate.address}`}>{account.delegate.alias || account.delegate.address}</a>
          </div>
        {/if}
      </div>
    {/await}
  </div>
  <div class="main" slot="main">
    {#await tzkt(`/accounts/${params.address}/operations`).then(resp => resp.json())}
      <Loading />
    {:then operations}
      {#each operations.slice(0, 100) as op}
        {@debug op}
        {#if op.type === "transaction"}
          <div class="operation">
            {#if op.target.address === params.address}
              <span class="amount">{op.amount / 1000000} ꜩ</span><span>from</span><a class="operation-address-link" class:bold={Boolean(op.sender.alias)} href={`#/accounts/${op.sender.address}`}>{op.sender.alias || sliceStr(op.sender.address, 5)}</a>
            {:else}
              <span class="amount amount--outcoming">{op.amount / 1000000} ꜩ</span><span>to</span><a class="operation-address-link" class:bold={Boolean(op.sender.alias)} href={`#/accounts/${op.target.address}`}>{op.target.alias || sliceStr(op.target.address, 5)}</a>
            {/if}
          </div>
        {:else}
          <div>{'//'} {op.type}</div>
        {/if}
      {/each}
    {/await}
  </div>
</WithSidebar>

<style>
  .sidebar {
    height: 100%;
  }
  .main {
    height: 100%;
  }
  .account-header {
    display: flex;
    margin-bottom: 10px;
  }
  .account-avatar {
    margin-right: 10px;
  }
  .operation {
    display: flex;
  }
  .operation > *:not(:last-child) {
    margin-right: 10px;
  }
  .amount {
    color: rgb(0 200 0);
    font-weight: bold;
    white-space: nowrap;
  }
  .amount--outcoming {
    color: rgb(200 0 0);
  }
  .operation-address-link.bold {
    font-weight: bold;
  }
</style>