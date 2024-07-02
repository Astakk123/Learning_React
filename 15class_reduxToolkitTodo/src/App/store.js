import {configureStore} from '@reduxjs/toolkit';

import todoReducer from '../features/todo/todoSlice';
// here we imported the configure store from the @reduxjs/toolkit so that we can use it below 


// now we are creating a store using the method configureStore() and passing an empty object 
// and at the same line we are exporting it in one line 

export const store = configureStore({
    reducer: todoReducer
})

// Next step is creating reducer but that is called 
// as Slice in the redux tool kit we will do that in another file totoSlice.js card

// after doing that in the todoSlice.js we came back  and importing reducer