import React, { useState } from 'react';
import { SafeAreaView, Text, View, Linking, StyleSheet } from 'react-native';
import { FONTS, COLORS, SIZES, icons, images, dummyData } from '../constant';
import { FlatList } from 'react-native-gesture-handler';
import { CategoryCard} from '../components';
const Saved = ({route}) => {

  const { data } = route.params;
console.log(data,'----------')
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Saved Recipes  </Text>
      <FlatList
        data={data}
        keyExtractor={item => `${item.id}`}
        keyboardDismissMode='on-drag'
        showsVerticalScrollIndicator={false}


        renderItem={({ item }) => {
          if (item.bookmark) {
            return (
              <View>

                <CategoryCard
                  containerStyle={{
                    marginHorizontal: SIZES.padding

                  }}
                  categoryItem={item}

                  onPress={() => {
                    const youtubeUrl = item.url;
                    Linking.openURL(youtubeUrl);
                  }}
                />



              </View>
            );
          }
          return null;
        }}
      />

    </SafeAreaView>
  )
}

export default Saved

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.black, paddingVertical: SIZES.padding },
  text: {
    marginHorizontal: SIZES.padding,
    ...FONTS.h2,
    color: COLORS.white
  }
})