import { Alert } from "react-native";
import Config from "react-native-config";

export const sendNotificationAlert = (playerId:string|null) => {
    if (!playerId) {
      Alert.alert('Error', 'Player ID is not available.');
      return;
    }

    fetch('https://onesignal.com/api/v1/notifications', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: Config.ONE_SIGNAL_REST_API_KEY!,
      },
      body: JSON.stringify({
        app_id: Config.ONE_SIGNAL_APP_ID,
        include_player_ids: [playerId],
        headings: {en: 'Welcome to News'},
        contents: {
          en: " We're excited to have you on board. Explore our app and discover amazing features!",
        },
        big_picture: 'https://wallpaper.dog/large/20595353.jpg',
      }),
    })
      .then(response => response.json())
      .then(data => {
        Alert.alert('Success', 'Welcome notification sent successfully!');
      })
      .catch(error => {
        Alert.alert('Error', 'Failed to send notification.');
      });
  };