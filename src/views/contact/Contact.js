import Navbar from "./../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
import imgfooter from "./New folder/about1.jpg"
export default function Contact(){
    return(
        <>
        <div>
        <Navbar/>
        <h2> this is conatact page </h2>
        < img src={imgfooter}   style={{ width: '100%', height: '400px' }} />

    



        <Footer/>
      
            
        </div>
        </>
    )

}
