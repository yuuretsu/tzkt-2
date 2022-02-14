<div class="wrapper">
  <div class="left">
    <slot name="sidebar" />
  </div>
  <div class="right">
    <slot name="main" />
  </div>
</div>

<style>
  .wrapper {
    display: flex;
    height: 100%;
  }
  .left {
    width: 350px;
    flex-shrink: 0;
    flex-grow: 0;
    padding-right: 20px;
    margin-right: 20px;
    border-right: 1px solid gray;
  }
  .right {
    width: 100%;
    flex-grow: 0;
    overflow-y: auto;
  }
  .left, .right {
    box-sizing: border-box;
    height: 100%;
  }
</style>