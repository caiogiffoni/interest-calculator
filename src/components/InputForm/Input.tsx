import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputGroup,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";
import {

  ForwardRefRenderFunction,
  forwardRef,
} from "react";
import {
  FieldError,

} from "react-hook-form";



interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  error?: FieldError | null;
  colorWordsDesc: string;
}


const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, error = null, label, colorWordsDesc, ...rest },
  ref
) => {


  return (
    <FormControl isInvalid={!!error}>
      {label && <FormLabel color={colorWordsDesc}>{label}</FormLabel>}
      <InputGroup flexDirection={"column"}>
        <ChakraInput
          name={name}
          bgColor="gray.50"
          variant="outline"
          _hover={{ bgColor: "gray.10" }}
          _placeholder={{ color: "gray.500" }}
          ref={ref}
          {...rest}
        />
        {!!error && (
          <FormErrorMessage color="red.500">{error.message}</FormErrorMessage>
        )}
      </InputGroup>
    </FormControl>
  );
};

export const InputForm = forwardRef(InputBase);
