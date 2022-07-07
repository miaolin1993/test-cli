import React from 'react'
import { createRoot } from 'react-dom/client'

import { Hello } from './components/home'
import './index.scss'

const App = () => {
  return <Hello />
}
const app = document.getElementById('app')
if (app) {
  const root = createRoot(app)
  root.render(<App />)
}
