import { useState } from 'react'
import './App.css'
import InputBox from './components/InputBox'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full h-screen flex flex-wrap
    justify-center items-center bg-cover bg-no-repeat'
    style={{backgroundImage: `url(https://images.pexels.com/photos/3806749/pexels-photo-3806749.jpeg?auto=compress&cs=tinysrgb&w=400)`
  }}
    >

    <h1>Test For tailwind</h1>
    <InputBox></InputBox>
    </div>
  )
}

export default App
