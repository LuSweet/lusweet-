<!--
 * @Author: Lu Zhu
 * @Date: 2023-01-02 16:40:03
 * @LastEditors: Lu Zhu
 * @LastEditTime: 2023-01-02 16:52:36
 * @FilePath: \my-app\src\package\lu-input\lu-input.vue
 * @Description: 
-->
<template>
   <div>
     <button>我是测试按钮</button>
   </div>
 </template>
 <script>
 export default {
   name: "lu-input", //组件名
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
