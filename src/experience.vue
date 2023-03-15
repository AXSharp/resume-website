<template>
  <div class="wrapper">
    <div class="main">
      <div class="skils">
        <div class="icon"><img src="./assets/handshake.png" alt=""></div>
        <div class="text">some text for now</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  border: 2px solid red;
  margin-top: 100px;
}
.main {
  margin: auto;
  width: 60%;
  line-height: 35px;
  overflow: hidden;
  background-color: #294c60;
  padding: 30px;
  border-radius: 10px;
}
.skils{
    display: flex;
}
.text {
    border: 2px solid red;
}
.icon{
    margin-left: 100px;
    border: 2px solid red;
    width: 30%;
    height: 100%;
}
img{
    width: 80%;
}
</style>
