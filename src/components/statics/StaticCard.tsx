import { Text } from "@chakra-ui/react";

interface IStaticsCard {
  vx: number;
  message: string;
}

export const StaticsCard = ({ vx, message }: IStaticsCard) => {
  return (
    <Text>
      {message}:{" "}
      <Text as="b" color="blueSecondary">
        {vx.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </Text>
    </Text>
  );
};
