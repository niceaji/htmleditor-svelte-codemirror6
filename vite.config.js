import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import UnoCSS from 'unocss/vite';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/htmleditor-svelte-codemirror6',
  plugins: [svelte(), UnoCSS()],
});
