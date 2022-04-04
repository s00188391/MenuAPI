import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, FlatList, ActivityIndicator} from 'react-native';


export default function App() {

  const menuURL = 'https://my-burger-api.herokuapp.com/burgers/';

  const [isLoading, setLoading] = useState(true); 
  const [data, setData] = useState();
  const [name, setName] = useState();
  const [restaurant, setRestaurant] = useState();
  const [description, setDescription] = useState();



  useEffect(() => {
    fetch(menuURL)
    .then((response) => response.json())
    
    .then((json) => {
      console.log('first item', json [0])
      console.log('first name :', json[0].name)
      setData(json)

      // console.log('data:', data)
      // console.log('can u see me', json) 
      // setData(json.data);
      // setName(json.name);
      
      // setRestaurant(json.restaurant);
      // console.log('restaurant:', json.restaurant)
      // setDescription(json.description);
    })
    .catch((error) => alert(error))
    .finally(setLoading(false));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (<ActivityIndicator /> 
      ) : (
        <View>
          {/* <Text>{name}</Text> */}
      <FlatList data={data}
        keyExtractor={({ id },
        index) => id} 
        renderItem={({item}) => {
        
          {/* <Text>
            {item.name}, {item.restaurantnt}, {item.description}
          </Text> */}
        }}
      /> 
      </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
