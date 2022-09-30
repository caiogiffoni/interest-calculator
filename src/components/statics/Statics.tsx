import { Box, Text } from "@chakra-ui/react";
import { StaticsCard } from "./StaticCard";

interface IStatics {
  vt: number;
  v15: number;
  v30: number;
  v90: number;
}

export const Statics = ({ vt, v15, v30, v90 }: IStatics) => {
  return (
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
      <StaticsCard vx={vt} message="Amanhã" />
      <StaticsCard vx={v15} message="Em 15 dias" />
      <StaticsCard vx={v30} message="Em 30 dias" />
      <StaticsCard vx={v90} message="Em 90 dias" />
    </Box>
  );
};
