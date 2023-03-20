import {createSlice} from '@reduxjs/toolkit';
import {Fact} from '../../constants/types';

interface PassengerInitialState {
  facts: Array<Fact>;
  isLoadingData: boolean;
  isLoadingMoreData: boolean;
  isRefreshingData: boolean;
  error: {error: string} | null;
  hasMoreData: boolean;
}

const initialState: PassengerInitialState = {
  facts: [],
  isLoadingData: false,
  isLoadingMoreData: false,
  isRefreshingData: false,
  hasMoreData: true,
  error: null,
};

const factSlice = createSlice({
  name: 'facts',
  initialState,
  reducers: {
    fetchingData: (state, action) => {
      if (action.payload.initialLoading) {
        state.isLoadingData = true;
      } else {
        state.isLoadingMoreData = true;
      }
    },

    fetchDataSuccess: (state, action) => {
      if (action.payload.initialLoading) {
        state.facts = action.payload.data;
        state.hasMoreData = true;
      } else {
        state.facts = [...state.facts, ...action.payload.data];
      }

      state.isLoadingData = false;
      state.isRefreshingData = false;
      state.isLoadingMoreData = false;
    },

    fetchDataError: (state, action) => {
      state.error = action.payload;
      state.isLoadingData = false;
      state.isRefreshingData = false;
      state.isLoadingMoreData = false;
    },

    setNoMoreData: state => {
      state.hasMoreData = false;
      state.isLoadingData = false;
      state.isRefreshingData = false;
      state.isLoadingMoreData = false;
    },

    setRefreshingData: state => {
      state.isRefreshingData = true;
    },

    clearError: state => {
      state.error = null;
    },
  },
});

export const {
  fetchingData,
  fetchDataSuccess,
  fetchDataError,
  setNoMoreData,
  setRefreshingData,
  clearError,
} = factSlice.actions;

export default factSlice.reducer;
