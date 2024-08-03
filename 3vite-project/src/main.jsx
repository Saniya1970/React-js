import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//uderstanding flow structure of react
// function MyApp(){
//   return(
//     <div>
//     <h1>Custom App</h1>
//     </div>
//   )
// }

// const reactElement={
//   type:'a',
//   props:{
//    href:'https://google.com',
//    target:'_blank'
//   },
//   Children:'Click me to visit google'
// }

// const areactElement = React.createElement(
//   'a',
//   {
//     href:'http://google.com',target:"_blank"
//   },
//   'click to visite google'
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  
// areactElement
<App />

)
