import './style.css'
import viteLogo from '/vite.svg'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <h1>@neo/vite-plugin-icon</h1>
    <div class="card">
      <a href="/__/icon-preview" class="link-btn"> Click Me Open Icon Preview</a>
    </div>
    <p class="read-the-docs">
      This Vite Icon Plugin Playground
    </p>
  </div>
`

