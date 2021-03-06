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

import SubHeader from '../../components/header/SubHeader';


/**
 * 駐輪場を名前から検索する画面
 */
export default class PlaceSearchScreen extends React.Component {
  static navigationOptions = SubHeader('駐輪場検索');
  constructor(props){
    super(props);
    this.state = {
      keyword: "",
      searchResults: [],
      pressStatus: false,
    };
  }
  _onHideUnderlay() {
    this.setState({ pressStatus: false });
  }
  _onShowUnderlay() {
      this.setState({ pressStatus: true });
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
            name="登録地"
            title="登録地"
            style={
              this.state.pressStatus
                  ? [styles.menuButton, styles.menuButton__first, styles.menuButton__active]
                  : [styles.menuButton, styles.menuButton__first]
            }
            onPress={(text)=>{this.setState({text: "登録地"})}}
            onHideUnderlay={this._onHideUnderlay.bind(this)}
            onShowUnderlay={this._onShowUnderlay.bind(this)}
            underlayColor='#fff'>
            <Text 
            style={
              this.state.pressStatus
                  ? [styles.menuButtonText, styles.menuButtonText__active]
                  : [styles.menuButtonText]
            }>登録地</Text>
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
  // メニュー箇所
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
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
  },
  menuButton__active: {
    backgroundColor: '#FF4343',
  },
  menuButton__first: {
    borderLeftWidth: 1,
    borderLeftColor: '#707070',
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
  },
  menuButtonText: {
    color: '#707070',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    height: 38,
    lineHeight: 38,
  },
  menuButtonText__active: {
    color: '#FFF',
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
