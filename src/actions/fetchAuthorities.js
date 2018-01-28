import axios from 'axios';

const instance = axios.create({
  headers: { 'x-api-version': 2 },
});

export const FETCH_AUTHORITIES = 'FETCH_AUTHORITIES';

export function fetchAuthorities() {
  const request = instance.get('http://api.ratings.food.gov.uk/Authorities/basic');

  return {
    type: FETCH_AUTHORITIES,
    payload: request,
  };
}
