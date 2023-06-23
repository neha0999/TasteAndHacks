import React from 'react'
import { View, Text, StyleSheet, ImageBackground, StatusBar } from 'react-native';
import { COLORS, SIZES, FONTS } from "../constant/theme"
import LinearGradient from 'react-native-linear-gradient';
import images from '../constant/images';
import { color } from 'react-native-reanimated';
import { CustomButton } from '../components';
import { useNavigation } from '@react-navigation/native';

function renderHeader() {
  return (
    <View
      style={styles.headerContainer}>
      <ImageBackground
        source={images.background}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          colors={[COLORS.transparent, COLORS.black]}
          style={styles.gradient}
        >
          <Text
            style={styles.title}>
            Cook a Delicious Food Easily
          </Text>
        </LinearGradient>

      </ImageBackground>
    </View>
  )
}

function renderDetails(navigation) {
  return (
    <View style={styles.detailsContainer}>
      <Text
        style={styles.subTitle}>Discover more than 120 food recipes in your hand and cooking it easily</Text>
      <View style={styles.buttonContainer}>

        <CustomButton
          buttonText="Get Started"
          buttonContainerStyle={{
            paddingVertical: 18,
            borderRadius: 20,
            color: COLORS.black
          }}
          colors={[COLORS.orange, COLORS.orange]}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={{ color: COLORS.white }}>Get Started</Text>
        </CustomButton>


      </View>
    </View>
  )
}



const LandingScreen = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.background}>

      <StatusBar barStyle={'light-content'} />

      {renderHeader()}
      {renderDetails(navigation)}



    </View>
  );
}

export default LandingScreen




const styles = StyleSheet.create({

  background: {
    flex: 1,
    backgroundColor: COLORS.black
  },
  headerContainer: { height: SIZES.height > 700 ? "75%" : "60%" },
  backgroundImage: {
    flex: 1,
    justifyContent: "flex-end",
  },
  gradient: {
    height: 200,
    justifyContent: "flex-end",
    paddingHorizontal: SIZES.padding
  },
  title: {
    width: "80%",
    color: COLORS.white,
    fontWeight: 'bold',
    ...FONTS.heading,
    lineHeight: 45,

  },
  detailsContainer: { flex: 1, paddingHorizontal: SIZES.padding },
  subTitle: {
    marginBottom: SIZES.radius,
    width: "80%",
    color: COLORS.gray,
    ...FONTS.body2
  },
  buttonContainer: { flex: 1, justifyContent: 'center' }

});