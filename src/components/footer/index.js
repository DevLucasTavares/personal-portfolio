import { Box, Flex, Link, Text } from "@chakra-ui/layout"
import { FooterStyled } from "./styled"


export const Footer = () => {

  return (
    <FooterStyled>
      <Flex 
        w='90vw' 
        // bg='orange' 
        // align='start'
        justify='end'
        // p='0 100px 0 100px'
        gap='10%'
        // p={[4]}
        p='15px'
      >
        <Flex direction='column'>
          <Text as='b'>Meus Deploys</Text>
          <Link href="">Labeddit</Link>
          <Link href="https://pokedex-lucastavaresdev.vercel.app/">Pokedex</Link>
          <Link href="https://knowhere-beta.vercel.app/">Knowhere</Link>
          <Link href="https://zeldiary.vercel.app/">Zeldiary</Link>
        </Flex>
        <Flex direction='column'>
          <Text as='b'>Me acompanhe</Text>
          <Link href="https://github.com/DevLucasTavares">Github</Link>
          <Link href="https://www.linkedin.com/in/devlucastavares/">LinkedIn</Link>
          <Link href="https://twitter.com/DevLucasTavares">Twitter</Link>
        </Flex>
        <Flex direction='column'>
          <Text as='b'>Contato</Text>
          <Link href="https://discord.gg/a4SCFJVHFJ">Discord</Link>
          <Link href="https://wa.me/5521981894373">Whatsapp</Link>
          <Link href="">Telegram</Link>
        </Flex>
      </Flex>

      <Box w='90vw' h='1px' bgColor='white'/>

      <Flex
      // bg='red'
      w='90vw'
      h='100%'
      justify='center'
      align='center'
      // p-top='10px'
      >
      <Text>©2023 Lucas Tavares, All right reserved.</Text>
      </Flex>
      
    </FooterStyled>
  )
}