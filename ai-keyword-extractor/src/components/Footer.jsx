import { Box, Text, Image, Flex } from "@chakra-ui/react";
import logo from "../assets/openai.png";

const Footer = () => {
  return (
    <Box marginTop={50}>
      <Flex justifyContent="center" alignContent="center">
        <Image src={logo} marginRight={3} />
        <Text color="black">Powered By Open AI</Text>
      </Flex>
    </Box>
  );
};

export default Footer;
