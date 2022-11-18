import React from 'react'
import { useDispatch } from 'react-redux'



function Home() {
    const dispatch = useDispatch()
    const addBtn = ()=> {
        dispatch({
            type:"increment"
        })
    }
    const subBtn = ()=>{
        dispatch({
            type:"decrement"
        })
    }

    const mulBtn = ()=>{
        dispatch({
            type:"incrementByValue",
            payload:25,
        })
    }
  return (
    <>
      
    <button onClick={addBtn}>increment</button>
    <button onClick={mulBtn}>increment by 25</button>
    <button onClick={subBtn}>Decrement</button>


    </>

  )
}

export default Home