import { Box, Input, Text } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import api from "../services";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

interface IPost {
  amount: string;
  installments: string;
  mdr: string;
}

export const Home = () => {
  const [vt, setVt] = useState(0.0);
  const [v15, setV15] = useState(0.0);
  const [v30, setV30] = useState(0.0);
  const [v90, setV90] = useState(0.0);

  const schema = yup.object().shape({
    amount: yup.string().required("Campo obrigatório"),
    installments: yup.string().required("Campo obrigatório"),
    mdr: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<IPost>({
    resolver: yupResolver(schema),
  });

  // const amountValue = watch("amount");

  // useEffect(() => {
  //   setInput1("amount", normalizeamount(input1));
  // }, [input1]);

  const onSubmitFunction = (data: IPost) => {
    api
      .post("", data)
      .then((res) => {
        setVt(res.data[1]);
        setV15(res.data[15]);
        setV30(res.data[30]);
        setV90(res.data[90]);
      })
      .catch((err) => {
        console.log(err);
      });
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
        w={["255px", "450px", "700px", "800px"]}
        h={["600px", "400px"]}
        display="flex"
        flexDirection={["column", "row"]}
        border="1px solid #b6b6b6"
        borderRadius="10px"
      >
        <Box
          w={["100%", "60%", "65%"]}
          h={["62%", "100%"]}
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          gap={8}
          padding={["0px 25px", "0px 30px", "0px 80px", "0px 100px"]}
        >
          <Text fontSize={["md", "md", "xl", "2xl"]} as="b" color="#817d7d">
            Simule a sua Antecipação
          </Text>
          <Input
            placeholder="Infome o valor da venda"
            {...register("amount")}
          />
          <Input
            placeholder="Em quantas parcelas"
            {...register("installments")}
          />
          <Input
            placeholder="Informe o percentual de MDR"
            {...register("mdr")}
          />
          <Button colorScheme="blue" onClick={handleSubmit(onSubmitFunction)}>
            Enviar (retirar)
          </Button>
        </Box>
        <Box
          w={["100%", "40%", "35%"]}
          h={["38%", "100%"]}
          backgroundColor="#F7F9FA"
          borderRightRadius="10px"
          color="bluePrimary"
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          gap={4}
          fontSize={["md", "sm", "lg"]}
        >
          <Box>
            <Text as="b">VOCÊ RECEBERÁ:</Text>
            <Box w="120%" border={`1px solid #76A0CF`}></Box>
          </Box>
          <Text>
            Amanhã:{" "}
            <Text as="b" color="blueSecondary">
              {vt.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </Text>
          </Text>
          <Text>
            Em 15 dias:{" "}
            <Text as="b" color="blueSecondary">
              {v15.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </Text>
          </Text>
          <Text>
            Em 30 dias:{" "}
            <Text as="b" color="blueSecondary">
              {v30.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </Text>
          </Text>
          <Text>
            Em 90 dias:{" "}
            <Text as="b" color="blueSecondary">
              {v90.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </Text>
          </Text>
        </Box>
      </Box>
    </Box>
  );
};
