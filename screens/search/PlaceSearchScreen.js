import React from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  Button,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';

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
    };
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
        <TextInput
          style={styles.textarea}
          onChangeText={(keyword) => this.setState({keyword})}
          title="キーワード"
          value={this.state.keyword}
        />
        <Button
          style={{width: 100, height: 40, borderColor: 'gray', borderWidth: 1}}
          title="検索"
          onPress={(text)=>{}}
        />

        <ScrollView style={styles.container}>
          <Text style={{fontSize:30}}>{this.props.navigation.state.params.mode}</Text>
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
    marginTop: 20,
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
  }
});
