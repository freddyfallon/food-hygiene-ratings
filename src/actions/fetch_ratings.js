import axios from 'axios';

const instance = axios.create({
headers: { 'x-api-version': 2}
});
const BASE_URL = 'http://api.ratings.food.gov.uk/Establishments?pageSize=5000&pageNumber=1&LocalAuthorityId='
export const FETCH_RATINGS = 'FETCH_RATINGS';

export function fetchRatings(authorityId) {

  const rating = instance.get(`${BASE_URL + authorityId}`).then(function(response) {
    return Math.round(response.data.establishments.reduce(function (n, establishment) {
      return n + (establishment.RatingValue === "Pass");
    }, 0) / response.data.establishments.length * 100)
  })


  return {
    type: FETCH_RATINGS,
    payload: rating
  };
}
