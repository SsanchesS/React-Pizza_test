import React from "react";
import "./styles.css"
import {PizzaObjforAddForm,PizzaObj} from "../models/PizzaModel"

interface props{
   addPizza:(newPizzaOBJ:PizzaObj)=>void;
}

const AddPizzaFrom:React.FC<props> =(p)=>{
   const initState:PizzaObjforAddForm = {
      id:0,
      title:"",
      price:'',
      img:""
   };
   const [newPizza,setnewPizza] = React.useState<PizzaObjforAddForm>(initState)

   const onChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
      let {name,value} = e.target
      setnewPizza({...newPizza, [name]:value})
   }

   const onSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault()
      if (newPizza.title && newPizza.price && newPizza.img){
         const newPizzaOBJ:PizzaObj = {
            ...newPizza,
            price:Number(newPizza.price),
            id:Date.now(),
            }
         setnewPizza(initState) 
         p.addPizza(newPizzaOBJ)
      }else{
         alert("Заполни Верно все поля!")
      }
   }
return(
   <form onSubmit={onSubmit}>
      <input type="text" 
      placeholder="Название"
      name="title"
      value={newPizza.title}
      onChange={onChange}
      />
      <input type="text" 
      placeholder="Цена"
      name="price"
      value={newPizza.price}
      onChange={onChange}
      />
      <input type="text" 
      placeholder="Картинка"
      name="img"
      value={newPizza.img}
      onChange={onChange}
      />
      <button type="submit" > + Добавить в меню</button>
   </form>
)
}
export default AddPizzaFrom