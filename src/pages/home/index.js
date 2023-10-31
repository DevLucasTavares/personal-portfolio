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
import Knowhere from "../../assets/Knowhere.png"
import Labecommerce from "../../assets/Labecommerce.png"
import Labeddit from "../../assets/Labeddit.png"
import Labook from "../../assets/Labook.png"
import Pokedex from "../../assets/Pokedex.png"
import ToDoList from "../../assets/To Do List.png"
import Zeldiary from "../../assets/Zeldiary.png"

import { AiFillHtml5 } from 'react-icons/ai'
import { DiCss3 } from 'react-icons/di'
import { BsGit } from 'react-icons/bs'
import { SiChakraui, SiExpress, SiSqlite } from 'react-icons/si'
import { 
  BiLogoJavascript, 
  BiLogoTypescript, 
  BiLogoReact, 
  BiLogoVuejs, 
  BiLogoNodejs, 
  BiLogoAws, 
  BiLogoFirebase 
} from 'react-icons/bi'

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";

import { theme } from "../../styles";



export const HomePage = () => {

  // Slider tech configs
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 0,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3
        }}]};
  // Slider tech content
  const technologies = [
    {icon: AiFillHtml5, text: 'HTML'},
    {icon: DiCss3, text: 'CSS'},
    {icon: BiLogoJavascript, text: 'Javascript'},
    {icon: BiLogoTypescript, text: 'Typescript'},
    {icon: BiLogoReact, text: 'React.Js'},
    {icon: BiLogoVuejs, text: 'Vue.Js'},
    {icon: BiLogoNodejs, text: 'Node.Js'},
    {icon: SiExpress, text: 'Express.Js'},
    {icon: BiLogoAws, text: 'AWS'}, 
    {icon: BiLogoFirebase, text: 'Firebase'},
    {icon: BsGit, text: 'Git'}, 
    {icon: SiSqlite, text: 'SQLite'},
    {icon: SiChakraui, text: 'ChakraUi'}, 
  ]

  // Slider projects configs
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
  // Slider projects content
  const projects = [
    {
      name: 'Zeldiary',
      desc: 'This is the Project 1',
      banner: Zeldiary,
      repo: 'https://github.com/DevLucasTavares/projeto-intro-web',
      deploy: '',
    },
    {
      name: 'Knowhere',
      desc: 'This is the Project 2',
      banner: Knowhere,
      repo: 'https://github.com/DevLucasTavares/projeto-frontendreact',
      deploy: '',
    },
    {
      name: 'Pokedex',
      desc: 'This is the Project 3',
      banner: Pokedex,
      repo: 'https://github.com/DevLucasTavares/projeto-react-apis',
      deploy: '',
    },
    {
      name: 'Labecommerce',
      desc: 'This is the Project 4',
      banner: Labecommerce,
      repo: 'https://github.com/DevLucasTavares/labecommerce-backend',
      deploy: '',
    },
    {
      name: 'Labook',
      desc: 'This is the Project 5',
      banner: Labook,
      repo: 'https://github.com/DevLucasTavares/labook-backend',
      deploy: '',
    },
    {
      name: 'To Do List',
      desc: 'This is the Project 6',
      banner: ToDoList,
      repo: 'https://github.com/DevLucasTavares/todolist-java-backend',
      deploy: '',
    },
    {
      name: 'Labeddit',
      desc: 'This is the Project 7',
      banner: Labeddit,
      repo: 'https://github.com/DevLucasTavares/labeddit-backend',
      deploy: '',
    },
  ]

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
        
        <Slider {...settings}> {technologies.map((tech, index) => (
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
                <Image src={project.banner} boxSize='100%' borderRadius='10px'/>
                <Link href={project.repo} target="blank">
                  <Text>{project.name}</Text>
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
