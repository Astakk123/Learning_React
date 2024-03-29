// trying to create an custom react in this class


// creating customer render function which is been  called at the end of the code 
// here the reactElement and container are paramenter

function customRender(reactElement, container) {
    /*
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    // continuously setting attribute one by one is not a good way to write 

    // domElement.setAttribute('href', reactElement.props.href)
    // domElement.setAttribute('target', reactElement.props.target)

    container.appendChild(domElement)
    */

    // the above is in comment because the code written which is set attribute is repeating so it is not good so see how to do that

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)
// now this will repeatedly set attribute and we get the desired result 
}
// this is the step how react see the html element we give, in this way it accept the value we pass in html

const reactElement = {
    type: 'a',
    props: {
        href: 'https://www.google.com',
        target: "_blank"
    },
    children: 'Click me to visit goole'
}

const mainContainer = document.querySelector('#root')

/*
this is code for render where reacteElement will be rendered in the mainContainer 
and the custome render function to be declared look at the top here reactElemetn, and mainContainer 
are argument 
*/
customRender(reactElement, mainContainer)





