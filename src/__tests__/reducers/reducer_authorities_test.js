import AuthoritiesReducer from '../../reducers/reducer_authorities';
import { FETCH_AUTHORITIES } from '../../actions/fetchAuthorities';
describe('Authories Reducer', () => {
  it('has a default state', () => {
    expect(AuthoritiesReducer(undefined, {type: 'whatever'})).toEqual([]);
  });

  it('can handle FETCH_AUTHORITIES', () => {
    expect(AuthoritiesReducer(undefined,
      {type: FETCH_AUTHORITIES,
        payload: {
      data: { authorities: "Hello" }
      }
    })).toEqual("Hello");
  });
})
