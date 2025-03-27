import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RowItem from './components/RowItem'

function App() {

  const persons = [
    {num:5,nom:'alaoui',prenom:'mohamed'},
    {num:6,nom:'azami',prenom:'yassine'},
    {num:5,nom:'reda',prenom:'mohamed'},

  ]
  
  return (
    <div>

      <table>

        <thead>
          <tr>
            <th>#</th>
            <th>Nom</th>
            <th>Prenom</th>
          </tr>
        </thead>


        <tbody>

          <tr>
            <th>1</th>
            <th>EL HAOUCH</th>
            <th>Alaaeddine</th>
          </tr>
        
         <RowItem num_key={persons[0].num} nom_key={persons[0].nom} prenom_key ={persons[0].prenom}/>
         <RowItem num_key={persons[1].num} nom_key={persons[1].nom} prenom_key ={persons[1].prenom}/>
         


        </tbody>




      </table>




    </div>
  )
}

export default App
