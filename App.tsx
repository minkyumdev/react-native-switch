import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Switch } from './dist';

function App() {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(true);
  const [switch3, setSwitch3] = useState(false);
  const [switch4, setSwitch4] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.title}>React Native Switch</Text>

        <View style={styles.example}>
          <Text style={styles.label}>
            Basic Switch: {switch1 ? 'ON' : 'OFF'}
          </Text>
          <Switch value={switch1} onValueChange={setSwitch1} />
        </View>

        <View style={styles.example}>
          <Text style={styles.label}>
            Custom Colors: {switch2 ? 'ON' : 'OFF'}
          </Text>
          <Switch
            value={switch2}
            onValueChange={setSwitch2}
            activeColor="#FF3B30"
            inactiveColor="#C7C7CC"
          />
        </View>

        <View style={styles.example}>
          <Text style={styles.label}>Large Size: {switch3 ? 'ON' : 'OFF'}</Text>
          <Switch
            value={switch3}
            onValueChange={setSwitch3}
            size="large"
            activeColor="#007AFF"
          />
        </View>

        <View style={styles.example}>
          <Text style={styles.label}>
            Custom Width: {switch4 ? 'ON' : 'OFF'}
          </Text>
          <Switch
            value={switch4}
            onValueChange={setSwitch4}
            width={100}
            height={50}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#000',
  },
  example: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 30,
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  label: {
    fontSize: 16,
    color: '#000',
    marginRight: 20,
  },
});

export default App;
