import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, View, Linking, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { FONTS, COLORS, SIZES, icons } from '../constant';
import { FlatList } from 'react-native-gesture-handler';
import { CategoryCard, GridViewCard, SavedRecipesCard, SearhBar, TrendingSection } from '../components';
import axios from 'axios'



const HomeScreen = ({ navigation }) => {
  const [data, setData] = useState()
  const [focusedIcon, setFocusedIcon] = useState('listview')
  const handleIconClick = (iconName) => {
    setFocusedIcon(iconName === focusedIcon ? null : iconName);
  };
  useEffect(() => {

    axios.get("https://javed-iqbal.com/api/?get_videos=all")
      .then(response => {
        
        let data = response.data.map(d=>{
          d.bookmark = d.bookmark ==="1" ? true : false;
          return d
        })
        setData(data)
       
      })
      
  }, [])
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => `${item.id}`}
        keyboardDismissMode='on-drag'
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<View>

          {data&&<SearhBar data={data}/>}
          {data&&<SavedRecipesCard data={data} />}
          <View style={styles.subContainer}>
            <Text style={styles.trendingText}>Trending Recipes

            </Text>
            <FlatList
              data={data}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={item => `${item.id}`}
              renderItem={({ item, index }) => {
                
                return (
                  <TrendingSection
                    containerStyle={{
                      marginLeft: index == 0 ? SIZES.padding : 0
                    }}
                    recipeItem={item}
                    onPress={() => {
                      const youtubeUrl = item.url;
                      Linking.openURL(youtubeUrl);
                    }}
                  />
                )



              }
              } />
          </View >
          <View style={styles.categoriesHeader}>
            <Text style={styles.recentsText}>Recents</Text>

            <View style={styles.viewsContainer}>
              <TouchableOpacity onPress={() => handleIconClick('listview')}>
                <Image source={icons.listview}
                  style={[styles.image, { marginRight: 10 }, focusedIcon === 'listview' && styles.focusedImage,]}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleIconClick('gridview')}>
                <Image source={icons.gridview}
                  style={[styles.image, focusedIcon === 'gridview' && styles.focusedImage]}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>}

        renderItem={({ item }) => {
          if (focusedIcon === 'listview') {
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
          } else {
            return (
              <View>
                <GridViewCard
                  containerStyle={{
                    marginHorizontal: SIZES.padding

                  }}
                  categoryItem={item}
                  onPress={() => {
                    const youtubeUrl = item.url;
                    Linking.openURL(youtubeUrl);
                  }} />
              </View>
            )

          }
        }}
        ListFooterComponent={<View style={{ marginBottom: 100 }} />}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;





const styles = StyleSheet.create({
  container:
    { flex: 1, backgroundColor: COLORS.black, paddingVertical: SIZES.padding },
  subContainer:
    { marginTop: SIZES.padding },
  trendingText: {
    marginHorizontal: SIZES.padding,
    ...FONTS.h2,
    color: COLORS.white,
    fontWeight: 'bold'
  },
  recentsText: {
    marginHorizontal: SIZES.padding,
    marginTop: SIZES.body3,
    ...FONTS.h2,
    color: COLORS.white,
    fontWeight: "bold"
  },
  viewsContainer: {
    flexDirection: "row",
    justifyContent: 'flex-end',
    alignItems: "center",
    paddingRight: 40,
    paddingTop: 18
  },
  image: {
    width: 25,
    height: 25,
    tintColor: COLORS.darkGreen,
  },
  focusedImage: {

    opacity: 0.5

  },
  categoriesHeader: {

    display: 'flex',
    width: "100%",
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
})