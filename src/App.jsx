import { useState } from 'react'
import reactLogo from './assets/react.svg'
import tailwindLogo from './assets/tailwindcss.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex items-center justify-center pt-20 text-2xl">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://tailwindcss.com/" target="_blank">
          <img src={tailwindLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="text-white font-bold text-3xl mt-2">
        Vite + React + TailwindCSS
      </h1>
      <div className="card">
        <button className="bg-cyan-700 px-4 py-2 rounded-full font-semibold m-4" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p className="text-md text-gray-400">
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </>
  )
}

export default App
