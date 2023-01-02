/*
 * @Author: Lu Zhu
 * @Date: 2023-01-02 17:00:07
 * @LastEditors: Lu Zhu
 * @LastEditTime: 2023-01-02 17:06:35
 * @FilePath: \my-app\src\package\index.js
 * @Description: 
 */
import LuButton from "../package/lu-button/index.vue"; // 引入封装好的组件
const luComponents = [LuButton]; // 将来如果有其它组件,都可以写到这个数组里

// 批量组件注册
const install = function (Vue) {
    luComponents.forEach((item) => {
    Vue.component(item.name, item);
  });
};

export default install; // 这个方法以后再使用的时候可以被use调用