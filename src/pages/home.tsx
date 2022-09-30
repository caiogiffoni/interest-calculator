import { Box, Input, Text } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import api from "../services";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { InputForm } from "../components/InputForm/Input";
import { normalizeAmount } from "../utils/masks";

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
    amount: yup
      .string()
      .required("Campo obrigatório")
      .test(
        "moreThan999",
        "Valor deve ser maior ou igual que R$1.000,00",
        (value) => {
          return (
            Number(
              value?.replace("R$", "").replaceAll(".", "").replace(",", ".")
            ) > 999
          );
        }
      )
      .test(
        "lessThan100000001",
        "Valor deve ser menor ou igual que R$100.000.000,00",
        (value) => {
          return (
            Number(
              value?.replace("R$", "").replaceAll(".", "").replace(",", ".")
            ) <= 100000000
          );
        }
      ),

    installments: yup
      .number()
      .lessThan(13, "Campo deve ser menor ou igual a 12")
      .positive("Campo deve ser positivo")
      .required("Campo obrigatório")
      .transform((value) => (isNaN(value) ? undefined : value)),

    mdr: yup
      .number()
      .lessThan(101, "Campo deve ser menor ou igual a 100")
      .positive("Campo deve ser positivo")
      .required("Campo obrigatório")
      .transform((value) => (isNaN(value) ? undefined : value)),
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

  const amountValue = watch("amount");
  const installmentsValue = watch("installments");
  const mdrValue = watch("mdr");

  useEffect(() => {
    setValue("amount", normalizeAmount(amountValue));
    if ([amountValue, installmentsValue, mdrValue].every((value) => !!value)) {
      handleSubmit(onSubmitFunction)();
    }
  }, [amountValue, installmentsValue, mdrValue]);

  const onSubmitFunction = async (data: IPost) => {
    data = {
      ...data,
      amount: data.amount
        .replace("R$ ", "")
        .replaceAll(".", "")
        .replace(",", "."),
    };
    postApi(data);
  };

  const postApi = (data: IPost) => {
    api
      .post("", data)
      .then((res) => {
        console.log(res);
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
        h={["600px", "500px"]}
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
          <InputForm
            placeholder="Informe o valor de venda"
            label="Informe o valor de venda"
            error={errors.amount}
            colorWordsDesc="green"
            {...register("amount")}
          />

          <InputForm
            placeholder="Em quantas parcelas"
            label="Número de parcelas"
            error={errors.installments}
            colorWordsDesc="green"
            {...register("installments")}
          />

          <InputForm
            placeholder="Informe o percentual de MDR"
            label="Percentual de MDR"
            error={errors.mdr}
            colorWordsDesc="green"
            {...register("mdr")}
          />
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
