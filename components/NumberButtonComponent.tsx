import React, { FC, useContext } from "react";
import { StyleSheet } from "react-native";
import ButtonComponent from "./ButtonComponent";
import { CalcContext } from "./../App";
interface NumberButtonComponent {
  children?: React.ReactNode;
}

const NumberButtonComponent: FC<NumberButtonComponent> = ({ children }) => {
  const { calc, setCalc } = useContext(CalcContext);
  const handleClickButton = () => {
    if (calc.num.length <= 10) {
      const numberString = children?.toString();
      let numberValue;
      numberValue = calc.num + numberString;
      if (calc.num == "0") numberValue = numberString;
      if (numberString == "0" && calc.num == "0") numberValue = "0";

      setCalc({
        ...calc,
        num: numberValue.toString(),
      //  length: calc.length + 1,
      });
    }
  };
  const commaClick = () => {
    if (calc.num.length <= 9) {
      setCalc({
        ...calc,
        num: !calc.num.toString().includes(".")
          ? calc.num + children?.toString()
          : calc.num,
        //length: calc.length + 1,
      });
    }
  };
  const handleClick = (sign: string) => {
    if (sign === ".") return commaClick();
    else return handleClickButton();
  };
  return (
    <ButtonComponent
      backgroundColor="dimgray"
      color="white"
      onPress={() => {
        handleClick(children!.toString());
      }}
    >
      {children}
    </ButtonComponent>
  );
};

export default NumberButtonComponent;
const styles = StyleSheet.create({});
