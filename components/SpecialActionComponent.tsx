import React, { FC } from "react";
import { StyleSheet, View, Text } from "react-native";
import ButtonComponent from "./ButtonComponent";
import SpecialButtonComponent from "./SpecialButtonComponent";

interface SpecialActionComponent{
children?: React.ReactNode;

}

const SpecialActionComponent:FC<SpecialActionComponent> = ({}) => {
  return (
    <View style={{flexDirection:"row", flexWrap:"wrap"}}>
      <SpecialButtonComponent>AC</SpecialButtonComponent>
      <SpecialButtonComponent>+/-</SpecialButtonComponent>
      <SpecialButtonComponent>%</SpecialButtonComponent>
    </View>
  )
};

export default SpecialActionComponent;
const styles = StyleSheet.create({

});