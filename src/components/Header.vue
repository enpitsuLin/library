<template>
  <div class="header">
    <div class="top-right">
      <div class="top-item">
        <i class="fa fa-user" />
        <a href="">我的图书馆</a>
      </div>
      <div class="top-item">
        <i class="fa fa-info-circle" />
        <a href="">咨询</a>
      </div>
      <div class="top-item">
        <i class="fa fa-gift" />
        <a href="">捐赠</a>
      </div>
      <div class="top-item">
        <i class="fa fa-clock" />
        <a href="">今日开馆: 6:30~22:30</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.header {
  display: flex;
  flex-direction: column-reverse;
  padding: 0 15px;
  .top-right {
    padding-top: 14px;
    line-height: 1;
    .top-item {
      float: right;
      color: #fff;
      margin-right: 32px;
      a {
        color: #fff;
        &:hover {
          text-decoration: underline #fff;
        }
      }
    }
  }
}
</style>
