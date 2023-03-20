import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Keyboard} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../../theme/colors';
import IconButton from '../button/IconButton';
import SimpleButton from '../button/SimpleButton';

interface SearchBarProps {
  value: string;
  setValue: (value: string) => void;
}

const SearchBar = ({value, setValue}: SearchBarProps) => {
  const clearInput = () => {
    setValue('');
  };

  const cancelSearch = () => {
    setValue('');
    Keyboard.dismiss();
    setSelected(false);
  };

  const [selected, setSelected] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <View style={[styles.searchBox, selected && styles.selectedSearchBox]}>
        <Icon name="search" size={25} color={colors.black} />
        <TextInput
          value={value}
          placeholder="search"
          onChangeText={setValue}
          style={[styles.searchInput]}
          onFocus={() => setSelected(true)}
          onBlur={() => setSelected(false)}
        />
        {selected && value.length > 0 && (
          <IconButton
            iconName="close"
            onPress={clearInput}
            iconColor={colors.error}
          />
        )}
      </View>
      {selected && (
        <SimpleButton
          name="Clear"
          buttonStyle={styles.clearButton}
          onPress={cancelSearch}
        />
      )}
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    height: 50,
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBox: {
    flex: 8,
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
    borderRadius: 20,
    backgroundColor: colors.lightGray,
  },
  selectedSearchBox: {
    borderWidth: 1,
    borderColor: colors.primary,
  },
  searchInput: {
    flex: 7,
    marginHorizontal: 10,
    paddingVertical: 2,
    fontSize: 14,
    fontWeight: '400',
    color: colors.black,
  },
  text: {},
  clearButton: {
    flex: 2,
    marginHorizontal: 10,
    marginVertical: 1,
  },
});
