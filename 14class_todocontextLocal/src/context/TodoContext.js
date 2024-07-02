
// here in this we are going to create the context and provider in one file 

import {createContext, useContext} from "react"


export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Todo msg", 
            completed: false, 
        },
    ], 
    addTodo: (todo) => {},
    updatedTodo: (id, todo) => {}, 
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})
// exported a context i.e TodoContext you can see and that is created  above you can see

export const useTodo = () => {
    return useContext(TodoContext)
}
//  useTodo is a hook a simple method it will help us to not write in main file 

export const TodoProvider = TodoContext.Provider
// this is we did here otherwise we had to write it in the main file 