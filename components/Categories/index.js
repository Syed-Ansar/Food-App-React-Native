import { Feather } from '@expo/vector-icons';
import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import categoriesData from '../../assets/data/categoriesData';
import styles from './styles';
import colors from '../../assets/colors/colors';

const lastElement = categoriesData[categoriesData.length - 1];

const Categories = () => {
  const renderCategories = ({ item }) => {
    return (
      <View
        style={[
          styles.categoriesItemWrapper,
          { backgroundColor: item.selected ? colors.primary : colors.white },
          { marginRight: item.id === lastElement.id ? 20 : 0 },
        ]}
      >
        <Image style={styles.categoriesItemImage} source={item.image} />
        <Text style={styles.categoriesItemTitle}>{item.title}</Text>
        <View
          style={[
            styles.categoriesSelectWrapper,
            {
              backgroundColor: item.selected ? colors.white : colors.secondary,
            },
          ]}
        >
          <Feather
            name='chevron-right'
            size={8}
            color={item.selected ? 'black' : 'white'}
            style={styles.categoriesSelectIcon}
          />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.categoriesWrapper}>
      <Text style={styles.categoriesTitle}>Categories</Text>
      <View style={styles.categoriesListWrapper}>
        <FlatList
          data={categoriesData}
          renderItem={renderCategories}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

export default Categories;
