import React, { useState } from 'react';
import {View,Text,TextInput,Button,StyleSheet,} from 'react-native';

export default function App() {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');

  const [user, setUser] = useState(null);

  const saveUser = () => {
    if (name && lastName && age) {
      if (user) {
        setUser({ name, lastName, age });
      } else {
        setUser({ name, lastName, age });
      }
      clearInputs();
    }
  };

  const clearInputs = () => {
    setName('');
    setLastName('');
    setAge('');
  };

  const editUser = () => {
    if (user) {
      setName(user.name);
      setLastName(user.lastName);
      setAge(user.age);
      setUser(null);
    }
  };

  const clearUser = () => {
    setUser(null);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={lastName}
        onChangeText={setLastName}
      />
      <TextInput
        style={styles.input}
        placeholder="Age"
        value={age}
        keyboardType="numeric"
        onChangeText={setAge}
      />
      <Button title="Save User" onPress={saveUser} />
      {user && (
        <View style={styles.userDetails}>
          <Text style={styles.userText}>
            {`Name: ${user.name}, Last Name: ${user.lastName}, Age: ${user.age}`}
          </Text>
          <Button title="Edit" onPress={editUser} />
          <Button title="Clear User" color="red" onPress={clearUser} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  userDetails: {
    marginTop: 20,
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  userText: {
    fontSize: 16,
    marginBottom: 10,
  },
});
