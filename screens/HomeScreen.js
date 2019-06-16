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
} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

import MainHeader from '../components/header/MainHeader';

export default class HomeScreen extends React.Component {
  static navigationOptions = MainHeader("ドコモサイクル経路探索");

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
        <ScrollView>
          <View style={styles.inputContainer}>
            <Text style={styles.inputText}>出発</Text>
            <Text
              name="出発"
              style={styles.input}
              onChangeText={(text) => this.setState({origin: "検索sann"})}
              value={this.state.origin}
              onPress={(text) =>{
                navigate('PlaceSearch', {
                  "mode": "origin",
                })
              }}
            ></Text>
          </View>
          <View style={styles.iconContainer}>
            <FontAwesome name="arrows-v" size={32} color="#FF4343" />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputText}>到着</Text>
            <Text
              name="到着"
              style={styles.input}
              onChangeText={(text) => this.setState({text})}
              value={this.state.destination}
              onPress={(text) =>{
                navigate('PlaceSearch',{
                  "mode": "destination",
                })
              }}
            ></Text>
          </View>
          <View>
            <TouchableOpacity
              name="検索"
              title="検索"
              style={styles.searchButton}
              onPress={(text)=>{
                navigate('SearchResult');
              }}
              underlayColor='#fff'>
              <Text style={styles.searchButtonText}>検索</Text>
            </TouchableOpacity>
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
  inputContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  inputText: {
    fontSize: 20,
    color: '#fff',
    backgroundColor: '#FF4343',
    width: 82,
    height: 48,
    marginLeft: 8,
    textAlign: 'center',
    lineHeight: 48,
  },
  input: {
    flex: 1,
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderLeftColor: '#FF4343',
    borderTopColor: '#707070',
    borderBottomColor: '#707070',
    borderRightColor: '#707070',
    height: 48,
    marginRight: 8,
  },
  iconContainer: {
    marginTop: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  searchButton: {
    marginTop: 40,
    backgroundColor: "#FFF",

  },
  searchButtonText: {
    color: '#FF4343',
    fontSize: 20,
    fontWeight: 'bold',
    borderColor: '#FF4343',
    borderWidth: 2,
    marginLeft: 24,
    marginRight: 14,
    textAlign: 'center',
    height: 58,
    lineHeight: 58,
    borderRadius: 6,
  }
});
