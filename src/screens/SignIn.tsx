import React, {useEffect, useState} from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {COLORS} from '../utils/theme';
import {DEVICE, ROUTES} from '../utils/constants';
import CustomButton from '../components/CustomButton';
import Container from '../components/Container';
import ImageButton from '../components/auth/ImageButton';
import LabelInput from '../components/auth/LabelInput';
import {commonStyles} from '../styles/styles';
import {GoogleSignin, User} from '@react-native-google-signin/google-signin';
import {ScreenProp} from '../@types/type';

function SignIn({navigation}: ScreenProp) {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '545283269490-s70srbqb2q4ddfjssar16o8qpk5ut445.apps.googleusercontent.com',
    });
  }, []);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState<boolean>(false);

  async function onGoogleButtonPress() {
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    let response;
    try {
      response = await GoogleSignin.signIn();
      navigation.navigate(ROUTES.INITIAL.ROOT);
    } catch (e) {
      navigation.navigate(ROUTES.INITIAL.ROOT);
    }
  }
  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={60}
      behavior={'height'}
      style={styles.mainView}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled">
        <View style={{marginTop: DEVICE.height * 0.1}}>
          <Text style={styles.title}>Sign In</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/images/app-icon.jpg')}
            style={styles.image}
          />
        </View>
        <View style={styles.buttonContainer}>
          <ImageButton
            onPress={() => onGoogleButtonPress()}
            image={require('../../assets/images/login/google.png')}
            title={'Google'}
          />
          <Container width={20} />
          <ImageButton
            onPress={() => navigation.navigate(ROUTES.INITIAL.ROOT)}
            image={require('../../assets/images/login/facebook.png')}
            title={'Facebook'}
          />
        </View>
        <View style={commonStyles.row}>
          <View style={styles.separator} />
          <Text style={styles.orText}>Or</Text>
          <View style={styles.separator} />
        </View>
        <Container height={20} />
        <LabelInput
          placeHolder={'Enter Your Email'}
          value={email}
          onChange={setEmail}
        />
        <Container height={20} />
        <LabelInput
          placeHolder={'Enter Your Password'}
          secureTextEntry={showPassword}
          postIcon={showPassword ? 'eye' : 'eye-slash'}
          iconPress={() => setShowPassword(!showPassword)}
          value={password}
          onChange={setPassword}
        />
        <View style={{position: 'relative', marginBottom: 20}}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </View>
        <Container height={20} />
        <View style={styles.buttonWrapper}>
          <CustomButton
            label="Login"
            onPress={() => navigation.navigate(ROUTES.INITIAL.ROOT)}
          />
          <View style={[commonStyles.row, styles.registerLink]}>
            <Text style={styles.account}>Don't have an account?</Text>
            <TouchableOpacity>
              <Text style={styles.registerText}> Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default SignIn;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  title: {
    color: COLORS.primaryBlue,
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
  },
  imageContainer: {
    marginTop: 0,
    alignItems: 'center',
  },
  image: {width: 300, height: 300},
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
  },
  separator: {
    height: 1,
    backgroundColor: COLORS.backgroundGray,
    flex: 1,
  },
  orText: {
    color: COLORS.desGray,
    paddingHorizontal: 10,
    fontSize: 15,
  },
  buttonWrapper: {
    paddingHorizontal: 20,
  },
  forgotPasswordText: {
    fontWeight: '400',
    fontSize: 10,
    color: COLORS.desGray,
    textDecorationLine: 'underline',
    position: 'absolute',
    right: 20,
    top: 5,
  },
  account: {
    fontWeight: '400',
    fontSize: 14,
    color: COLORS.desGray,
  },
  registerText: {
    fontWeight: '600',
    fontSize: 14,
    color: COLORS.primaryBlue,
    textDecorationLine: 'underline',
  },
  registerLink: {
    marginTop: 5,
  },
});
function isSuccessResponse(response: User) {
  throw new Error('Function not implemented.');
}

function isErrorWithCode(error: unknown) {
  throw new Error('Function not implemented.');
}
