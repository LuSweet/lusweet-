/*
 * @Author: Lu Zhu
 * @Date: 2023-01-02 16:36:24
 * @LastEditors: Lu Zhu
 * @LastEditTime: 2023-01-02 17:51:16
 * @FilePath: \my-app\src\main.js
 * @Description: 
 */
import {createApp} from 'vue';
import App from './App.vue';
import LuUi from 'lu-ui-lusweetcomponents';
import "../node_modules/lu-ui-lusweetcomponents/lu-ui.css";

const app = createApp(App);

app.use(LuUi);
app.mount('#app');
