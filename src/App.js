import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

const App = () => {
  const [nim, setnim] = useState();
  const [nama, setnama] = useState();
  const [alamat, setalamat] = useState();
  const [kelas, setkelas] = useState();

  const ubahNIM = (teks) => {
    setnim(teks);
  };
  const ubahNAMA = (teks) => {
    setnama(teks);
  };
  const ubahALAMAT = (teks) => {
    setalamat(teks);
  };
  const ubahKELAS = (teks) => {
    setkelas(teks);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.teks}>Form Pendaftaran UDB</Text>
      <TextInput
        style={styles.input}
        placeholder="Isikan NIM Anda"
        onChangeText={ubahNIM}
      />
      <TextInput
        style={styles.input}
        placeholder="Isikan Nama Anda"
        onChangeText={ubahNAMA}
      />
      <TextInput
        style={styles.input}
        placeholder="Isikan Alamat Anda"
        onChangeText={ubahALAMAT}
      />
      <TextInput
        style={styles.input}
        placeholder="Isikan Kelas Anda"
        onChangeText={ubahKELAS}
      />
      <Text>NIM = {nim}</Text>
      <Text>Nama = {nama}</Text>
      <Text>Alamat = {alamat}</Text>
      <Text>Kelas = {kelas}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    margin: 20
  },
  teks: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 3,
    borderRadius: 8,
    backgroundColor: "lightgreen",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold"
  },
  input: {
    marginTop: 16,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: "lightgreen",
    textAlign: "center",
    fontSize: 20
  }
});

export default App;
