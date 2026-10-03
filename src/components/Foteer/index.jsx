import { Container } from "./styles"
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";
import { SiGooglemaps } from 'react-icons/si';
import { GiPadlock } from "react-icons/gi";
import { Link } from "react-router-dom";


export function Footer(){
    return(

       <Container>

        <div>
            <h2>Redes Sociais</h2>
            
            <Link href="https://wa.me" target="_blank" rel="noopener noreferrer"> <FaWhatsapp color="#168723"/>  Whatssap </Link>


            <Link href="https://www.instagram.com " target="_blank" rel="noopener noreferrer"> <FaInstagram color="#a4135b"/>  Instagram </Link>


            <Link href="https://www.facebook.com " target="_blank" rel="noopener noreferrer"> <FaFacebook color="#1877F2" /> Facebook </Link>
           
        </div>
        
        <div>
            <h2>Localizaçao</h2>
            <Link href="https://www.google.com/maps/place/Av.+Engenheiro+Lu%C3%ADs+Carlos+Berrini+-+Itaim+Bibi,+S%C3%A3o+Paulo+-+SP/@-23.6054637,-46.7033786,15z/data=!3m1!4b1!4m6!3m5!1s0x94ce5734ed964f87:0xcd3b4eacb68f1ad4!8m2!3d-23.605464!4d-46.6930788!16s%2Fm%2F0hr8j8q?entry=ttu&g_ep=EgoyMDI2MDkyOC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer"> <SiGooglemaps color='#EA4335'/> Ver Localizaçao </Link>
        </div>

        <div>
            <Link to={"/adm"} >Configuraçoes <GiPadlock />
            </Link>
          
        </div>

       </Container>
    )
}

export default Footer