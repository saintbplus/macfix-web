<template>
  <div class="skeleton-list">
    <div class="skeleton">
      <div class="list-loading"></div>
    </div>
    <div class="skeleton">
      <div class="list-loading"></div>
    </div>
    <div class="skeleton">
      <div class="list-loading"></div>
    </div>
    <div class="skeleton">
      <div class="list-loading"></div>
    </div>
  </div>
</template>

<style scoped>
.skeleton-list {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 200px;
}
.skeleton {
  width: 100%;
  height: 30px;
  background-color: #555555;
  overflow: hidden;
}
.list-loading {
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to right,
    #555555,
    #787878,
    #aaaaaa,
    #787878,
    #555555
  );
  background-size: 75px 200px;
  background-repeat: repeat-y;
  background-position: 0 0;
  animation: load-gradient 2s linear infinite;
}

@keyframes load-gradient {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 125% 0;
  }
}
</style>
