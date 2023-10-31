import { Button } from "@chakra-ui/react"
import { HeaderStyled } from "./styled"
import { useNavigate } from "react-router-dom"
import { theme } from "../../styles";
import { goToAboutPage, goToExperiencesPage, goToHomePage, goToProjectsPage } from "../../routes/coordinator"

export const Header = () => {

  const navigate = useNavigate()

  return (
    <HeaderStyled>

      <Button 
        fontSize={['l', 'xl']} 
        color='white' 
        bg='' 
        _hover={{bg:theme.colors.azul["100"]}} 
        onClick={()=> goToHomePage(navigate)}
      >Home</Button>

      <Button 
        fontSize={['l', 'xl']} 
        color='white' 
        bg='' 
        _hover={{bg:theme.colors.azul["100"]}} 
        onClick={()=> goToAboutPage(navigate)}
      >Sobre Mim</Button>

      <Button 
        fontSize={['l', 'xl']} 
        color='white' 
        bg='' 
        _hover={{bg:theme.colors.azul["100"]}} 
        onClick={()=> goToExperiencesPage(navigate)}
      >Experiências</Button>

      <Button 
        fontSize={['l', 'xl']} 
        color='white' 
        bg='' 
        _hover={{bg:theme.colors.azul["100"]}} 
        onClick={()=> goToProjectsPage(navigate)}
      >Projetos</Button>
      
    </HeaderStyled>
  )
}