import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
  components: {
    Button: {
      variants: {
        header:{
          bg: "azul.200"
        },
        form:{
          width: "100%",
          bg: "azul.500"
        }
      }
    }
  },
  colors: {
    azul: {
      // chakra usa de 100 a 900
      100: "#0F376B",
      200: "#D1E5FF",
      300: "#0A3266",
      400: "#1871E5",
      500: "#1256B0"
    }
  }
})