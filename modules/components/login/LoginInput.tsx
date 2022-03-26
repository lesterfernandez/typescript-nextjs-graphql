import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputProps,
} from "@chakra-ui/react";
import { Field, useField } from "formik";

type Props = InputProps & { name: string; label: string };

const LoginInput: React.FC<Props> = ({ name, label, ...props }) => {
  const [field, meta] = useField({ name });
  return (
    <FormControl isInvalid={!!meta.error && meta.touched}>
      <FormLabel fontWeight="semibold">{label}</FormLabel>
      <Input
        as={Field}
        {...props}
        {...field}
        autoComplete="off"
        focusBorderColor="purple.500"
        variant="flushed"
      />
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
};
export default LoginInput;
