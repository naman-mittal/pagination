import React, {useState} from 'react';
import {View, StyleSheet, Text, ViewStyle} from 'react-native';
import colors from '../../theme/colors';
import IconButton from '../button/IconButton';
import {Dropdown} from 'react-native-element-dropdown';

export interface SortData {
  value: string;
  order: 'asc' | 'desc';
}

interface SortingPickerProps {
  pickerData: Array<{label: string; value: string}>;
  sortData: SortData;
  setSortData: (value: SortData) => void;
  containerStyle?: ViewStyle;
}

const SortingPicker = ({
  pickerData,
  sortData,
  setSortData,
  containerStyle,
}: SortingPickerProps) => {
  const [value, setValue] = useState(pickerData[0]);

  const handleIconClick = () => {
    setSortData({
      ...sortData,
      order: sortData.order === 'asc' ? 'desc' : 'asc',
    });
  };

  const handleOnChange = (item: any) => {
    setValue(item);
    setSortData({...sortData, value: item.value});
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.text}>Sort By : </Text>
      <Dropdown
        style={styles.dropdown}
        data={pickerData}
        value={value}
        labelField="label"
        valueField="value"
        onChange={handleOnChange}
        selectedTextStyle={{color: colors.black}}
        itemTextStyle={{color: colors.black}}
      />
      <IconButton
        iconName={sortData.order === 'asc' ? 'north' : 'south'}
        onPress={handleIconClick}
        size={25}
      />
    </View>
  );
};

export default SortingPicker;

const styles = StyleSheet.create({
  container: {
    height: 50,
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropdown: {
    flex: 1,
    height: '100%',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    borderRadius: 10,
    backgroundColor: colors.white,
  },
  selectedSearchInput: {
    borderBottomWidth: 1,
  },
  searchInput: {
    flex: 7,
    marginHorizontal: 10,
    paddingVertical: 2,
  },
  text: {
    fontSize: 15,
    fontWeight: '500',
    color: colors.black,
  },
});
