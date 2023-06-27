import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, StyleSheet, View, Image } from 'react-native';
import { FONTS, COLORS, SIZES, icons, images } from '../constant';
import { TouchableOpacity } from 'react-native-gesture-handler';
import axios from 'axios';

const CategoryCard = ({ containerStyle, categoryItem, onPress }) => {
  
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

      {/* Details */}
      <View style={styles.titleContainer}>
        <Text
          ellipsizeMode='tail' numberOfLines={2}
          style={{
            ...FONTS.h2,
            ...styles.title
          }}
        >
          {categoryItem.title}
        </Text>

        {/* Additional details */}
        <View style={styles.subTitleContainer}>
          <Text
            style={{
              ...FONTS.body3,
              ...styles.subTitle

            }}
          >
            {categoryItem.duration}  mins
          </Text>

          <TouchableOpacity style={{
            paddingLeft: 100,
            marginTop: 5
          }}
            onPress={handlePress}>
            <Image
              source={isBookmark == true ? icons.bookmarkfilled : icons.bookmark}
              style={styles.image}
            />

          </TouchableOpacity>

        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryCard;





const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 100,
    marginTop: 20,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.transparentDarkGray,

  },
  imageContainer: {
    width: 100,
    height: 100,
    borderRadius: SIZES.radius,
  },
  titleContainer: {
    width: '65%', paddingHorizontal: 10,
  },
  title: {
    textAlign:'left',
    color: COLORS.white,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subTitleContainer: {
    paddingHorizontal: 10,
    flexDirection: 'row', alignItems: 'center'
  },
  subTitle: {

    color: COLORS.gray,
    marginRight: 15,
  },
  image: {
    width: 20,
    height: 20,
    tintColor: COLORS.darkGreen,
  },

})