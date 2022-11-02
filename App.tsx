import { StatusBar } from "expo-status-bar";
import React, { createContext } from "react";
import { useState } from "react";
import { Button, StyleSheet, Text, View, Pressable } from "react-native";
import ActionComponent from "./components/ActionComponent";
import ButtonComponent from "./components/ButtonComponent";
import DisplayComopnent from "./components/DisplayComopnent";
import NumberComponent from "./components/NumberComponent";
import SpecialActionComponent from "./components/SpecialActionComponent";




export const CalcContext = createContext<any>({});

export default function App() {
  const [calc, setCalc] = useState({
    sign: "",
    num: "0",
    res: "0",
  });
  const providerValue = {
    calc,
    setCalc,
  };
  return (
    <View style={styles.container}>
      <CalcContext.Provider value={providerValue}>
        <View>
          <DisplayComopnent>{calc.num ? calc.num : calc.res}</DisplayComopnent>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flexDirection: "column", flex: 3 }}>
            <SpecialActionComponent />
            <NumberComponent />
          </View>
          <View style={{ flex: 1 }}>
            <ActionComponent />
          </View>
        </View>
      </CalcContext.Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "flex-end",
    alignItems: "center",
  },
});
