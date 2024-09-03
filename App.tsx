import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {Provider as ReduxProvider} from 'react-redux';
import {store} from './src/redux/store';
import InitialRoutes from './src/routes/InitialRoutes';
import OneSignal from 'react-native-onesignal';
import Config from 'react-native-config';
const App = () => {
  const initialOnesignal = async () => {
    OneSignal.setLogLevel(6, 0);
    OneSignal.setAppId(Config.ONE_SIGNAL_APP_ID!);
    OneSignal.promptForPushNotificationsWithUserResponse();
    OneSignal.setNotificationWillShowInForegroundHandler(
      notificationReceivedEvent => {
        let notification = notificationReceivedEvent.getNotification();
        const data = notification.additionalData;
        notificationReceivedEvent.complete(notification);
      },
    );
    OneSignal.setNotificationOpenedHandler(notification => {
      console.log('OneSignal: notification opened:', notification);
    });
  };

  useEffect(() => {
    initialOnesignal();
    SplashScreen.hide();
  }, []);

  return (
    <>
      <ReduxProvider store={store}>
        <NavigationContainer>
          <InitialRoutes />
        </NavigationContainer>
      </ReduxProvider>
    </>
  );
};

export default App;
