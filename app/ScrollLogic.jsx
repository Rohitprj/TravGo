import React, { useState } from "react";
import { FlatList, View, Text } from "react-native";

const MyComponent = () => {
  //   const [scrollEnabled, setScrollEnabled] = useState(true);

  // Data for FlatList
  const map = [
    { id: "1", title: "Map View" },
    { id: "2", title: "Map View" },
    { id: "3", title: "Map View" },
    { id: "4", title: "Map View" },
    { id: "5", title: "Map View " },
    { id: "6", title: " Map View" },
    { id: "7", title: "Map View " },
    { id: "8", title: "Map View " },
    { id: "9", title: "Map View " },
    { id: "10", title: "Map View" },
  ];
  const data = [
    { id: "1", title: "Lorem Ipsum" },
    { id: "2", title: "Dolor Sit Amet" },
    { id: "3", title: "Consectetur Adipiscing" },
    { id: "4", title: "Sed Do Eiusmod" },
    { id: "5", title: "Tempor Incididunt" },
    { id: "6", title: "Ut Labore Et Dolore" },
    { id: "7", title: "Magna Aliqua" },
    { id: "8", title: "Ut Enim Ad Minim" },
    { id: "9", title: "Veniam Quis Nostrud" },
    { id: "10", title: "Exercitation Ullamco" },
    { id: "11", title: "Laboris Nisi Ut" },
    { id: "12", title: "Aliquip Ex Ea Commodo" },
    { id: "13", title: "Consequat Duis Aute" },
    { id: "14", title: "Irure Dolor In Reprehenderit" },
    { id: "15", title: "Voluptate Velit Esse" },
    { id: "16", title: "Cillum Dolore Eu Fugiat" },
    { id: "17", title: "Nulla Pariatur Excepteur" },
    { id: "18", title: "Sunt In Culpa Qui" },
    { id: "19", title: "Officia Deserunt Mollit" },
    { id: "20", title: "Anim Id Est Laborum" },
  ];

  const data2 = [
    { id: "1", title: "Ipsum" },
    { id: "2", title: "Sit Amet" },
    { id: "3", title: " Adipiscing" },
    { id: "4", title: "Sed  Eiusmod" },
    { id: "5", title: " Incididunt" },
    { id: "6", title: "Ut  Et Dolore" },
    { id: "7", title: " Aliqua" },
    { id: "8", title: "Ut Enim Minim" },
    { id: "9", title: "Veniam Nostrud" },
    { id: "10", title: " Ullamco" },
    { id: "11", title: "Laboris Ut" },
    { id: "12", title: "Aliquip Ex Commodo" },
    { id: "13", title: "Consequat  Aute" },
    { id: "14", title: "Irure In Reprehenderit" },
    { id: "15", title: "Velit Esse" },
    { id: "16", title: "Cillum Eu Fugiat" },
    { id: "17", title: "Nulla Excepteur" },
    { id: "18", title: "Sunt In Qui" },
    { id: "19", title: "Deserunt Mollit" },
    { id: "20", title: "Anim Id Est Laborum" },
  ];

  return (
    <View>
      <Text>Map Area</Text>
      <Text>Map Area</Text>
      <Text>Map Area</Text>
      <Text>Map Area</Text>
      <Text>Map Area</Text>
      <Text>Map Area</Text>
      <Text>Map Area</Text>
      <Text>Map Area</Text>
      <Text>Map Area</Text>
      <Text>Map Area</Text>
      <Text>Map Area</Text>
      <View>
        <FlatList
          contentContainerStyle={{ backgroundColor: "blue", height: 50 }}
          data={map}
          renderItem={({ item }) => {
            return (
              <View>
                <Text>{item.title}</Text>
              </View>
            );
          }}
          horizontal
        />
      </View>

      <View style={{ flexDirection: "row" }}>
        <FlatList
          contentContainerStyle={{ width: 150 }}
          data={data}
          renderItem={({ item }) => (
            <View
              style={{
                padding: 20,
                borderBottomWidth: 1,
                borderBottomColor: "#ccc",
              }}
            >
              <Text>Heading</Text>
              <Text>{item.title}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
        <FlatList
        contentContainerStyle={{ width: 150 }}
          data={data2}
          renderItem={({ item }) => (
            <View
              style={{
                padding: 20,
                borderBottomWidth: 1,
                borderBottomColor: "#ccc",
              }}
            >
              <Text>{item.title}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

export default MyComponent;

