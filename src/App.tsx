import './App.css'
import { AnimatedBackground } from './components'

function App() {

  return (
    <>
      <AnimatedBackground />
      <div className="relative z-10 min-h-screen text-white">
        <h1 className="text-4xl font-bold p-10">
          Mario.dev
        </h1>
      </div>
    </>
  )
}

export default App
