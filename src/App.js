import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function App() {

  // States
    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState('all')
    const [filteredTodos, setFilteredTodos] = useState ([]);



  //UseEffect
  useEffect(() => {
    getLocalTodos();
  }, []);



  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  // Functions
    const filterHandler = () => {
      switch(status){
        case 'completed':
          setFilteredTodos(todos.filter(todo => todo.completed === true ));
          break;
        case 'uncompleted':
          setFilteredTodos(todos.filter(todo => todo.completed === false ));
          break;
        default:
          setFilteredTodos(todos);
          break;
      }
    }
// Local
    const saveLocalTodos = () => {
      localStorage.setItem('todos', JSON.stringify(todos));
    };

    const getLocalTodos = () => {
      if(localStorage.getItem('todos') === null){
        localStorage.setItem('todos', JSON.stringify([]));
      } else {
       let todoLocal = JSON.parse(localStorage.getItem('todos'));
       setTodos(todoLocal);
      }
    };



  return (
    <div className="App">
      <header>
      <h2 className='myName'>Todo App</h2>
      </header>
      <div>
        <Form setInputText= {setInputText} todos={todos} setTodos={setTodos} inputText={inputText} setStatus={setStatus} />
        <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} />
      </div>
      <footer>
        <h3>created using React by Malvin</h3>
        <div className='icons'>
        <a href="https://github.com/Malvin-mi" className='github' ><FaGithub className='github' /></a>
        <a href="https://www.linkedin.com/in/michael-ogunyemi-3888b7149?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BHswOjchUQrKhOw3FBN3HPw%3D%3D" className='github' ><FaLinkedin className='github' /></a>
        </div>
        <p className='mail'><a href="mailto:michaelogunyemi3@gmail.com">michaelogunyemi3@gmail.com</a></p>
         

      </footer>
    
    </div>
  );
}

export default App;
