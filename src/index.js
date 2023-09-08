import ReactDOM from 'react-dom/client';

import Home from './views/home/Home'
import Contact from './views/contact/Contact';
import About from './views/about/About';


function App(){
   const path =window.location.pathname;

   switch(path){
    case "/":
        return <Home/>

     case "/about" :
        return <About/>  

     case "/contact" :
            return <Contact/>  
            
     default :
     return <h2> 404 PAGE NOT FOUND</h2>
   }


}
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <>
    <App/>

   </>
   )
