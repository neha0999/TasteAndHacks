import React from 'react';
import { View, Text, SafeAreaView, Linking,StyleSheet } from 'react-native';
import { FONTS, COLORS, SIZES } from '../constant';
import { CategoryCard } from '../components';

const SearchedRecipes = ({ route }) => {

    const { filteredData } = route.params;

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Results</Text>
            {filteredData.map(item => (
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
            ))}

        </SafeAreaView>
    );
};

export default SearchedRecipes;
const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: COLORS.black, paddingVertical: SIZES.padding },
    text: {
      marginHorizontal: SIZES.padding,
      ...FONTS.h2,
      fontWeight:'bold',
      color: COLORS.white
    }
  })