import React, { useState } from 'react';
import {GrFormAdd} from "react-icons/gr"

const TaskForm = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
      className=' border-2 shadow-2xl mx-2 rounded-md py-1 '
        type="text"
        placeholder="       Add a task    "
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className='   text-2xl border border-r-black border-b-black  ' type="submit">
      <GrFormAdd/>
      </button>
    </form>
  );
};

export default TaskForm;
