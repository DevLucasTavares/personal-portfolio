import { 
  HomePageContainer, 
  FormContainer, 
  ProjectContainer, 
  ProjectChamber, 
  ResumeContainer 
} from "./styled";

import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Textarea,
  Image,
  Text,
  Flex,
  Icon,
  Link 
} from "@chakra-ui/react";

import pfp from "../../assets/ProfilePicture.jpeg"
import { technologies } from "../../constants/technologies"
import { projects } from "../../constants/projects"

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";

import { theme } from "../../styles";


export const HomePage = () => {

  const technologiesSliderSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 5,
    slidesToScroll: 1,
    rtl: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3
        }}]};

  const projectSliderSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 7500,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: true,
    rtl: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1
        }},
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2
          }},
      ]}

  return (
    <HomePageContainer>

      <ResumeContainer>
        <Image 
          src={pfp}
          alt="Lucas Tavares" 
          borderRadius='full'
          boxSize='200px'
          alignSelf='center'
        />
        <Text>Desenvolvedor Fullstack formado pelo bootcamp da Labenu e Tecnólogo em ADS em formação. Sou fascinado por tecnologia desde pequeno e meu desejo é poder cooperar na inclusão tecnológica.</Text>
        
        <Slider {...technologiesSliderSettings}>
          {technologies.map((tech, index) => (
            <Flex direction="column" alignItems="center" key={index}>
              <Icon as={tech.icon} boxSize={8} color="blue.500" />
              <Text fontSize={10}>{tech.text}</Text>
            </Flex>
          ))}
        </Slider>
      </ResumeContainer>

      <ProjectContainer>
        <Text textAlign='start'>O que eu venho fazendo...</Text>
        <Slider {...projectSliderSettings}>
          {projects.map((project, index) => (
            <Flex key={index} >
              <ProjectChamber>
                <Link href={project.repo} target="blank">
                  <Image src={project.banner} boxSize='100%' borderRadius='10px'/>
                  <Text as='b'>{project.name}</Text>
                </Link>
                <Text>{project.desc}</Text>
              </ProjectChamber>
            </Flex>
          ))}
        </Slider>
      </ProjectContainer>

      <FormContainer>
        <FormControl>
          <form 
            action='https://formsubmit.co/e0fc70e17734566579b85b619923ea80'
            method='POST'
          >
          <FormLabel>Estou esperando sua mensagem!</FormLabel>
          <Input placeholder='Nome' type='text' name='name' required/>
          <Input placeholder='Email' type='email' name='email' required/>
          <Textarea placeholder='Mensagem' type='text' name='message' />
          <Input type='hidden' name='_captcha' value='false'/>
          <Input type='hidden' name='_next' value='https://devlucastavares.vercel.app/'/>

          <Button
            color='white' 
            bg={theme.colors.azul["500"]}
            _hover={{bg:theme.colors.azul["100"]}}
            variant='solid'
            w='100%'
            type='submit'> Enviar </Button>
          </form>
        </FormControl>
      </FormContainer>

    </HomePageContainer>
  );
};
