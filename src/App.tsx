import React, { useState } from 'react';
import './App.css';
import AddPizzaFrom from "./components/AddPizzaFrom"
import PrintPizzas from "./components/PrintPizzas"
import {PizzaObj} from "./models/PizzaModel"

const App:React.FC= () =>{
  const initState:PizzaObj[] = [];
  const [ListPizzas,setListPizzas] = useState<PizzaObj[]>(initState);
  const addPizza=(newPizzaOBJ:PizzaObj)=>{
    console.log(newPizzaOBJ)
    setListPizzas([...ListPizzas, newPizzaOBJ])
  }
  const deletePizza=(id:number)=>{
    let newPizzasList = ListPizzas.filter(el=>el.id !== id)
    setListPizzas(newPizzasList)
  }
  const updatePizza=(PizzaObj:PizzaObj)=>{
    let newListPizzas = ListPizzas.map(el=>el.id===PizzaObj.id? PizzaObj : el)
    console.log(newListPizzas)
    setListPizzas(newListPizzas)
  }
  return (
    <div className="App">
      <div className="wrap">
        <span className='heading'>Наша пиццерия</span>
        <AddPizzaFrom 
        addPizza={addPizza}
        />
        <PrintPizzas
        ListPizzas={ListPizzas}
        deletePizza={deletePizza}
        updatePizza={updatePizza}
        />
      </div>
    </div>
  );
}
export default App;