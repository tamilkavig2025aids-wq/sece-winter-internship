import React from 'react'
import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'
const Count = () => {
    const [count,setCount]=useState(0);
    const [isVisible,setIsVisible]=useState(true); 
    useEffect(()=>{
        console.log("From useEffect");
    }, [])
    return(
        <div>
            <h3>Count: {count} </h3>
            <Button onClick={()=>setCount(count+1)}>Increase</Button>
            <Button variant="destructive" onClick={()=>setCount(0)}>Reset</Button>
            <br/>
            <Button onClick={()=>setIsVisible(!isVisible)}>Toggle</Button>
            { isVisible && (
               <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium minima, tenetur sint, itaque incidunt quam ea saepe animi velit odio vero consequatur asperiores excepturi unde impedit totam ducimus expedita ullam.</p> 
            )}
        </div>
    )
}
export default Count    

/*const Count = () => {
    let count=0;
    const increase=()=>{
        count++;
        console.log(count);
    }
  return (
    <div>
        <h2>Count: {count}</h2>
        <Button onClick={increase}>Increase</Button>
    </div>

  )
}

export default Count
*/