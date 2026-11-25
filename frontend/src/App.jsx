import React from 'react'
import Students from './components/Students'
import {Button} from '@/components/ui/button'
import Count from './hooks/Count'
//rafce - react arrow function component export
const App = () => {
  let name="test"
  return (
    <>
    <div classname="pl-96">App</div>
    <Count/>
    <Button variant="destructive">Delete</Button>
    <Button variant="outline">Outline</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="ghost">Ghost</Button>
    <div classname="flex">
      <h3>1</h3>
      <h3>2</h3>
      <h3>3</h3>
    </div>
    <h1>This is {name}</h1>
    <Students name="user" age={20}/>
    </>
  )
}

export default App
