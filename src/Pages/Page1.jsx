import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Page1() {
     let Store = useSelector(store=>{
        console.log(store.reducer)
        return store.reducer
    })
    const dispatch = useDispatch()
  return (
    <>
     <h1>{Store.value}</h1>
     <button onClick={()=>{dispatch({type: "ADDITION", payload: 1})}}>+</button>
     <button onClick={()=>{dispatch({type: "RESET", payload: 0})}}>Reset</button>
     <button onClick={()=>{dispatch({type: "SUBSCRATION", payload: 1})}}>-</button>
    </>
  )
}
