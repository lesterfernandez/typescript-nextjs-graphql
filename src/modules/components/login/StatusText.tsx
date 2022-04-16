import { Heading } from "@chakra-ui/react";

interface Props {
  errMsg?: string;
  statusMsg?: string;
}

const StatusText: React.FC<Props> = ({ errMsg, statusMsg }) => {
  return errMsg ?? statusMsg ? (
    <Heading
      color={errMsg ? "red.500" : "green.500"}
      fontSize="lg"
      textAlign="center"
    >
      {errMsg ?? statusMsg}
    </Heading>
  ) : null;
};

export default StatusText;
