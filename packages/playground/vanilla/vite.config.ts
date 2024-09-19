import { defineConfig } from 'vite'
import { createIconPlugin } from './plugin'
export default defineConfig({
    plugins: [createIconPlugin()]
})