import IconBarbearia from "../../assets/icon.png"
import ImageBarbearia from "../../assets/logo-barbe.png";
import { IoStar } from "react-icons/io5";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { Conteiner, ConteinerIconName, EvaluationRanking, Icon, Name, ButtonInsta, ButtonWhats, ContainerSocialMedia } from "./styles"




function Header(){

    return(

        <>
        <Conteiner>
            <img src={ImageBarbearia} alt="Imagem barbearia" />

           
       

            <ConteinerIconName>

            <Icon> 

            <img src={IconBarbearia} alt="Ícone da barbearia" />

            </Icon>

            <Name>

            <h2>Barbearia da Galera</h2>
            <p>Transformando seu visual desde 2015</p>

            </Name>

            

            </ConteinerIconName>

           {/*Rank de avaliação */ }

            <EvaluationRanking>

           
             <li> 
             
             <h3> <IoStar color="#E1BA15"/> 5.5 </h3>
             <p>Avaliações</p>
            
            </li>
            
            <span>
             <li>
              <h3>1k+</h3>
              <p>Agendamentos</p>
              
              </li></span>


             <li>  

            <h3><IoStar color="#E1BA15"/>Top</h3> 
             
             <p>Preferido</p>
             </li>

            </EvaluationRanking>

            
        </Conteiner>

          <ContainerSocialMedia>
            
        <ButtonWhats 
            href="https://wa.me" target="_blank" rel="noopener noreferrer"> <FaWhatsapp color="#168723"/>  Whatssap 
        
        </ButtonWhats>


        <ButtonInsta
        href="https://www.instagram.com " target="_blank" rel="noopener noreferrer"> <FaInstagram color="#a4135b"/>  Instagram 
        
        </ButtonInsta>
            
        </ContainerSocialMedia>

        </>

    )

}

export default Header;