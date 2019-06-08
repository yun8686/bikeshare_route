import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Button,
  TextInput,
  Text,
} from 'react-native';

/**
 * 駐輪場を名前から検索する画面
 */
export default class PlaceSearchScreen extends React.Component {
  static navigationOptions = {
    title: '駐輪場検索',
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
        <Button
          style={{width: 100, height: 40, borderColor: 'gray', borderWidth: 1}}
          title="名前"
          onPress={(text)=>{this.setState({text: "検索"})}}
        />
        <Button
          style={{width: 100, height: 40, borderColor: 'gray', borderWidth: 1}}
          title="登録地"
          onPress={(text)=>{this.setState({text: "検索"})}}
        />
        <Button
          style={{width: 100, height: 40, borderColor: 'gray', borderWidth: 1}}
          title="地図"
          onPress={(text)=>{this.setState({text: "検索"})}}
        />
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
});
