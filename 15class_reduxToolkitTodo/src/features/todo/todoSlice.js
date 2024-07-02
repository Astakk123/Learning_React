import { createSlice, nanoid } from "@reduxjs/toolkit";
//to use the createslice we imported and used it to create reducers which is slice 

// we will define how store will be,  diving its state  i.e initial state and many more 

const initialState = {
    todos: [{ id: 1, text: "Hello world"}]
}

// creating slice  which is required 

export const todoSlice = createSlice({
    // there must be name in the slice so look here 

    name: "todo", 
    initialState, 
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), // here the nanoid() create unique id 
                text: action.payload // we find the text  from the action so we did this we share the 
                                       // text and title is text so we will not use action.payload.text
                                       // only action.payload is enough.
                                       //  when we want something different we can use the dot and the 
                                       //required thing 
                // now the todo is not gone to the store so do that                        
            }
            state.todos.push(todo)
        }, 
        removeTodo: (state, action ) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
    }
})

// 1) here in the above the state and action are always important as it is the syntax 

// 2) in the api context we were writing the declarration of the function and not the definition but here it
//  is different we write the definition also 

// 3) here we create the slice and in that we create reducers before that we give the name and its initial 
// state and then reducers and different type of reducers here in the above addTodo and removeTodo two
// reducer and there is a syntax to write it you can observe 

// 4) here the "state" in reducers gives the states of the used things of the store in initial state 
// it gives the different values of the stores 

// 5) when to take any actio through the reducer function then the "action" provide the unique value so 
// that it can do the fucntion properly 

// the above todoSlice is been exported but the all reducers are not done in this especially
// and to do this we have to export it separately 

export const {addTodo, removeTodo} = todoSlice.actions // exported individual functionality 

export default todoSlice.reducer

