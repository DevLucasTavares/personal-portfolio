import { useState } from "react";
import { useForm } from "../../hooks";
import { HomePageContainer, FormContainer } from "./styled";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
} from "@chakra-ui/react";

export const HomePage = () => {
  const [form, onChangeInputs, clearInputs] = useForm({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isEmailValid, setIsEmailValid] = useState(true)

  const onSubmit = (e) => {
    e.preventDefault();
    setIsEmailValid(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(form.email))
  };

  return (
    <HomePageContainer>
      <FormContainer>
        <form onSubmit={onSubmit}>
          <FormControl isInvalid={!isEmailValid}> {/*E-mail*/}
            <FormLabel>Email</FormLabel>
            <Input
              name="email"
              type="email"
              value={form.email}
              onChange={onChangeInputs}
              placeholder="your.best.email@email.com"
            />
            {!isEmailValid ? (
                <FormHelperText as="p"> E-mail inválido.</FormHelperText>
              ) : undefined}
          </FormControl>
          <Button type="submit" variant="form">
            Enviar
          </Button>
        </form>
      </FormContainer>
    </HomePageContainer>
  );
};
