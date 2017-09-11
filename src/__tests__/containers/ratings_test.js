import React from 'react';
import configureStore from 'redux-mock-store'
import { shallow } from 'enzyme';
import { Ratings } from '../../containers/ratings'

describe("Ratings", () => {
  let wrapper
  const ratings = {exempt: 10, fail: 0, fiveStar: 59, fourStar: 18, oneStar: 1, pass: 0, threeStar: 8, twoStar: 2}

  beforeEach(() => {
    wrapper = shallow(<Ratings ratings={ratings}/>)
  })

  it("should render correctly", () => {
    expect(wrapper.length).toEqual(1)
  })

})
