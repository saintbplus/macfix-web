<template>
  <div class="status-loading">
    <div class="id-row"></div>
    <div class="bars">
      <div>
        <div class="bar-title"></div>
        <div class="bar">
          <div class="loading"></div>
        </div>
      </div>
      <div>
        <div class="bar-title"></div>
        <div class="bar">
          <div class="loading"></div>
        </div>
      </div>
      <div>
        <div class="bar-title"></div>
        <div class="bar">
          <div class="loading"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.status-loading {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 500px;
}
.bars {
  display: flex;
  flex-direction: column;
  height: 400px;
}
.loading {
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
.bar {
  width: 100%;
  height: 30px;
  background-color: #555555;
}
.bar-title {
  width: 150px;
  height: 20px;
  background-color: #555555;
  margin: 1.5rem 0;
}
.id-row {
  width: 100px;
  height: 20px;
  background-color: #555555;
  margin-bottom: 0.5rem;
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
