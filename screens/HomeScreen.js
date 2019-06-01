import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Button,
} from 'react-native';

import { AntDesign } from '@expo/vector-icons';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: '経路探索',
  };

  constructor(props){
    super(props);
    this.state = {
      origin: "",
      destination: "",
    };
  }

  render() {
    const {navigate} = this.props.navigation;

    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <TextInput
              name="出発地"
              style={styles.textarea}
              onChangeText={(text) => this.setState({origin: "検索sann"})}
              value={this.state.origin}
              onFocus={(text) =>{
                navigate('PlaceSearch', {
                  "mode": "origin",
                })
              }}
            />
            <TextInput
              name="目的地"
              style={styles.textarea}
              onChangeText={(text) => this.setState({text})}
              value={this.state.destination}
              onFocus={(text) =>{
                navigate('PlaceSearch',{
                  "mode": "destination",
                })
              }}
            />
            <Button
              name="検索"
              style={{width: 100, height: 40, borderColor: 'gray', borderWidth: 1}}
              title="検索"
              onPress={(text)=>{
                navigate('SearchResult');
              }}
            />
            <AntDesign  /** アイコンを置くサンプル **/
              name="setting"
              size={32}
              color="green"
              />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  textarea: {
    flex: 1,
    backgroundColor: "gray",
    width: 100,
    marginTop: 10,
  }
});
