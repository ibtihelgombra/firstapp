import React from 'react'
import useLogique  from './Fonction'

function Hook() {
    const {count, plus , moins ,reset} = useLogique(0)
  return (
    <div style={{textAlign:'center'}}>
   <h1> compteur : {count} </h1>

   <button onClick={plus}>+</button><br />
   <button onClick={moins}>-</button><br />
   <button onClick={reset}>Reset</button>



    </div>
  )
}

export default Hook