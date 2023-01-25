import './style.css'
import { initializeEngine } from './engine'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
	<div></div>
`

initializeEngine();
