import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, SafeAreaView, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './styles';
import colors from '../../assets/colors/colors';
import Categories from '../Categories';
import PopularList from '../PopularList';

const Home = () => {
  const navigation = useNavigation();
  return (
    <ScrollView
      contentInsetAdjustmentBehavior='automatic'
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.container}>
        <SafeAreaView>
          {/* Header */}
          <View
            style={[
              styles.headerWrapper,
              { marginTop: Platform.OS === 'android' ? 30 : 0 },
            ]}
          >
            <Image
              source={require('../../assets/images/profile.png')}
              style={styles.profileImage}
            />
            <Feather name='menu' size={24} color={colors.textDark} />
          </View>
          {/* Titles */}
          <View style={styles.titleWrapper}>
            <Text style={styles.title}>Food</Text>
            <Text style={styles.SubTitle}>Delivery</Text>
          </View>
          {/* Search */}
          <View style={styles.searchWrapper}>
            <Feather name='search' size={24} color={colors.textDark} />
            <View style={styles.search}>
              <Text style={styles.searchText}>Search..</Text>
            </View>
          </View>
          {/* Categories */}
          <Categories />
          {/* Popular List */}
          <PopularList navigation={navigation} />
        </SafeAreaView>
      </View>
    </ScrollView>
  );
};

export default Home;
