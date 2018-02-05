import { StyleSheet } from 'react-native';

export const commonStyles = StyleSheet.create({
  headerTitle: {
    fontSize: 20
  },
  headerContainer: {
    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    elevation: 2,
    position: 'relative',
  },
});
