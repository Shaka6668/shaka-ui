import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 引入jsx，然后在插件里面注册
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  // vueJsx里可以传，也可以不传，推荐不传
  plugins: [vue(),vueJsx({})]
})
