import {
  Platform,
  PermissionsAndroid,
} from 'react-native';

module.exports = {
  getCurrentPosition,
}

async function getCurrentPosition(timeoutMillis = 10000) {
  if (Platform.OS === "android") {
    const ok = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
    if (!ok) {
      const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
      if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
        // TODO ユーザーにGPS使用許可がもらえなかった場合の処理
        throw new Error();
      }
    }
  }

  return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject, { timeout: timeoutMillis });
  });
}
