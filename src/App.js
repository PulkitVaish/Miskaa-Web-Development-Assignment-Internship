import React,{useState} from 'react'
import Header from './components/Header'
import Countries from './components/Countries'

function App() {
  const [resfresh,setRefresh]=useState(false);
  const refreshHandler = ()=>{
    setRefresh((prev)=>!prev);
  }
  return (
      <>
        <Header refreshHandler={refreshHandler}/>
        <Countries refresh={resfresh}/>
      </>
  )
}

export default App
