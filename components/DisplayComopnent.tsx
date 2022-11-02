import React, { FC } from "react";
import { StyleSheet, View, Text } from "react-native";

interface DisplayComopnent{
children?: React.ReactNode;
}

const DisplayComopnent:FC<DisplayComopnent> = ({children}) => {
  return (
    <View style={{}}>
      <Text style={styles.text}>{children}</Text>
    </View>
  )
};

export default DisplayComopnent;
const styles = StyleSheet.create({
  display: {
    textAlign: "right"
  },
  text: {
    color:"white",
    textAlign: "right",
    fontSize: 50
  }
});