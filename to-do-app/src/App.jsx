import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [newItem, setnewItem] = useState("");
  const [addItem , setAddItem] = useState([]);
  function clickHandler(e){
    e.preventDefault();
     setAddItem(currentItem=>{
      return[
        ...currentItem, {
          Id:{}, title: newItem, completed: false
        },
      ]
     }  
     )
     setnewItem("");
  }
  function toggleTodo(id , completed ){
    setAddItem(item =>{
       return item.map( e =>{
        if(e.Id === id){
          return{...addItem , completed}
        }
        return e;
       })
    }
   
    )
  }
  function deleteToDo(id){
           setAddItem(e => {
            return e.filter(e=> e.id !== id)
           })
  }
  
  return (
    <div className="App">
           <h1 className='heading'>New Item</h1>
           <form className="add-item">
           <input type="text" value={newItem} className='input' onChange={(e)=>{
                 setnewItem(e.target.value)}}
                  />
           <button type='submit' onClick={clickHandler}>Add Item</button>
           </form>
           {addItem.length===0 && <p>"No TO Do"</p>}  
          <ul>{addItem.map(item=>{
            
             return(       
                    <li key={item.id}>
             <label>
               <input type="checkbox" checked={item.completed} onChange={e=> toggleTodo(item.id, e.target.checked
                )}
               />
               {item.title}
             </label>
             <button onClick={()=> deleteToDo(item.id)} className='btn-danger'>Delete</button>
             </li>
             )
          }
          )}
          </ul>
    </div>
  )
}

export default App
