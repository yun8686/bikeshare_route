import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Button,
  TextInput,
  Text,
  View,
  ToastAndroid,
} from 'react-native';
import {
  MapView,
} from 'expo';

import {getCurrentPosition} from '../tools/geolocation';
import locationData from '../tools/locationData';

/**
 * 動作確認に使ってる
**/
export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: "テストページ",
  };

  constructor(props){
    super(props);
    this.state = {
      keyword: "",
      mapMargin: 1,
      region: {
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0.2,
        longitudeDelta: 0.2,
      }
    };

    this.stationPoints = locationData.getAll().map((v,i)=>{
      return(
        <MapView.Marker
          key={i}
          coordinate={{
            latitude: v.latitude-0,
            longitude: v.longitude-0
          }}
          title={v.name}
          description={"desss"}
        />)
    });

  }

  async componentWillMount() {
    await this.updateCurrentPosition();
//    this.interval = setInterval(()=>this.updateCurrentPosition(), 5000);
  }
  async componentWillUnmount(){
//    clearInterval(this.interval);
  }

  async updateCurrentPosition(){
    try {
      const position = await getCurrentPosition(5000);
      const { latitude, longitude } = position.coords;
      const latitudeDelta = 0.2, longitudeDelta = 0.2;
      this.setState({
        region: {
          latitude, longitude,
          latitudeDelta, longitudeDelta
        },
      });
    } catch(e) {
      alert(e.message)
    }
  }

  onRegionChangeComplete(region) {
    this.setState({ region });
  }


  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.region.latitude} , {this.state.region.longitude}</Text>
        <MapView
          style={{flex: 5, marginBottom: this.state.mapMargin}}
          showsUserLocation={true}
          showsMyLocationButton={true}
          showsCompass = {true}
          showScale = {true}
          onRegionChangeComplete={region => this.onRegionChangeComplete(region)}
          onMapReady={()=>this.setState({mapMargin:0})}
          region={this.state.region}
        >
          {this.stationPoints}
        </MapView>
        <ScrollView horizontal={true} style={styles.locationList}>
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
  locationMap:{
    flex: 5,
  },
  locationList:{
    flex: 1,
  }
});
