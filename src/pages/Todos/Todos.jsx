import React from 'react'
import { Counter } from '../../components/Counter/Counter'
import { Context } from '../../context'
import { TodoItem } from '../../components/TodoItem/TodoItem'

export const Todos = () => {    
  const [todos, setTodos] = useState([])
  const [inputValue,setInputValue] = useState()

  const createTodos = () => {
    let arr = [...todos, {text:inputValue,complete:false}]
    if(inputValue){
      setTodos(arr)
      setInputValue("")
      localStorage.setItem("todos",JSON.stringify(arr)) 
    }
  }

  const completeTodo = (id) => {
    let arr = [...todos];
    arr[id].complete = !arr[id].complete
    // localStorage.setItem("todos", JSON.stringify(arr))
    setTodos(arr)
    updateLocal(arr)
  }

  useEffect(()=>{
    let localTodos = JSON.parse(localStorage.getItem("todos"))
    localTodos && setTodos(localTodos)
  },[])
  
  const updateLocal = (arr) =>{
    localStorage.setItem("todos",JSON.stringify(arr ))
  }

  const deleteTodo = (id) => {
    let il =  [...todos]
    il.splice(id,1)
    setTodos(il)
    updateLocal(arr)
  }
  return (
    <Context.Provider value={{completeTodo,deleteTodo}}>
      <div className='App'>
      <div>
        <input type="text" 
        value={inputValue}
        onChange={(e)=> {
          setInputValue(e.target.value)
        }}
        />
        <button onClick={createTodos}>ADD</button>
      </div>
      <div>
      {
        todos.map((el,id)=>{
          return <TodoItem  todo={el} key={id} id={id}/>
        })
      }
      </div>
    </div>
    {/* <Example/> */}
    <Counter/>
    <Button/>
    </Context.Provider>
  ) 
}