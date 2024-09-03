import {useEffect, useState} from 'react';
import OneSignal, {DeviceState} from 'react-native-onesignal';
import {sendNotificationAlert} from '../api/model/sentNotifications';
import Config from 'react-native-config';

function useNotification() {
  const [playerId, setPlayerId] = useState<string | null>(null);

  useEffect(() => {
    OneSignal.setLogLevel(6, 0);
    OneSignal.setAppId(Config.ONE_SIGNAL_APP_ID!);

    OneSignal.promptForPushNotificationsWithUserResponse(response => {
      console.log('Prompt response:', response);
    });

    OneSignal.setNotificationWillShowInForegroundHandler(
      notificationReceivedEvent => {
        const notification = notificationReceivedEvent.getNotification();
        notificationReceivedEvent.complete(notification);
      },
    );

    OneSignal.setNotificationOpenedHandler(notification => {
      console.log('Notification opened:', notification);
    });

    OneSignal.getDeviceState().then((deviceState: DeviceState | null) => {
      const id = deviceState?.userId;
      if (id) {
        setPlayerId(id);
      }
    });
  }, []);

  function sendNotification() {
    sendNotificationAlert(playerId);
  }

  return {sendNotification};
}

export default useNotification;
