import { Button } from "@chakra-ui/button"
import { Flex } from "@chakra-ui/layout"

export const Loading = () => {

  return (
    <Flex
      w='100%'
      h={['60vh', '70vh']}
      justify='center'
      align='center'
    >
      <Button
      bg=''
      color='black'
      isLoading
      />
    </Flex>
  )}