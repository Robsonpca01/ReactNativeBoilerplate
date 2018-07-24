import React from 'react';
import { View, Text, TextInput } from 'react-native';
import request from '../utils/request';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'oi',
            text : 'default placeholder'
        };
    }

    loadJson = async () => {
        return await request.get('https://3jaevi37ej.execute-api.us-east-2.amazonaws.com/defaultRob/getuser');
    }

    newText = (text) => {
        this.setState({
            text
        })
    }

    componentWillMount(props){
        console.log('component will mount');
        this.loadJson().then((value) =>{
            this.setState({
                username : value.data.username
            })
        })
    }

    render() {
        return (
            <View>
                <Text>
                    {'Test Screen'}                    
                </Text>
                <Text>
                    {this.state.username}                    
                </Text>
                <TextInput 
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    value={this.state.text}
                    onChangeText={(text) => this.newText(text)} />
            </View>
        )
    }
}

export default App;