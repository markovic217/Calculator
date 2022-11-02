import React, { FC, useContext } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { CalcContext } from "../App";
import ButtonComponent from "./ButtonComponent";

interface ActionButtonComponent {
  children?: React.ReactNode;
}

const ActionButtonComponent: FC<ActionButtonComponent> = ({ children }) => {
  const { calc, setCalc } = useContext(CalcContext);
  // User click operation
  const signClick = () => {
    setCalc({
      sign: children?.toString(),
      res: calc.res =="0" && calc.num != "0" ? (calc.num).toString() : (calc.res).toString(),
      num: "0"
    })
  }
  // User click equals
  const equalsClick = () => {
    if(calc.res && calc.num) {
      const math = (aa: string, bb: string, sign: string) => {
        const a = parseInt(aa);
        const b = parseInt(bb);
        const result: Record<string, any> = {
          '+': (a:number, b:number) => a + b,
          '-': (a:number, b:number) => a - b,
          '×': (a:number, b:number) => a * b,
          '÷': (a:number, b:number) => a / b,
        }
        return (result[sign](a, b)).toString();
      }
      setCalc({
        res: math(calc.res, calc.num, calc.sign),
        sign: '',
        num: 0
      })
    }
  }
  const operation: Record<string, any> = {
    "×": signClick,
    "+": signClick,
    "-": signClick,
    "÷": signClick,
    "=": equalsClick
  };
  return (
    <Pressable>
      <ButtonComponent backgroundColor="orange" color="white" onPress={operation[children!.toString()]}>{children}</ButtonComponent>
    </Pressable>
  );
};

export default ActionButtonComponent;
const styles = StyleSheet.create({});
