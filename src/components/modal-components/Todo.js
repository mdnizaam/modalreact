import React ,{useState} from 'react';
import BackDrop from './BackDrop';
import Modal from './Modal';
import "../../index.css";
const Todo = (props) => {

    const [show ,setShow]=useState(false)


    const clickHandler=()=>{
        setShow(true)
    }

    const closeModalHandler=()=>{
        setShow(false)
    }
  return (<div className='card'>
      <p>{props.text}</p>
      <div className='actions'>
          <button className='btn' onClick={clickHandler}>Delete</button>
      </div>

    {show && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler}/>}
    {show && <BackDrop  onCancel={closeModalHandler}/>}
  </div>
  
  );
};

export default Todo;
