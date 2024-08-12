import {React,useEffect} from 'react'
import './List.css'
import AOS from 'aos'
import 'aos/dist/aos.css'


const List = ({taskslist,deleteHandler}) => {
  { useEffect(()=>{
    AOS.init({duration:500});

},[]); }
  return (
    <>
      {taskslist.map((task,index) =>
      
      <div key={index} className='lists' >
       <div data-aos='fade-right'> <h3>{task} &nbsp; </h3></div> <div data-aos='fade-left'><button  className='btn' onClick={()=>{deleteHandler(index)}}>Delete</button></div>


      </div>)}
    </>
  )
}

export default List
