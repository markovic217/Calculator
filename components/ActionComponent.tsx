import React, { FC } from "react";
import { StyleSheet, View, Text } from "react-native";
import ActionButtonComponent from "./ActionButtonComponent";
import ButtonComponent from "./ButtonComponent";

interface ActionComponent {
  children?: React.ReactNode;
}

const ActionComponent: FC<ActionComponent> = ({}) => {
  return (
    <View style={{flexDirection:"column", flexWrap:"wrap"}}>
      <ActionButtonComponent>×</ActionButtonComponent>
      <ActionButtonComponent>-</ActionButtonComponent>
      <ActionButtonComponent>÷</ActionButtonComponent>
      <ActionButtonComponent>+</ActionButtonComponent>
      <ActionButtonComponent>=</ActionButtonComponent>
    </View>
  );
};

export default ActionComponent;
const styles = StyleSheet.create({});
