# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# *Notes of the day*

``1) to run the tailwind we have to create a project as we do 
in the normal project doing``  npm create vite@latest

``after that we go to the directory i.e folder by cd folder name`` 

`then we install the css project  all is given one by one see below` 



 # Create your project 

Start by creating a new Vite project if you don’t have one set up already. The most common approach is to use `npm create Vite@latest` we have discussed that in the first notes
 


*Terminal (the given below is done in terminal )*


## Total description and proceduce in short 

* npm create vite@latest my-project -- --template react
cd my-project
Install Tailwind CSS
Install tailwindcss and its peer dependencies, then generate your tailwind.config.js and postcss.config.js files.

* In Terminal 
Configure your template paths
Add the paths to all of your template files in your tailwind.config.js file.<br> 

* this below code When we write in the terminal will help to create a tailwind.config.js file 

```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

## Write the below code in the the `tailwind.config.js`

/** @type {import('tailwindcss').Config} */
export default {  
```javascript
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
Add the Tailwind directives to your CSS
Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file.

## write the below given code in the, ``` index.css```
```css
@tailwind base; 
@tailwind components;
@tailwind utilities;
````
Start your build process
Run your build process with `npm run dev`

 



## type the below line in you terminal to start the project
```
npm run dev
```
Start using Tailwind in your project
Start using Tailwind’s utility classes to style your content.

 # go to `App.jsx` and make change

```javascript
export default function App() {
return (
        <h1 className="text-3xl font-bold   underline">
      Hello world!
    </h1>
      )
}
```

# Notes on Props 

1. The most important things about props
 ```
 when we pass any value in the executional tag which is in return </> directly accessible in the 
 props that can be shown in the ui using the variable in html of the component
 ```

