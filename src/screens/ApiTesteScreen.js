import React from 'react';
import lifecycle from 'react-pure-lifecycle';
import { View, Text } from 'react-native';
import request from '../utils/request';

const lifecycleMethods = {
    componentWillMount(props){
        console.log('component will mount');
        loadJson().then((value) =>{
            console.log(value.data);
            this.setState({
                response : value.data
            }, () => {
                console.log(this.state.response);
            })
        })
    }
}

const loadJson = async () => {
    return await request.get('https://3jaevi37ej.execute-api.us-east-2.amazonaws.com/defaultRob/teste');
}

const Screen = () => (
    <View>
        <Text>
            {'teste'}
        </Text>
    </View>
);


export default lifecycle(lifecycleMethods)(Screen);