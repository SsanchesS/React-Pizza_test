import React from "react"
import {AiFillEdit,AiFillDelete} from "react-icons/ai"
import {PizzaObj} from "../models/PizzaModel"
import EditPizzaForm from "../components/EditPizzaForm"
interface proops{
   PizzaObj:PizzaObj;
   deletePizza:(id:number)=>void;
   updatePizza:(PizzaObj:PizzaObj)=>void;
}
const PizzaCard:React.FC<proops> =(p)=>{
   let PizzaObj:PizzaObj = p.PizzaObj
   const [edit,setedit]=React.useState<boolean>(false)
   const PizzaEdit=()=>{
      setedit(!edit)
   }
   const PizzaDelete=()=>{
      p.deletePizza(PizzaObj.id)
   }
return(
<div className="pizza">
      <img src={`/images/${PizzaObj.img}.jpg`} alt="img" />
      <h2>{PizzaObj.title}</h2>
      <span>{PizzaObj.price} ₽</span>
      
      <div className="pizza-controls">
         <AiFillEdit onClick={PizzaEdit}/>
         <AiFillDelete onClick={PizzaDelete}/>
      </div>
      {
         edit ? <EditPizzaForm
         PizzaObj={PizzaObj}
         PizzaEdit={PizzaEdit}
         updatePizza={p.updatePizza}
         /> 
         : null
      }
</div>
)
}
export default PizzaCard