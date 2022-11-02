import React, { FC } from "react";
import {
  StyleSheet,
  Text,
  Dimensions,
  TouchableHighlight,
  View,
} from "react-native";

interface ButtonComponentProps {
  backgroundColor: string;
  color: string;
  children?: React.ReactNode;
  onPress: () => void;
}

const bgroundColorPressed: Record<string, string> = {
  orange: "moccasin",
  dimgray: "darkgray",
  lightgray: "whitesmoke",
};
const getBGroundColor = (color: string) => {
  return bgroundColorPressed[color];
};

const ButtonComponent: FC<ButtonComponentProps> = ({
  backgroundColor,
  color = "white",
  children,
  onPress
}) => {
  const styles = StyleSheet.create({
    btn: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: size / 5,
      height: size / 5,
      backgroundColor: backgroundColor,
      borderRadius: 50,
      margin: 9,
    },
    text: {
      color: color,
      fontSize: size / 12,
    },
  });

  const touchProps = {
    underlayColor: getBGroundColor(backgroundColor), // <-- "backgroundColor" will be always overwritten by "underlayColor"
    style: styles.btn, // <-- but you can still apply other style changes
    onPress: onPress, // <-- "onPress" is apparently required
  };
  return (
    <View>
      <TouchableHighlight {...touchProps}>
        <Text style={styles.text}>{children}</Text>
      </TouchableHighlight>
    </View>
  );
};

export default ButtonComponent;
const size = Dimensions.get("window").width;
