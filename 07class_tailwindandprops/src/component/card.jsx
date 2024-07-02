
// react function component short cut rfc for the below 

import React from 'react'

// When we create this kind of component every one gets the access of props lets see 

/*
here in the function card we have written (props) it is original syntax but there are ways  

directly the given name can be used instead of the props but the original is (props)

how to use directly props.username can be used when we do (props) in function but to do short if we 
we know  there is only an object that is username then we can destructure it that is in the place of (props)
we write ({username})

then we can pass this variable to the desired place in the card component html ruturn 
*/


// function Card(props) {            // we were using it before destructure but it is the original 
// function Card({Username, touch="touch me"}) {
function Card({ someuser, btn = "see more" }) {

    // console.log(someObject)    // this was used to know whether it is accessing or not
    // touch="touch me" is used to default if someone didn't use then it will automatically got set there 
    /* 
    we get this when we console props
     Object[[Prototype]]: Object card.jsx: 10
     Object[[Prototype]]: Object card.jsx: 10
     Object[[Prototype]]: Object card.jsx: 10
     Object
     Here the props is empty we can't access anything to show 
     when we pass the value in the imported cardfunction execution in this case i.e <Card/> see how 
     when we do <Card channel = "Chai aur code" />
     */
    return (

        <div className="relative h-[400px] w-[300px] rounded-md">
            <img
                src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
                alt="AirMax Pro"
                class="z-0 h-full w-full rounded-md object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t 
                from-gray-900 to-transparent">
            </div>
            <div className="absolute bottom-4 left-4 text-left">
                <h1 className="text-lg font-semibold text-white">{someuser.username} </h1>
                <p className="mt-2 text-sm text-gray-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
                    debitis?
                </p>
                <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-black"> {btn} →</button>
            </div>
        </div>

    )
}

export default Card

