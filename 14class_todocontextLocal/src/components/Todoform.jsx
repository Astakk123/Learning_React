
import React from 'react'
import { useTodo } from '../context';
import { useState } from 'react';

function Todoform() {
    const [todo, setTodo] = useState("");

    //Here this is an component and we want to use the simple add todo method 
    // and that method is been created in a different file haveing todocontext and 
    // that has been exported as useTodo so we will use that see how to use that 

    const { addTodo } = useTodo()

    // here in the above line says that we want to use the addTodo and that is inside the UseTodo 
    // which contains a context and the method addTodo is been defined in the app.jsx we can
    //  see tha this is how we use that 

    // agian here we can write a method for the form where we can incorporate the same method i.e addTodo
    // we can even directly write the method i.e been defined in the app.jsx here if getting confused card

    const add = (e) => {
        e.preventDefault()

        if(!todo) return
        // addTodo({id: Date.now(), todo: todo, completed: false })
        addTodo({ todo, completed: false })
        

        // id: Date.now() is already defined so we can remove it here
        // todo: todo  has the same name in field and value so in new code syntax we can go with one value i.e todo card
        // so in the place of the todo: todo, we can write a single todo 

        setTodo("")
        // we sued the setTodo function and tried to clear the place as you can see setTodo("")
        // it means after adding the above all setTodo will vacant that form  all so that we can do another 
    }


    return (
        <form  onSubmit= {add}  className="flex">
            {/* onSubmit the form it will call the function defined above i.e add and all the activity will happen  */}
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                // now it is time to wireup, what is that see here 
                value={todo}
                // on cny change in it it will do something so lets do that using onchange 
                onChange={(e) => setTodo(e.target.value )}

            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}


export default Todoform


// import React, { useState } from 'react'
// import { useTodo } from '../contexts/TodoContext';

// function TodoForm() {
//     const [todo, setTodo] = useState("")
//     const {addTodo} = useTodo()

//     const add = (e) => {
//       e.preventDefault()

//       if (!todo) return

//       addTodo({ todo, completed: false})
//       setTodo("")
//     }

//   return (
//       <form onSubmit={add}  className="flex">
//           <input
//               type="text"
//               placeholder="Write Todo..."
//               className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
//               value={todo}
//               onChange={(e) => setTodo(e.target.value)}
//           />
//           <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
//               Add
//           </button>
//       </form>
//   );
// }

// export default TodoForm;