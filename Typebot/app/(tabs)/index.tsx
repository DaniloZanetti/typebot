import {  StyleSheet, View, Text} from 'react-native';
import { Bubble } from "@typebot.io/react";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Olha que legal</Text>

      <Bubble
      typebot="my-typebot-fxyx5ok"
      previewMessage={{ message: "Poudo ajudar?" }}
      theme={{
        button: {
          backgroundColor: "#0042DA",
          customIconSrc: "😎",
          size: "large",
        },
        previewMessage: {
          backgroundColor: "#598E71",
          textColor: "#FFFFFF",
          closeButtonBackgroundColor: "#4A8BB2",
          closeButtonIconColor: "#0042DA",
        },
      }}
    />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    padding: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  }
});
