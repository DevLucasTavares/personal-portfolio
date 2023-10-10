import { Button } from "@chakra-ui/react"
import { HeaderStyled } from "./styled"
import { useNavigate } from "react-router-dom"
import { goToAboutPage, goToExperiencesPage, goToHomePage, goToProjectsPage } from "../../routes/coordinator"

export const Header = () => {

  const navigate = useNavigate()

  return (
    <HeaderStyled>
      <Button variant='header' onClick={()=> goToHomePage(navigate)}>Home</Button>
      <Button variant='ghost'onClick={()=> goToAboutPage(navigate)}>Sobre Mim</Button>
      <Button variant='ghost'onClick={()=> goToExperiencesPage(navigate)}>Experiências</Button>
      <Button variant='ghost'onClick={()=> goToProjectsPage(navigate)}>Projetos</Button>
    </HeaderStyled>
  )
}