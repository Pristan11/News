# News App

A simple news app created using React Native and implementing the use of Redux for state management. Consist of five screens: sign-in, Headline News, Search News, Category News and BookMark Screen.

## Installation

Step-by-step guide on how to install and set up the project.

# Clone the repository

git clone https://github.com/Pristan11/News.git

# Navigate to the project directory

cd News

# Install dependencies

npm install

# Run the app

npx react-native run-android

### Environment

Node: v16.20.2
Java: 11.0.24

Note: The `.env` file is not included in the repository. To run the application, you need to create a `.env` file in the root directory and add the following variables:

NEWS_API=your_news_api_key
ONE_SIGNAL_APP_ID=your_onesignal_app_id
ONE_SIGNAL_REST_API_KEY=your_onesignal_rest_api_key

### Notification

On the home page, clicking the bell icon triggers a notification. This feature is implemented using OneSignal.

### Splash Screen & App Icon

The app includes a custom app icon and displays a splash screen when launching.

### Sign-In

Google Sign-In is implemented and a basic email-password UI. Full functionality is not yet implemented.

### Headline News

Displays headline news with additional category-based news below.

### Search News

Search for news articles based on keywords

### Category News

Displays news articles based on the selected category.

### Offline Access

API responses are cached using AsyncStorage, allowing offline access to previously fetched data.

### Deep Linking

Clicking on a news article opens it in a browser to view the full details.

### Performance Optimization

To prevent unnecessary re-rendering, useMemo and useCallback hooks are utilized.

### API

Axios is used for API calls, with Axios interceptors for handling requests and responses.

### third party libraries usage

1. react-native-onesignal: For notifications.
2. react-native-vector-icons: For icons.
3. react-native-config: For accessing environment variables from the .env file.
4. @react-native-google-signin/google-signin: For Google Sign-In.
5. @react-native-community/netinfo: To check internet connectivity.
6. @react-native-async-storage/async-storage: For caching data locally.
7. axios: For API implementation.
8. react-native-splash-screen: For displaying the splash screen.
9. react-native-swiper-flatlist: For the home page carousel.
10. @react-navigation/bottom-tabs: For bottom tab navigation.
11. @react-navigation/stack: For stack navigation.
12. @reduxjs/toolkit: For Redux state management.
13. redux-persist: To persist the Redux store.
14. react-redux: For integrating Redux with React components.
