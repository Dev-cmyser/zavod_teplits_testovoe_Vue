<template>
  <div class="container">
    <div class="lds-dual-ring"></div>
  </div>
  
</template>

<style>
  .lds-dual-ring {
  display: inline-block;
  width: 800px;
  height: 800px;
  margin-left: 260px;

}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 644px;
  height: 644px;
  margin: 8px;
  border-radius: 50%;
  border: 60px solid #cef;
  border-color: #cef transparent #cef transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>