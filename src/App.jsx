import React from 'react'
import MemoComp from './components/use-memo/MemoComp'
import CallbackComp from './components/use-callback/CallbackComp'
import './App.css'
import Demo from './components/use-transition/Demo'
import DefDemo from './components/use-deffered/DefDemo'
const App = () => {
  return (
    <div>
      <MemoComp/>
      
      <CallbackComp/>

      <Demo/>

      <DefDemo/>
    </div>
  )
}

export default App
