import React from 'react';
import "./styles.css"
import {PizzaObj} from "../models/PizzaModel"

interface props{
   PizzaObj:PizzaObj,
   updatePizza : (updPizza:PizzaObj)=>void,
   PizzaEdit: ()=>void
}
const EditPizzaForm:React.FC<props>=(p)=>{
   
   const [editPizza,seteditPizza] = React.useState<PizzaObj>(p.PizzaObj)

   const onChange =(e:React.ChangeEvent<HTMLInputElement>)=>{
      const {name,value} = e.target
      seteditPizza({
      ...editPizza,
      [name]:value
      })
   }

   const onSubmit =(e:React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault()
      const {title,price,img} = editPizza
      if(title && price && img) {
         p.updatePizza(editPizza)
         p.PizzaEdit()
      }
   }
return(
   <form className='edit-form' onSubmit={onSubmit}>
      <input
      type="text"
      name='title'
      placeholder='Название'
      value={editPizza.title}
      onChange={onChange}
      />
      <input
      type="text"
      name='price'
      placeholder='Цена'
      value={editPizza.price}
      onChange={onChange}
      />
      <input
      type="text"
      name='img'
      placeholder='Картинка'
      value={editPizza.img}
      onChange={onChange}
      />
      <button type='submit'>Подтвердить</button>
   </form>
)
}
export default EditPizzaForm;