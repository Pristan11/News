
import { StyleSheet } from 'react-native';

const padding  = {
    horizontal: 20,
    vertical: 10
}

const commonStyles = StyleSheet.create({
  rowSpaceBetween : {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  }
});

export { commonStyles, padding};
