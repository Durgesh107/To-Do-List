import { useState, useRef} from 'react';
import './App.css'
import List from './List.jsx'
import Audio from './assets/audio.mp3'

function App() {
  const [todo,setTodo]=useState('');
  const [tasks,setTasks]=useState([]);


  const changeHandler=e=>{
    setTodo(e.target.value)
  }
  const submitHandler=e=>{
    e.preventDefault();
   
    const newTasks =[...tasks,todo]
    setTasks(newTasks)
    
    setTodo('')

  }
  
const deleteHandler=indexvalue=>{
  const newTasks= tasks.filter((task,index)=> index!=indexvalue)
  setTasks(newTasks);
}

 const audioRef = useRef(null);
 const playAudio = () => {
  if (audioRef.current) {
    audioRef.current.play();
  }
};


  return (
    <>
    <div className='outer'>
    <div className='box'>
      <h1 className='header'>To-Do List </h1>
      <div>
        <form onSubmit={submitHandler} className='form'>
          <input type='text' value={todo} onChange={changeHandler} className='text'/> &nbsp;&nbsp;
          <input type='submit'  value='Add'  className='add' onClick={playAudio} />
        </form>
       
        <List taskslist={tasks} deleteHandler={deleteHandler}/>
        <audio ref={audioRef}>
        <source src={Audio} type="audio/mpeg" />
      </audio>
      </div>
    </div>
    </div>

    </>
  )
}

export default App
