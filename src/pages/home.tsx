import { Box, Input, Text } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { useState } from "react";

export const Home = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");

  const submit = () => {
    console.log(input1);
    console.log(input2);
    console.log(input3);
  };
  return (
    <Box
      w="100vw"
      h="100vh"
      backgroundColor="#F5F7FA"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        backgroundColor="#ffffff"
        w="800px"
        h="400px"
        display="flex"
        border="1px solid #b6b6b6"
        borderRadius="10px"
      >
        <Box
          w="65%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          gap={8}
          padding="0px 100px"
        >
          <Text fontSize="2xl" as="b" color="#817d7d">
            Simule a sua Antecipação
          </Text>
          <Input
            placeholder="Infome o valor da venda"
            value={input1}
            onChange={(e) => setInput1(e.target.value)}
          />
          <Input
            placeholder="Em quantas parcelas"
            value={input2}
            onChange={(e) => setInput2(e.target.value)}
          />
          <Input
            placeholder="Informe o percentual de MDR"
            value={input3}
            onChange={(e) => setInput3(e.target.value)}
          />
          <Button colorScheme="blue" onClick={() => submit()}>
            Enviar (retirar depois)
          </Button>
        </Box>
        <Box
          w="35%"
          backgroundColor="#F7F9FA"
          borderRightRadius="10px"
          color="bluePrimary"
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          gap={4}
          padding="0px 0px"
        >
          <Text as="b">VOCÊ RECEBERÁ:</Text>
          <Text>
            Amanhã:{" "}
            <Text as="b" color="blueSecondary">
              R$ 0,00
            </Text>
          </Text>
          <Text>
            Em 15 dias:{" "}
            <Text as="b" color="blueSecondary">
              R$ 0,00
            </Text>
          </Text>
          <Text>
            Em 30 dias:{" "}
            <Text as="b" color="blueSecondary">
              R$ 0,00
            </Text>
          </Text>
          <Text>
            Em 90 dias:{" "}
            <Text as="b" color="blueSecondary">
              R$ 0,00
            </Text>
          </Text>
        </Box>
      </Box>
    </Box>
  );
};
