import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RowItem from './components/RowItem'
import TableItem from './components/TableItem'

function App() {

  const persons = [
    {num:5,nom:'alaoui',prenom:'mohamed'},
    {num:6,nom:'azami',prenom:'yassine'},
    {num:5,nom:'reda',prenom:'mohamed'},
  ]
  
  return (
    <div>


      <TableItem persons={persons}/>

      









    </div>
  )
}

export default App
