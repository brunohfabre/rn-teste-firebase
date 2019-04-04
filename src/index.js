import React, { useState } from "react";
import { Text, View, TextInput, Button } from "react-native";

import firebase from "react-native-firebase";

// 017997641520

export default function App() {
  const [confirmResult, setConfirmResult] = useState(null);
  const [codeInput, setCodeInput] = useState(null);

  const phoneNumber = "+5517997641520";

  function fazerLogin() {
    firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber)
      .then(confirmResult => setConfirmResult(confirmResult))
      .catch(error => console.log(error));
  }

  function confirmCode() {
    if (confirmResult && codeInput.length) {
      confirmResult
        .confirm(codeInput)
        .then(user => console.log("usuario confirmado"))
        .catch(error => console.log(error));
    }
  }

  return (
    <View>
      <Text>teste</Text>

      <TextInput
        onChangeText={codeInput => setCodeInput(codeInput)}
        value={codeInput}
      />

      <Button title="fazer login" onPress={() => fazerLogin()} />
      <Button title="confirmar codigo" onPress={() => confirmCode()} />
    </View>
  );
}
