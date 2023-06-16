import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

const AlignItemsLayout = () => {
  const Home = () => {
    const [activeItems, setActiveItems] = useState([]);
    const [display, setDisplay] = useState(false);

    const handleClick = (index) => {
      setActiveItems((prevActiveItems) => {
        const updatedItems = [...prevActiveItems];
        updatedItems[index] = !updatedItems[index];
        return updatedItems;
      });
    };

    return (
      <SafeAreaView>
        <View
        style={styles.box}
        />

        <View style={styles.wrapper}>
          <ScrollView>
            <View style={styles.container}>
              <View style={{ alignItems: 'center' }}>
                <View style={[styles.infoBox, {height: activeItems[0] ? 170 : 70}]}>
                  <TouchableOpacity
                  onPress={() => handleClick(0)}
                  style={styles.button}>
                    <Text style={styles.names}>
                    John Doe
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={{ alignItems: 'center' }}>
                <View style={[styles.infoBox, {height: activeItems[1] ? 170 : 70}]}>
                  <TouchableOpacity
                  onPress={() => handleClick(1)}
                  style={styles.button}>
                    <Text style={styles.names}>
                    SignUp
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={{ alignItems: 'center' }}>
                <View style={[styles.infoBox, {height: activeItems[2] ? 170 : 70}]}>
                  <TouchableOpacity
                  onPress={() => handleClick(2)}
                  style={styles.button}>
                    <Text style={styles.names}>
                    SignUp
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={{ alignItems: 'center' }}>
                <View style={[styles.infoBox, {height: activeItems[3] ? 170 : 70}]}>
                  <TouchableOpacity
                  onPress={() => handleClick(3)}
                  style={styles.button}>
                    <Text style={styles.names}>
                    SignUp
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>      
    );
  };


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      height: 'auto',
      marginBottom: 120,
    },
    box: {
      height: 60,
      backgroundColor: '#941a1d',
      width: '100%',
    },
    infoBox: {
      width: '87%',
      marginVertical: 30,
      marginHorizontal: 20,
      borderRadius: 20,
      backgroundColor: '#D9D9D9',
      height: 170,     
    },
    button: {
      height: 70,
      backgroundColor: '#979797',
      borderRadius: 20,
    },
    names: {
      color: 'white',
      fontSize: 20,
      textAlign: "left",
      marginLeft: 10
    },
  });

  return <Home />;
};

export default AlignItemsLayout;
