<script>
  import { onMount } from 'svelte';
  import Codemirror from './Codemirror.svelte';
  import { Pane, Splitpanes } from 'svelte-splitpanes';
  import Header from './Header.svelte';

  let code = `<html>
  <head>
    <title>HTML Editor</title>
  </head>
  <body>
    <h1>CodeMirror 6: HTML Editor</h1>
    <p>Try to edit the HTML code below.</p>
  </body>
</html>`;

  let iframeEl = null;
  let timer = null;

  function changeCode(event) {
    const { value } = event.detail;
    code = value || '';
    updatePreview();
  }

  function updatePreview() {
    if (!iframeEl) return;

    // debounce
    clearTimeout(timer);
    timer = setTimeout(() => {
      iframeEl.srcdoc = code;
    }, 300);
  }

  onMount(() => {
    updatePreview();
  });
</script>

<div class="app-container">
  <Header>
    <div class="i-mdi-language-html5 text-2xl bg-red-400 mr-1" />
    HTML Editor
  </Header>

  <Splitpanes class="pt-12">
    <Pane minSize={20}>
      <Codemirror value={code} lang="html" on:change={changeCode} />
    </Pane>
    <Pane>
      <div class="h-full">
        <iframe frameborder="0" title="preview" bind:this={iframeEl} />
      </div>
    </Pane>
  </Splitpanes>
</div>

<style>
  :global(html, body, #app) {
    height: 100vh;
  }
  :global(.splitpanes__pane) {
    background-color: transparent !important;
  }
  :global(.splitpanes__splitter) {
    background-color: #eee !important;
  }
  .app-container {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
</style>
