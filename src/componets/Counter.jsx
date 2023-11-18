import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decerment, increment, reset } from './redux/counterslice'


function Counter() {

const [Range,setRange]=useState("")


  // hock to dispatch a function in action 
  const dispatch =useDispatch()
  // component can access the state by using usesel
  const count =useSelector((state)=>state.Counter.value)

  console.log(Range);
  return (
<>
  
      <div className='d-flex align-items-center justify-content-center w-100 mt-5 flex-column'>
        <h1 style={{fontSize:'99px'}}>{count}</h1>
        <div className='mt-5'>
          <button onClick={()=>dispatch(decerment(Number(Range)))} className='btn btn-warning p-3'>Decrement</button>
          <button onClick={()=>dispatch(reset())} className='btn btn-danger p-3 ms-3'>Reset</button>
          <button onClick={()=>dispatch(increment(Number(Range)))} className='btn btn-success p-3 ms-3'>Increment</button>
        </div>
      </div>
      <div className='mt-3 w-100'>
        <input type="text" onChange={(e)=>setRange(e.target.value)} className='form-control' style={{borderColor:"blue"}} placeholder='Enter the Range'/>
      </div>
      
</>
  )
}

export default Counter
