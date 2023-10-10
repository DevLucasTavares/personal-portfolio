import { Router } from './routes'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './styles/theme';

const App = () => {
  return (
    <ChakraProvider  theme={theme}>
      <Router/>
    </ChakraProvider>
  );
}

export default App;
/*
<div>
      <p>DevLucasTavares is typing...</p>
      <h1>Hello World...</h1>

      <img src="https://i.pravatar.cc/150" alt="" />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo totam ut modi quos reprehenderit, mollitia magnam dolor illo debitis nemo nam aliquid, nostrum aliquam, eaque dignissimos? Adipisci eius aut incidunt.</p>
      <div>
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
      </div>
    </div>
*/