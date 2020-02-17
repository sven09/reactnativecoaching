import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';


type TileProps = {
    text: string;
    backgroundColor?: string;
};

type TileState = {
    counter: number;
};
export class TileC extends Component<TileProps, TileState>{
    constructor(props) {
        super(props);

        this.state = {
            counter: 0
        };
    }

    // Before the component mounts, we initialise our state
    componentWillMount() {
    }

    // After the component did mount, we set the state each second.
    componentDidMount() {
    }


    render() {
        return (
            <View style={{ backgroundColor: this.props.backgroundColor ?? null, margin: 10, padding: 5 }}>
                <Text>{this.props.text}</Text>
                <Text>Counter {this.state.counter}</Text>
                <Button title="Inc" onPress={
                    () => this.setState({ counter: this.state.counter + 1 })}></Button>
            </View>
        );
    }
}