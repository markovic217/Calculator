import React, { FC, useContext } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import ButtonComponent from "./ButtonComponent";
import { CalcContext } from "../App";
interface SpecialButtonComponent {
  children?: React.ReactNode;
}

const SpecialButtonComponent: FC<SpecialButtonComponent> = ({ children }) => {
  const { calc, setCalc } = useContext(CalcContext);
  const resetClick = () => {
    setCalc({ sign: "", num: "0", res: "0" });
  };
  const persenClick = () => {
    setCalc({
      num: (calc.num / 100).toString(),
      res: (calc.res / 100).toString(),
      sign: "",
    });
  };
  const invertClick = () => {
    setCalc({
      num: calc.num ? (calc.num * -1).toString() : (0).toString(),
      res: calc.res ? (calc.res * -1).toString() : (0).toString(),
      sign: "",
    });
  };
  const operation: Record<string, any> = {
    "AC": resetClick,
    "+/-": invertClick,
    "%": persenClick,
  };
  return (
    <ButtonComponent
      backgroundColor="lightgray"
      color="black"
      onPress={operation[children!.toString()]}
    >
      {children}
    </ButtonComponent>
  );
};

export default SpecialButtonComponent;
const styles = StyleSheet.create({});
