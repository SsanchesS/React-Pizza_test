import React from "react"
import {PizzaObj} from "../models/PizzaModel"
import PizzaCard from "../components/PizzaCard"
interface proops{
   ListPizzas:PizzaObj[];
   deletePizza:(id:number)=>void;
   updatePizza:(PizzaObj:PizzaObj)=>void;
}
const PrintPizzas:React.FC<proops> =(p)=>{

return(
<div className="container">
   {p.ListPizzas.map(el=>{
      return <PizzaCard
      key={el.id}
      PizzaObj={el}
      deletePizza={p.deletePizza}
      updatePizza={p.updatePizza}
      />
   })}
</div>
)
}
export default PrintPizzas