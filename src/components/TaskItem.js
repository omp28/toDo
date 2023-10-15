import React from 'react';
import {AiFillDelete} from "react-icons/ai"

const TaskItem = ({ task, onDelete }) => {
  return (
   
    <li className=' py-2  list-decimal'>
      {task.text}
      <button className=' text-xl mx-3 border border-r-black border-b-black   ' onClick={() => onDelete(task.id)}><AiFillDelete /></button>
    </li>
   
  );
};

export default TaskItem;
