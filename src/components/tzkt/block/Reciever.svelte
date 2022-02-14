<script>
  import { sliceStr } from "./../../../lib";

  export let reciever;

  let recieverAmount = reciever.list.map(({ amount }) => amount).reduce((acc, cur) => acc + cur, 0) / 1000000;
</script>

<div class="reciever">
  <div class="reciever-head">
    <span>to</span>
    <img class="reciever-avatar" src={`https://services.tzkt.io/v1/avatars/${reciever.address}`} width={25} height={25} alt="">
    <a class="reciever-name" href={`#/accounts/${reciever.address}`} target="_blank">{reciever.alias || reciever.address}</a>
    <!-- <span class="reciever-name">{reciever.alias || reciever.address}</span> -->
    {#if recieverAmount}
      <span class="reciever-amount">{recieverAmount} ꜩ</span>
    {/if}
  </div>
  <ul class="transactions-list">
    {#each reciever.list as transaction}
      <li class="transaction" class:failed={transaction.status === 'failed'}>
        <span class="transaction-number">#{transaction.numberInBlock}</span>
        <img class="sender-avatar" src={`https://services.tzkt.io/v1/avatars/${transaction.sender.address}`} width={20} height={20} alt="">
        <!-- <span class="sender-name" class:alias={Boolean(transaction.sender.alias)}>{transaction.sender.alias || sliceStr(transaction.sender.address, 5)}</span> -->
        <a class="sender-name" class:alias={Boolean(transaction.sender.alias)} href={`#/accounts/${transaction.sender.address}`} target="_blank">{transaction.sender.alias || sliceStr(transaction.sender.address, 5)}</a>
        {#if transaction.amount}
          <span class="transaction-amount">{transaction.amount / 1000000} ꜩ</span>
        {/if}
        {#if transaction.parameter?.entrypoint}
          <code class="transaction-entrypoint">{transaction.parameter?.entrypoint}()</code>
        {/if}
      </li>
    {/each}
  </ul>
</div>

<style>
  .reciever:not(:last-child) {
    margin-bottom: 20px;
  }

  .reciever-head {
    display: flex;
    align-items: center;
    padding: 10px;
    background-color: rgb(0 0 0 / 10%);
  }

  .reciever-head > *:not(:last-child) {
    margin-right: 10px;
  }

  .reciever-avatar {
    border-radius: 50%;
    /* border: 1px solid gray; */
    background-color: white;
    /* padding: 2px; */
  }

  .reciever-name {
    font-weight: bold;
  }

  .reciever-amount {
    color: rgb(0 150 0);
    font-weight: bold;
  }

  .transactions-list {
    list-style-type: none;
  }

  .transaction {
    display: flex;
    align-items: center;
    height: 25px;
  }

  .transaction > *:not(:last-child) {
    margin-right: 10px;
  }

  .transaction.failed {
    background-color: rgb(255 0 0 / 25%);
  }

  .transaction-number {
    text-align: right;
    width: 40px;
  }

  .sender-avatar {
    border-radius: 50%;
    border: 1px solid gray;
    background-color: white;
  }

  .sender-name.alias {
    font-weight: bold;
  }

  .transaction-amount {
    color: rgb(0 150 0);
  }

  .transaction-entrypoint {
    font-family: "IBM Plex Mono";
  }
</style>