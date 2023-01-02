<!--
 * @Author: Lu Zhu
 * @Date: 2023-01-02 16:40:44
 * @LastEditors: Lu Zhu
 * @LastEditTime: 2023-01-02 17:03:16
 * @FilePath: \my-app\src\package\lu-button\index.vue
 * @Description: 
-->
<template>
    <div>
      <button>祝璐的按钮</button>
    </div>
  </template>
  <script>
  export default {
    name: "lu-button", //组件名
  };
  </script>
  <style scoped>
  button {
    width: 100px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 10px;
    cursor: pointer;
  }

  button:hover {
    color: blue;
  }
  </style>