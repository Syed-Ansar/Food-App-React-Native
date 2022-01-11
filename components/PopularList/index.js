import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import popular from '../../assets/data/popularData';
import styles from './styles';
import colors from '../../assets/colors/colors';
import Deatils from '../Details';

const lastElement = popular[popular.length - 1];

const PopularList = ({ navigation }) => {
  return (
    <View style={styles.popularWrapper}>
      <Text style={styles.popularTitle}>Popular</Text>
      {popular.map((item) => (
        <TouchableOpacity
          key={item.id}
          onPress={() => navigation.navigate('Details', { item: item })}
        >
          <View
            style={[
              styles.popularCardWrapper,
              {
                marginTop: item.id == 1 ? 10 : 20,
              },
              {
                marginBottom: item.id == lastElement.id ? 20 : 0,
              },
            ]}
          >
            <View>
              <View>
                <View style={styles.popularTopWrapper}>
                  <MaterialCommunityIcons
                    name='crown'
                    size={12}
                    color={colors.primary}
                  />
                  <Text style={styles.popularTopText}>Top of the week</Text>
                </View>
                <View style={styles.popularTitlesWrapper}>
                  <Text style={styles.popularTitlesTitle}>{item.title}</Text>
                  <Text style={styles.popularTitlesWeight}>
                    Weight {item.weight}
                  </Text>
                </View>
              </View>
              <View style={styles.popularCardBottom}>
                <View style={styles.addPizzaButton}>
                  <Feather name='plus' size={10} color={colors.textDark} />
                </View>
                <View style={styles.ratingWrapper}>
                  <MaterialCommunityIcons
                    name='star'
                    size={10}
                    color={colors.textDark}
                  />
                  <Text style={styles.rating}>{item.rating}</Text>
                </View>
              </View>
            </View>

            <View style={styles.popularCardRight}>
              <Image source={item.image} style={styles.popularCardImage} />
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default PopularList;
