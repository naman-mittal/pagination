import {useFocusEffect} from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  RefreshControl,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import FactCard from '../../components/card/FactCard';
import {RootState} from '../../store';
import {fetchFacts} from '../../store/actions/FactActions';
import {setRefreshingData} from '../../store/slices/FactSlice';
import colors from '../../theme/colors';

import styles from './styles';

const Pagination = () => {
  const [page, setPage] = useState<number>(0);

  const dispatch = useDispatch();

  const {
    facts,
    isLoadingData,
    isRefreshingData,
    isLoadingMoreData,
    hasMoreData,
  } = useSelector((state: RootState) => state.factsData);

  const fetchData = useCallback(
    (isRefreshing = false) => {
      isRefreshing && dispatch(setRefreshingData());
      dispatch(fetchFacts(0) as any);
      setPage(0);
    },
    [dispatch],
  );

  const fetchMoreData = () => {
    if (!isLoadingMoreData && hasMoreData) {
      setPage(page + 1);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchData();
    }, [fetchData]),
  );

  useEffect(() => {
    if (page > 0) {
      dispatch(fetchFacts(page) as any);
    }
  }, [page, dispatch]);

  const renderFooter = () => {
    return (
      <View style={styles.footer}>
        {isLoadingMoreData && (
          <ActivityIndicator size="large" color={colors.onBackground} />
        )}
        {!hasMoreData && (
          <Text style={styles.noDataText}>No more data to show</Text>
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {isLoadingData && !isRefreshingData ? (
        <View style={styles.loading}>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <FlatList
          style={styles.listContainer}
          data={facts}
          keyExtractor={fact => fact.length + '' + Math.random()}
          refreshControl={
            <RefreshControl
              refreshing={isRefreshingData}
              onRefresh={() => fetchData(true)}
            />
          }
          renderItem={({item}) => <FactCard fact={item} />}
          ListFooterComponent={renderFooter()}
          onEndReachedThreshold={0.2}
          onEndReached={fetchMoreData}
        />
      )}
    </View>
  );
};

export default Pagination;
