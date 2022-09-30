import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Icon,
  Input as ChakraInput,
  InputGroup,
  InputLeftElement,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";
import {
  useEffect,
  useState,
  useCallback,
  useRef,
  ForwardRefRenderFunction,
  forwardRef,
} from "react";
import {
  FieldError,
  SubmitErrorHandler,
  SubmitHandler,
  UseFormRegister,
} from "react-hook-form";

// interface IPost {
//   amount: string;
//   installments: string;
//   mdr: string;
// }

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  error?: FieldError | null;
  colorWordsDesc: string;
}

// type inputVariationOptions = {
//   [key: string]: string;
// };

// const inputVariation: inputVariationOptions = {
//   error: "red.500",
//   default: "gray.400",
//   focus: "gray.800",
//   filled: "green.500",
// };

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, error = null, label, colorWordsDesc, ...rest },
  ref
) => {
  // const [value, setValue] = useState<Number | String>(0);
  // const [variation, setVariation] = useState("default");

  // useEffect(() => {
  //   if (error) setVariation("error");
  // }, [error]);

  // const handleInputFocus = useCallback(() => {
  //   if (!error) setVariation("focus");
  // }, [error]);

  // const handleInputBlur = useCallback(() => {
  //   if (value != 0 && !error) setVariation("filled");
  //   console.log("mudou");
  // }, [error, value]);

  return (
    <FormControl isInvalid={!!error}>
      {label && <FormLabel color={colorWordsDesc}>{label}</FormLabel>}
      <InputGroup flexDirection={"column"}>
        <ChakraInput
          name={name}
          // color={inputVariation[variation]}
          // borderColor={inputVariation[variation]}
          // onFocus={handleInputFocus}
          // onBlurCapture={handleInputBlur}
          bgColor="gray.50"
          variant="outline"
          // onChangeCapture={(e) => {
          //   setValue(e.currentTarget.value);
          // }}
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
