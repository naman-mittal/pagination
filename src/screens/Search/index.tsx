import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import UserCard from '../../components/card/UserCard';

import SearchBar from '../../components/input/SearchBar';
import SortingPicker, {SortData} from '../../components/input/SortingPicker';
import userData from '../../mockData/Users.json';
import {User} from '../../constants/types';
import {filterList, sortList} from '../../utils/GlobalFunctions';

import styles from './styles';

const Search = () => {
  const pickerData = [
    {label: 'Frist Name', value: 'first_name'},
    {label: 'Last Name', value: 'last_name'},
    {label: 'City', value: 'address.city'},
  ];

  const [searchText, setSearchText] = useState<string>('');
  const [sortData, setSortData] = useState<SortData>({
    value: pickerData[0].value,
    order: 'asc',
  });

  const [filteredList, setFilteredList] = useState<Array<User>>(userData);
  const [sortedList, setSortedList] = useState<Array<User>>([]);

  useEffect(() => {
    setSortedList(sortList(userData, sortData.value, sortData.order));
  }, [sortData]);

  useEffect(() => {
    setFilteredList(
      filterList(sortedList, searchText, [
        'first_name',
        'last_name',
        'email',
        'address.city',
        'address.country',
        'employment.title',
      ]),
    );
  }, [searchText, sortedList]);

  return (
    <View style={styles.container}>
      <SearchBar value={searchText} setValue={setSearchText} />
      <SortingPicker
        sortData={sortData}
        setSortData={setSortData}
        pickerData={pickerData}
        containerStyle={styles.searchBox}
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        style={styles.listContainer}
        data={filteredList}
        keyExtractor={user => user.id + ' '}
        renderItem={({item}) => <UserCard user={item} />}
        ListEmptyComponent={<Text style={styles.text}>No match found</Text>}
      />
    </View>
  );
};

export default Search;
