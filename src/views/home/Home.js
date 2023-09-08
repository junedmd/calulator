import Navbar from "./../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
import imguniversity from  "./images/university1.jpg"

export default function Home(){
    return(
        <>
        <div>
        <Navbar/>
        <h2> this is home  page </h2>
        < img src={imguniversity}   style={{ width: '100%', height: '400px' }} />
      
        <Footer/>
      
            
        </div>
        </>
    )

}