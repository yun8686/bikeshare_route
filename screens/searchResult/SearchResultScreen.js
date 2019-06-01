import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Button,
  TextInput,
  Text,
  View,
} from 'react-native';

export default class SearchResultScreen extends React.Component {
  static navigationOptions = {
    title: "検索結果",
  };
  constructor(props){
    super(props);
    this.state = {
      keyword: "",
    };
  }

  render() {
    const results = [];
    for(var i=0;i<20;i++){
      results.push(
        <View
          style={styles.resultRow}
          key={i}
        >
          <Text>aaaaaaaa</Text>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <View style={styles.resultHeader}>
          <Text>aaaaaaaa</Text>
          <Text>↓</Text>
          <Text>aaaaaaaa</Text>
        </View>
        <ScrollView style={styles.resultList}>
          {results}
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
  resultHeader: {

  },
  resultList: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: '#DDD',
  },
  resultRow: {
    height: 100,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: 'green',
  }
});
