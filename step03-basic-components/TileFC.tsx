import React, { FC } from 'react';
import { View, Text, Button } from 'react-native';

type TileProps = {
    text: string;
    backgroundColor?: string;
};

// we can use children even though we haven't defined them in our TileProps
export const Tile: React.FC<TileProps> = ({ text, backgroundColor, children }) => {
    const [counter, setCounter] = React.useState<number>(0);

    let nonStateVariableThatChangeWillNotForceRerendering: number = 5;

    return (
        <View style={{ backgroundColor: backgroundColor ? backgroundColor : null, margin: 10, padding: 5 }}>
            <Text>Text: {text}</Text>
            <Text>Counter {counter} {nonStateVariableThatChangeWillNotForceRerendering}</Text>
            <Button title="Inc" onPress={
                () => setCounter(counter + 1)}></Button>
            <Button title="Inc2" onPress={() =>
            {
                nonStateVariableThatChangeWillNotForceRerendering++;
                console.log('nonStateVariableThatChangeWillNotForceRerendering', nonStateVariableThatChangeWillNotForceRerendering)
            }}></Button>
        </View >
    );

};