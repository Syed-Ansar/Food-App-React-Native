import { StyleSheet } from 'react-native';
import colors from '../../assets/colors/colors';

const styles = StyleSheet.create({
  categoriesWrapper: {
    marginTop: 30,
  },
  categoriesTitle: {
    fontSize: 20,
    fontWeight: '800',
    paddingHorizontal: 20,
  },
  categoriesListWrapper: {
    paddingTop: 15,
    paddingBottom: 20,
  },
  categoriesItemWrapper: {
    backgroundColor: colors.primary,
    marginLeft: 20,
    borderRadius: 20,
    alignItems: 'center',
  },
  categoriesItemImage: {
    width: 60,
    height: 60,
    marginTop: 25,
    alignItems: 'center',
    marginHorizontal: 20,
  },
  categoriesItemTitle: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 14,
    marginTop: 10,
  },
  categoriesSelectWrapper: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    width: 26,
    height: 26,
    marginBottom: 20,
    borderRadius: 20,
  },
  categoriesSelectIcon: {
    alignSelf: 'center',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default styles;
