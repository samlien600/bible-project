import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/bible-project/demo/', // 👈 依你的實際部署路徑修改
})