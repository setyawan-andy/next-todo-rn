import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [data, setData] = useState();

  const options = {
    method: "GET",
    url: "https://openweather43.p.rapidapi.com/weather",
    params: {
      q: "jakarta",
      appid: [
        "da0f9c8d90bde7e619c3ec47766a42f4",
        "da0f9c8d90bde7e619c3ec47766a42f4",
      ],
      units: "standard",
    },
    headers: {
      "X-RapidAPI-Key": "2e3ba3ad4cmshe6c425dd7003dd9p18e3c3jsn8eb2091fcfea",
      "X-RapidAPI-Host": "openweather43.p.rapidapi.com",
    },
  };

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [data]);

  return (
    <View style={styles.container}>
      <Text>{data?.base}</Text>
      <Image
        source={{
          uri: data?.weather[0]?.icon,
          style: { width: 100, height: 100 },
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
