import App from './App.svelte';
import 'virtual:uno.css';
import '@unocss/reset/tailwind.css';

const app = new App({
  target: document.getElementById('app'),
});

export default app;
