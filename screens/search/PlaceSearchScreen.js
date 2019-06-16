import React from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';
import {searchPlace} from '../../tools/locationData';


/**
 * 駐輪場を名前から検索する画面
 */
export default class PlaceSearchScreen extends React.Component {
  static navigationOptions = {
    title: '駐輪場検索',
    headerStyle: {
      backgroundColor: '#FF4343',
      barHeight: 60,
    },
    headerTitleStyle: {
      color:'#fff',
      fontWeight: 'bold',
      fontSize: 16,
    },
    headerTintColor: '#fff',
  };
  constructor(props){
    super(props);
    this.state = {
      keyword: "",
      searchResults: [],
    };
  }


  async runSearch(text){
    const results = await searchPlace({text});
    this.setState({
      searchResults: results
    });
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.menu}>
          <TouchableOpacity
            name="名前"
            title="名前"
            style={[styles.menuButton, styles.menuButton__first]}
            onPress={(text)=>{this.setState({text: "名前"})}}
            underlayColor='#fff'>
            <Text style={styles.menuButtonText}>名前</Text>
          </TouchableOpacity>
          <TouchableOpacity
            name="登録地"
            title="登録地"
            style={styles.menuButton}
            onPress={(text)=>{this.setState({text: "登録地"})}}
            underlayColor='#fff'>
            <Text style={styles.menuButtonText}>登録地</Text>
          </TouchableOpacity>
          <TouchableOpacity
            name="地図"
            title="地図"
            style={styles.menuButton}
            onPress={(text)=>{this.setState({text: "地図"})}}
            underlayColor='#fff'>
            <Text style={styles.menuButtonText}>地図</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={(keyword) => this.setState({keyword})}
            title="キーワード"
            value={this.state.keyword}
          />
          <TouchableOpacity
            style={styles.inputBotton}
            title="検索"
            onPress={(text)=>{this.runSearch(this.state.keyword)}}
          >
            <Text style={styles.inputBottonText}>検索</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.resultTitle}>検索結果</Text>
        <ScrollView style={styles.result}>
          {this.state.searchResults.map((v, i)=>{
            return <Text
              key={i}
              style={styles.resultText}
              >
                {v.text}
              </Text>
          })}
        </ScrollView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  menu: {
    flexDirection: 'row',
    marginTop: 16,
    marginLeft: 32,
    marginRight: 32,
  },
  menuButton: {
    flex: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderTopColor: '#707070',
    borderBottomColor: '#707070',
    borderRightColor: '#707070',
  },
  menuButton__active: {
    backgroundColor: '#FF4343'
  },
  menuButton__first: {
    borderLeftWidth: 1,
    borderLeftColor: '#707070',
  },
  menuButtonText: {
    color: '#707070',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    height: 38,
    lineHeight: 38,
  },
  inputContainer: {
    flexDirection: 'row',
    marginTop: 24,
  },
  input: {
    flex: 1,
    backgroundColor: "#FFF",
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftColor: '#707070',
    borderTopColor: '#707070',
    borderBottomColor: '#707070',
    height: 48,
    marginLeft: 8,
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
    paddingLeft: 8,
  },
  inputBotton: {
    width: 80,
    height: 48,
    backgroundColor: "#FF4343",
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
    marginRight: 8,
  },
  inputBottonText: {
    color: '#FFF',
    fontSize: 16,
    lineHeight: 48,
    textAlign: 'center',
  },
  // 検索結果
  resultTitle: {
    width: '100%',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: '#707070',
    borderBottomColor: '#707070',
    fontSize: 20,
    paddingLeft: 12,
    height: 48,
    lineHeight: 48,
    backgroundColor: '#E3E3E3',
    marginTop: 30,
  },
  resultText: {
    height: 48,
    lineHeight: 48,
    borderBottomWidth: 1,
    borderBottomColor: '#E3E3E3',
    paddingLeft: 12,
    fontSize: 20,
  }
});
