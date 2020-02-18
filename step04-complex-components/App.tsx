import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, Modal, Alert, Button } from 'react-native';

export default function App() {

  const [modalVisible, setModalVisible] = React.useState(false);

  const renderFlexbox0 = () => {
    return (
      <View style={[{ flex: 1, width: '50%' }]}>
        <View style={{
          flex: 1, backgroundColor: 'red',
          justifyContent: 'flex-end',
          alignItems: 'center'
        }} >
          <Text>Red</Text>
        </View>
        <View style={{ flex: 2, backgroundColor: 'blue' }} />
        <View style={{ flex: 10, backgroundColor: 'green' }} />
      </View>
    );
  };

  const renderFlexbox1 = () => {
    return (
      <View style={[{ flex: 1, flexDirection: 'row', }]}>
        {/* <View style={[{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }]}> */}
        <View style={{ width: 100, height: 100, backgroundColor: 'red' }} />
        <View style={{ width: 100, height: 100, backgroundColor: 'blue' }} />
        <View style={{ width: 100, height: 100, backgroundColor: 'green' }} />
      </View>
    );
  };
  const renderFlexbox2 = () => {
    return (
      <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}>
        <View style={{ width: 100, height: 100, backgroundColor: 'red' }} />
        <View style={{ width: 100, height: 100, backgroundColor: 'blue' }} />
        <View style={{ width: 100, height: 100, backgroundColor: 'green' }} />
      </View>
    );
  };

  const renderModal = () => {
    return (
      <View style={{ marginTop: 50 }}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={{ flex: 1, marginTop: 22, justifyContent: 'center', backgroundColor: 'yellow' }}>
            <View>
              <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>Modal</Text>

              <Button title="Hide modal"
                onPress={() => {
                  setModalVisible(false);
                }} />
            </View>
          </View>
        </Modal>

        <Button title="Show modal"
          onPress={() => {
            setModalVisible(true);
          }} />
      </View>

    );
  };

  /**
    https://facebook.github.io/react-native/docs/flexbox

    To learn
    * flex
    * flexDirection: row | column
    * justifyContent: Describes how to align children within the main axis of their container.
    * alignItems: Describes how to align children along the cross axis of their container.
    * alignContent: Defines the distribution of lines along the cross-axis.
    * flexWrap: Set on containers and controls what happens when children overflow the size of the container along the main axis.

 */

  const renderFlatList = () => {
    const _data = [
      { key: 'Red' },
      { key: 'Blue' },
      { key: 'Green' },
      { key: 'Black' },
      { key: 'White' },
      { key: 'Yellow' },
      { key: 'Pink' },
      { key: 'Cyan' },
      { key: 'Red' },
      { key: 'Blue' },
      { key: 'Green' },
      { key: 'Black' },
      { key: 'White' },
      { key: 'Yellow' },
      { key: 'Pink' },
      { key: 'Cyan' },
      { key: 'Red' },
      { key: 'Blue' },
      { key: 'Green' },
      { key: 'Black' },
      { key: 'White' },
      { key: 'Yellow' },
      { key: 'Pink' },
      { key: 'Cyan' },
    ];

    return (
      <View style={{
        flex: 1,
        paddingTop: 22,
        backgroundColor: 'yellow',
        width: '100%'
      }}>
        <FlatList
          data={_data}
          renderItem={({ item }) => <Text style={{
            padding: 10,
            fontSize: 18,
            height: 44,
          }}>{item.key}</Text>}
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* {renderFlexbox0()}
      {renderFlexbox1()}
      {renderFlexbox2()} */}

      {renderFlatList()}
      {/* {renderModal()} */}

    </SafeAreaView>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
