import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, SafeAreaView, ScrollView, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ViewEmployee from './ViewEmployee';
import EditEmployee from './EditEmployee';
import AddEmployee from './AddEmployee';

const DeleteEmployee = ({ navigation }) => {
  const [boxCount, setBoxCount] = useState(4);
  const [activeItems, setActiveItems] = useState(Array(boxCount).fill(false));
  const [menuOpened, setMenuOpened] = useState(false);

  const handleClick = (index) => {
    setActiveItems((prevActiveItems) => {
      const updatedItems = [...prevActiveItems];
      updatedItems[index] = !updatedItems[index];
      return updatedItems;
    });
  };

  const handleAddBox = () => {
    setBoxCount((prevCount) => prevCount + 1);
    setActiveItems((prevActiveItems) => [...prevActiveItems, false]);
  };

  const handleRemoveBox = (index) => {
    setActiveItems((prevActiveItems) => {
      const updatedItems = [...prevActiveItems];
      updatedItems.splice(index, 1);
      return updatedItems;
    });
  };

  const handleMenuPress = () => {
    setMenuOpened((prevState) => !prevState);
  };

  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.box}>
      </View>
      <TouchableOpacity style={styles.menuButton} onPress={handleMenuPress}>
        <Image style={styles.navigation} source={require('./menu.png')} />
      </TouchableOpacity>

      <View style={styles.wrapper}>
        <ScrollView>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={handleAddBox} style={styles.addButton}>
              <Text style={styles.buttonText}>Add Employee</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.boxContainer}>
            {activeItems.map((active, index) => (
              <View key={index} style={{ alignItems: 'center' }}>
                <View style={[styles.infoBox, { height: active ? 170 : 70 }]}>
                  <TouchableOpacity onPress={() => handleClick(index)} style={styles.button}>
                    <Text style={styles.names}>SignUp</Text>
                  </TouchableOpacity>
                  {active && (
                    <TouchableOpacity onPress={() => handleRemoveBox(index)} style={styles.removeButton}>
                      <Text style={styles.buttonText}>Remove Employee</Text>
                    </TouchableOpacity>
                  )}
                  {active && (
                    <TouchableOpacity style={styles.editButton}>
                      <Text style={styles.buttonText}>Edit Employee</Text>
                    </TouchableOpacity>
                  )}
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>

      {menuOpened &&
      <View style={styles.overlay}>
        <TouchableOpacity onPress={() => navigation.navigate('EditEmployee')}>
          <Text style={styles.buttonText}>Edit Employee</Text>
        </TouchableOpacity>
      </View>}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  menuButton: {
    position: 'absolute',
    zIndex: 1,
  },
  box: {
    height: 60,
    backgroundColor: '#941a1d',
    width: '100%',
  },
  navigation: {
    width: 60,
    height: 60,
  },
  wrapper: {
    flex: 1,
    backgroundColor: 'white',
  },
  boxContainer: {
    marginBottom: 120,
  },
  infoBox: {
    width: '87%',
    marginVertical: 30,
    marginHorizontal: 20,
    borderRadius: 20,
    backgroundColor: '#D9D9D9',
    height: 170,
    position: 'relative',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 10,
    backgroundColor: 'white',
  },
  addButton: {
    backgroundColor: '#4caf50',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  removeButton: {
    position: 'absolute',
    height: 40,
    width: '50%',
    bottom: 0,
    right: 0,
    backgroundColor: '#f44336',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
  },
  editButton: {
    position: 'absolute',
    height: 40,
    width: '50%',
    bottom: 0,
    left: 0,
    backgroundColor: '#FFBF00',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
  },
  buttonText: {
    color: 'white',
  },
  button: {
    height: 70,
    backgroundColor: '#979797',
    borderRadius: 20,
  },
  names: {
    color: 'white',
    fontSize: 20,
    textAlign: 'left',
    marginLeft: 10,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#941a1d',
  },
});

const App = () => {
  //const
  const Stack = createStackNavigator();

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="ViewEmployee" component={ViewEmployee} />
        <Stack.Screen name="AddEmployee" component={AddEmployee} />
        <Stack.Screen name="EditEmployee" component={EditEmployee} />
        <Stack.Screen name="DeleteEmployee" component={DeleteEmployee} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;