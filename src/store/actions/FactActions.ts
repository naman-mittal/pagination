import {fetchFacts as fetchFactsService} from '../../services/FactsServices';
import {
  fetchDataError,
  fetchDataSuccess,
  fetchingData,
  setNoMoreData,
} from '../slices/FactSlice';

export const fetchFacts = (page: number) => (dispatch: any) => {
  const initialLoading = page === 0;
  dispatch(fetchingData({initialLoading}));

  fetchFactsService(page)
    .then(res => {
      // added hardcoded check to trigger end of content (page > 10)
      if (res.total < page || page > 10) {
        dispatch(setNoMoreData());
      } else {
        dispatch(fetchDataSuccess({data: res.data, initialLoading}));
      }
    })
    .catch(err => {
      dispatch(fetchDataError(err));
    });
};
