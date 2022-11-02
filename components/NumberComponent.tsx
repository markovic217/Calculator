import React, { FC } from "react";
import { StyleSheet, View, Text } from "react-native";
import NumberButtonComponent from "./NumberButtonComponent";

interface NumberComponent{
children?: React.ReactNode;

}

const NumberComponent:FC<NumberComponent> = ({}) => {
  return (
    <View style={{flexDirection:"row", flexWrap:"wrap"}}>
      <NumberButtonComponent>7</NumberButtonComponent>
      <NumberButtonComponent>8</NumberButtonComponent>
      <NumberButtonComponent>9</NumberButtonComponent>
      <NumberButtonComponent>4</NumberButtonComponent>
      <NumberButtonComponent>5</NumberButtonComponent>
      <NumberButtonComponent>6</NumberButtonComponent>
      <NumberButtonComponent>1</NumberButtonComponent>
      <NumberButtonComponent>2</NumberButtonComponent>
      <NumberButtonComponent>3</NumberButtonComponent>
      <NumberButtonComponent>0</NumberButtonComponent>
      <NumberButtonComponent>.</NumberButtonComponent>
    </View>
  )
};

export default NumberComponent;
const styles = StyleSheet.create({

});