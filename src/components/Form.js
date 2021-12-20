import React from 'react';
import { FaPlusSquare } from "react-icons/fa";

const Form = ({setInputText, todos, setTodos, inputText, setStatus }) => {
    const inputTextHandler = (e) => {
     console.log(e.target.value);
     setInputText(e.target.value)
    };

    const submitTodoHandler = (e) => {
       e.preventDefault();
       setTodos([...todos, {text: inputText, completed: false, id: Math.random()*1000 }]);
       setInputText("");
    };

    const statusHandler = (e) => {
      setStatus(e.target.value);
    };
    return (
        <form>
            <div className='form-sel'>
            <input value={inputText} type="text" className='todo-input' onChange={inputTextHandler}/>
            <button className='todo-button' type='submit' onClick={submitTodoHandler}>
                <FaPlusSquare/>
            </button>
            </div>
            <div className='select'>
                <select onChange={statusHandler} name="todos" className='filter-todo'>
                    <option className='opt' value="all">All</option>
                    <option className='opt' value="completed">Completed</option>
                    <option className='opt' value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>

    )
}

export default Form; 