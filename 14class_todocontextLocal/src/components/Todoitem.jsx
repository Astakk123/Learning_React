import React from 'react'
import { useTodo } from '../context/TodoContext';
import { useState } from 'react';



function Todoitem({todo}) {
    const [isTodoEditable, setIsTodoEditable] = useState(false);
    // because the selected toto is editable or not when we touch to edit then only we edit so we stored that in state 
    const [todoMsg, setTodoMsg] = useState(todo.todo);

   

 // we will do the same thing we did in the todo form to use the context so let's do that 
  
 // but here we have to think what are the functionality we need from the TodoCotext in the todoform 
 // we had requirement of the only addtodo function just to add the the todos and we defined some logic i.e conditions
 // but here the fucntions are more so look carefully that are updatedTodo, deleteTodo, toggleCompleted. 

 const {updatedTodo, deleteTodo, toggleComplete} = useTodo()


//  writing function 
const editTodo = () => {
    updatedTodo(todo.id, {...todo, todo: todoMsg})
    setIsTodoEditable(false)
}


const toggleCompleted = () => {
    toggleComplete(todo.id)
}





 // the below return is of the function 

    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed}
                onChange={toggleCompleted}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                } ${todo.completed ? "line-through" : ""}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.completed) return;

                    if (isTodoEditable) {
                        editTodo();
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={todo.completed}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
              className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
              onClick={() => deleteTodo(todo.id)}
          >
              ❌
          </button>
        </div>
    );
}

export default Todoitem


// import React, { useState } from 'react'
// import { useTodo } from '../contexts/TodoContext';

// function TodoItem({ todo }) {
//   const [isTodoEditable, setIsTodoEditable] = useState(false)
//   const [todoMsg, setTodoMsg] = useState(todo.todo)
//   const {updateTodo, deleteTodo, toggleComplete} = useTodo()

//   const editTodo = () => {
//     updateTodo(todo.id, {...todo, todo: todoMsg})
//     setIsTodoEditable(false)
//   }
//   const toggleCompleted = () => {
//     //console.log(todo.id);
//     toggleComplete(todo.id)
//   }

//   return (
//       <div
//           className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
//               todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
//           }`}
//       >
//           <input
//               type="checkbox"
//               className="cursor-pointer"
//               checked={todo.completed}
//               onChange={toggleCompleted}
//           />
//           <input
//               type="text"
//               className={`border outline-none w-full bg-transparent rounded-lg ${
//                   isTodoEditable ? "border-black/10 px-2" : "border-transparent"
//               } ${todo.completed ? "line-through" : ""}`}
//               value={todoMsg}
//               onChange={(e) => setTodoMsg(e.target.value)}
//               readOnly={!isTodoEditable}
//           />
//           {/* Edit, Save Button */}
//           <button
//               className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
//               onClick={() => {
//                   if (todo.completed) return;

//                   if (isTodoEditable) {
//                       editTodo();
//                   } else setIsTodoEditable((prev) => !prev);
//               }}
//               disabled={todo.completed}
//           >
//               {isTodoEditable ? "📁" : "✏️"}
//           </button>
//           {/* Delete Todo Button */}
//           <button
//               className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
//               onClick={() => deleteTodo(todo.id)}
//           >
//               ❌
//           </button>
//       </div>
//   );
// }

// export default TodoItem;
