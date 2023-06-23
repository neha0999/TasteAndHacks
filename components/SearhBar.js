import React, { useState } from 'react';
import { View, Image, StyleSheet, TextInput, Text, TouchableOpacity } from 'react-native';
import { FONTS, COLORS, SIZES, icons } from '../constant';
import { useNavigation } from '@react-navigation/native';

const SearchBar = ({ data }) => {
 
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(data);
  const navigation = useNavigation();

  const handleSearch = () => {
    const searchData = [];
    if (searchQuery !== '') {
      for (let i = 0; i < data.length; i++) {
        if (data[i].title.toLowerCase().includes(searchQuery.toLowerCase())) {
          searchData.push(data[i]);
        }
      }

      if (searchData.length > 0) {
        navigation.navigate('SearchedRecipes', { filteredData: searchData });
        setFilteredData(searchData);
      } else {
        setFilteredData([]);
      }
    }
  };

  return (
    <View
      style={styles.container}
    >
      <Image
        source={icons.search}
        style={styles.image}
      />
      <TextInput
        style={styles.textInput}
        placeholderTextColor={COLORS.gray}
        placeholder='Search Recipes'
        value={searchQuery}
        onChangeText={text => setSearchQuery(text)}
        onSubmitEditing={handleSearch}
      />

      {filteredData.length === 0 && searchQuery !== '' && (
        <Text style={{ textAlign: 'center', marginTop: 10, color: COLORS.gray }}>
          No results found for '{searchQuery}'
        </Text>
      )}
    </View>
  );
};

export default SearchBar;


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    marginHorizontal: SIZES.padding,
    paddingHorizontal: SIZES.radius,
    borderRadius: 10,
    backgroundColor: COLORS.transparentDarkGray
  },
  image: {
    width: 25,
    height: 25,
    tintColor: COLORS.white
  },
  textInput: {
    flex: 1,
    marginLeft: SIZES.radius,
    ...FONTS.body2,
    color: COLORS.white
  }
})