import axios from 'axios';

const instance = axios.create({
headers: { 'x-api-version': 2}
});
const BASE_URL = 'http://api.ratings.food.gov.uk/Establishments?pageSize=5000&pageNumber=1&LocalAuthorityId='
export const FETCH_RATINGS = 'FETCH_RATINGS';

export function fetchRatings(authorityId) {

  const pass = instance.get(`${BASE_URL + authorityId}`).then(function(response) {
      return Math.round(response.data.establishments.reduce(function (n, establishment) {
        return n + (establishment.RatingValue === "Pass");
      }, 0) / response.data.establishments.length * 100)
    })

  const fail = instance.get(`${BASE_URL + authorityId}`).then(function(response) {
      return Math.round(response.data.establishments.reduce(function (n, establishment) {
        return n + (establishment.RatingValue === "Improvement Required");
      }, 0) / response.data.establishments.length * 100)
    })

  const exempt = instance.get(`${BASE_URL + authorityId}`).then(function(response) {
      return Math.round(response.data.establishments.reduce(function (n, establishment) {
        return n + (establishment.RatingValue === "Exempt");
      }, 0) / response.data.establishments.length * 100)
    })

  const fiveStar = instance.get(`${BASE_URL + authorityId}`).then(function(response) {
      return Math.round(response.data.establishments.reduce(function (n, establishment) {
        return n + (establishment.RatingValue === "5");
      }, 0) / response.data.establishments.length * 100)
    })

  const fourStar = instance.get(`${BASE_URL + authorityId}`).then(function(response) {
      return Math.round(response.data.establishments.reduce(function (n, establishment) {
        return n + (establishment.RatingValue === "4");
      }, 0) / response.data.establishments.length * 100)
    })

  const threeStar = instance.get(`${BASE_URL + authorityId}`).then(function(response) {
      return Math.round(response.data.establishments.reduce(function (n, establishment) {
        return n + (establishment.RatingValue === "3");
      }, 0) / response.data.establishments.length * 100)
    })

  const twoStar = instance.get(`${BASE_URL + authorityId}`).then(function(response) {
      return Math.round(response.data.establishments.reduce(function (n, establishment) {
        return n + (establishment.RatingValue === "2");
      }, 0) / response.data.establishments.length * 100)
    })

  const oneStar = instance.get(`${BASE_URL + authorityId}`).then(function(response) {
      return Math.round(response.data.establishments.reduce(function (n, establishment) {
        return n + (establishment.RatingValue === "1");
      }, 0) / response.data.establishments.length * 100)
    })

  const ratings = axios.all([ pass, fail, exempt, fiveStar, fourStar, threeStar, twoStar, oneStar ])
                .then( ([ pass, fail, exempt, fiveStar, fourStar, threeStar, twoStar, oneStar ]) => {
                   return { pass, fail, exempt, fiveStar, fourStar, threeStar, twoStar, oneStar }
                });


  return {
    type: FETCH_RATINGS,
    payload: ratings
  };
}
