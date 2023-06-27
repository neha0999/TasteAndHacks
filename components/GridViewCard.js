import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet, View, Image } from 'react-native';
import { FONTS, COLORS, SIZES, icons, images } from '../constant';
import { TouchableOpacity } from 'react-native-gesture-handler';
import axios from 'axios';
const GridViewCard = ({ containerStyle, categoryItem, onPress }) => {
  const [isBookmark, setIsBookmark] = useState(categoryItem.bookmark);
  const handlePress = async() => {
    setIsBookmark(!isBookmark);
  
    await axios.post('http://javed-iqbal.com/api/', {
      "bookmark": !isBookmark === false ? "0" : "1",
      "id": categoryItem.id
    })
      .then(function (response) {
        console.log("response", response.data);
      })
      .catch(function (error) {
        console.log(error);
      });


  }
  return (
    <View style={{ display: 'flex' }}>
      <TouchableOpacity
        style={{
          ...styles.container,
          ...containerStyle,
        }}
        onPress={onPress}
      >
        {/* image */}
        <Image
          source={{ uri: categoryItem.imageurl.toString() }}
          resizeMode='cover'
          style={styles.imageContainer}
        />
        <View style={{
          flex: 1

        }}>
          {/* Name and bookmark */}
          <View style={styles.titleContainer}>
            <Text ellipsizeMode='tail' numberOfLines={2} style={styles.title}>
              {categoryItem.title}
            </Text>
            <TouchableOpacity onPress={handlePress}>

              <Image source={isBookmark == true ? icons.bookmarkfilled : icons.bookmark}
                style={styles.bookmarkIcon} />
               
                
            </TouchableOpacity>

          </View>
          <Text style={styles.subDetail}>
            {categoryItem.duration}  mins

          </Text>



        </View>
      </TouchableOpacity>
    </View>
  );
};

export default GridViewCard;





const styles = StyleSheet.create({
  container: {
    // flexDirection: 'row',


    height: 200,
    padding: 0,
    width: "88%",
    marginTop: 20,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.transparentDarkGray,

  },
  imageContainer: {

    width: "100%",
    height: 120,
    borderRadius: SIZES.radius,
    alignItems: 'center',
  },


  titleContainer: {
    padding: 10,
    display: 'flex',
    width: "100%",
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 4,

  },
  title: {

    textAlign: 'left',
    color: COLORS.white,
    fontSize: 18,
  },
  bookmarkIcon: {
    width: 20,
    height: 20,
    marginRight: SIZES.base,
    tintColor: COLORS.darkGreen
  },
  subDetail: {
    color: COLORS.gray,
    ...FONTS.body4,
    paddingHorizontal: 12,
    paddingBottom: 10

  }


})