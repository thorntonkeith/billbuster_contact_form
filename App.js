import { StatusBar } from "expo-status-bar";
import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  Alert,
  Image,
  Platform,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import Constants from "expo-constants";

export default () => {
  const {
    register,
    setValue,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      address: "",
      phoneNo: "",
    },
  });
  const onSubmit = (data) => {
    console.log(data);
  };

  const onChange = (arg) => {
    return {
      value: arg.nativeEvent.text,
    };
  };

  console.log("errors", errors);

  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image style={styles.bbLogo} source={require("./assets/bbLogo.jpg")} />
      </View>
      <Text style={styles.label}>First name</Text>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
          />
        )}
        name="firstName"
        rules={{ required: true }}
      />
      <Text style={styles.label}>Last name</Text>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
          />
        )}
        name="lastName"
        rules={{ required: true }}
      />
      <Text style={styles.label}>Address</Text>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
          />
        )}
        name="address"
        rules={{ required: true }}
      />
      <Text style={styles.label}>Phone No</Text>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
          />
        )}
        name="phoneNo"
        rules={{ required: true }}
      />

      <View style={styles.button}>
        <Button
          style={styles.buttonInner}
          color
          title="Reset"
          onPress={() => {
            reset({
              firstName: "",
              lastName: "",
              address: "",
              phoneNo: "",
            });
          }}
        />
      </View>

      <View style={styles.button}>
        <Button
          style={styles.buttonInner}
          color
          title="Proceed"
          onPress={handleSubmit(onSubmit)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    color: "white",
    margin: 20,
    marginLeft: 0,
  },
  button: {
    marginTop: 40,
    color: "white",
    height: 40,
    backgroundColor: "#e71e70",
    borderRadius: 4,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    padding: 8,
    backgroundColor: "#0e101c",
  },
  imgContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Constants.statusBarHeight,
    padding: 8,
    backgroundColor: "#0e101c",
  },
  input: {
    backgroundColor: "white",
    borderColor: "none",
    height: 40,
    padding: 10,
    borderRadius: 4,
  },
  bbLogo: {
    height: "100%",
    width: "100%",
    padding: 10,
    marginBottom: 20,
    borderRadius: 4,
  },
});
