import React, { useState} from 'react'
import Home from './Home'

export default function Memo() {
    const [count, setCount] = useState(0)
    const [data, setData] = useState(0)
  return (
    <div>
      <Home data={data}/>
      <h1>Count : {count} Data : {data}</h1>
      <button className='btn btn-success' onClick={()=> setCount(count + 1 )}>Count</button>
      <button className='btn btn-success' onClick={()=> setData(data + 1 )}>data</button>
    </div>
  )
}
