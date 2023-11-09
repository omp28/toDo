import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { MdOutlineDeleteOutline } from "react-icons/md";

const TaskItem = ({ task, onDelete }) => {
  return (
    <div className=" flex-col justify-around mx-12 ">
      <li className=" py-2  list-decimal justify-around border-b-2 border-black">
        {task.text}
        <button
          className=" text-xl mx-3 border border-r-black border-b-black   "
          onClick={() => onDelete(task.id)}
        >
          <MdOutlineDeleteOutline className=" text-1xl" />
        </button>
      </li>
    </div>
  );
};

export default TaskItem;
