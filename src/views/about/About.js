import Navbar from "./../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
import imgabout from "./images/about1.jpg"
export default function Contact(){
    return(
        <>
        <div>
        <Navbar/>
        <h2> this is about page </h2>
        < img src={imgabout}   style={{ width: '100%', height: '400px' }} />

    



        <Footer/>
      
            
        </div>
        </>
    )

}