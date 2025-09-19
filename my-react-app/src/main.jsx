import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
// what does "You gotta have at least 5 HTML & CSS features, and one of them has to be CSS." mean?
// idk man just put a bunch of stuff on the website so it looks cool

/* "It has to be good effort and "accessible" - for example, you can't have too many small fonts, color changes, etc."

am i gonna get sued for unaccessibilty */