import React from 'react';
import { View, Text, Image, SafeAreaView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import categoriesData from '../../assets/data/categoriesData';
import popularData from '../../assets/data/popularData';
import styles from './styles';
import colors from '../../assets/colors/colors';

const Home = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.headerWrapper}>
          <Image
            source={require('../../assets/images/profile.png')}
            style={styles.profileImage}
          />
          <Feather name='menu' size={24} color={colors.textDark} />
        </View>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>Food</Text>
          <Text style={styles.SubTitle}>Delivery</Text>
        </View>
        {/* Search */}

        <View style={styles.searchWrapper}>
          <Feather name='search' size={24} color={colors.textDark} />
          <View style={styles.search}>
            <Text style={styles.searchText}>Search</Text>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Home;
