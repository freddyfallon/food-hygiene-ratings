import RatingsReducer from '../../reducers/reducer_ratings';
import {FETCH_RATINGS} from '../../actions/fetch_ratings'

describe('RatingsReducer', () => {
  it('has a default state', () => {
    expect(RatingsReducer(undefined, {type: 'whatever'})).toEqual(null);
  })

  it('can handle FETCH_RATINGS', () => {
    expect(RatingsReducer(undefined,
      {type: FETCH_RATINGS,
      payload: {
      fetchRatings: true
      }}
      )
    ).toEqual({
      fetchRatings: true
    });
  })
})
