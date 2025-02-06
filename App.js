import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import NoteDetailScreen from "./src/screens/NoteDetailScreen";
import CreateNoteScreen from "./src/screens/CreateNoteScreen.js";
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#4CAF50",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Notes & Tasks" }}
        />
        <Stack.Screen
          name="AddNote"
          component={CreateNoteScreen}
          options={{ title: "Nouvelle Note" }}
        />
        <Stack.Screen
          name="NoteDetail"
          component={NoteDetailScreen}
          options={{ title: "Détails" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}