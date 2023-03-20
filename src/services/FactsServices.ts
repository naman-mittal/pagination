import {factsPageSize} from '../constants/ConfigConstants';

export const fetchFacts = async (page: number) => {
  try {
    const res = await fetch(
      `https://catfact.ninja/facts?page=${page}&limit=${factsPageSize}`,
    );

    return res.json();
  } catch (err) {
    return Promise.reject(err);
  }
};
