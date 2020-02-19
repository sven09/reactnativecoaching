import React from 'react';
import { Button, StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';


function usePeople() {
  const [people, setPeople] = React.useState([]);
  
  React.useEffect(() => {
    const getData = async () => {
      try {
        const fetchP = await fetch("https://swapi.co/api/people/");
        const res = await fetchP.json();
        console.log('res', res)
        setPeople(res.results);
      } catch (error) {
        console.log('error', error);
      }
    };
    getData();
  }, );
  return people;
}
export default function App() {

  const [count, setCount] = React.useState(0);
  const [reload, setReload] = React.useState(true);
  const [title, setTitle] = React.useState('');
  const [people, setPeople] = React.useState([]);
  // const people = usePeople();

  React.useEffect(() => {
    // By default, React runs the effects after every render 
    // — including the first render
    setTitle(`You clicked ${count} times`);
  });

  React.useEffect(() => {
    const getData = async () => {
      try {
        setCount(count + 1);
        const fetchP = await fetch("https://swapi.co/api/people/");
        const res = await fetchP.json();
        console.log('res', res)
        setPeople(res.results);
        setReload(false);
      } catch (error) {
        console.log('error', error);
      }
    };
    getData();
  }, [reload]);

  // React.useEffect(() => {
  //   const getData = async () => {
  //     setCount(count + 1)
  //     const res = await fetch("https://swapi.co/api/people/");
  //     res
  //       .json()
  //       .then(res => {
  //         console.log('res', res);
  //         setPeople(res.results);
  //         setReload(false);
  //       })
  //       .catch(err => console.log(err));
  //   };
  //   getData();
  // }, [reload]);


  // Rules of Hooks
  // return (
  //   <View style={styles.container}>
  //     <Text>{title}</Text>
  //     <Button title="Inc" onPress={() => setCount(count + 1)} />
  //     <Text>{count}</Text>

  //   </View>
  // );


  return (
    <SafeAreaView style={styles.container}>
      {reload ? <View>
        <Text>loading</Text>
        <Text>{count}</Text>
      </View> :
        <>
          <FlatList
            data={people}
            renderItem={({ item }) => (
              <Text>
                {item.name}
              </Text>
            )}
            keyExtractor={item => item.name}

          />
          <Text>{count}</Text>
          <Button title={"Reload"} onPress={() => setReload(true)} />
        </>}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
