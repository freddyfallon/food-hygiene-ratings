import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Col, ButtonGroup, DropdownButton, MenuItem } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { fetchAuthorities } from '../actions/fetchAuthorities';
import { fetchRatings } from '../actions/fetch_ratings';

export class Search extends Component {
  constructor(props) {
    super(props);
    this.renderAuthority = this.renderAuthority.bind(this);
    this.clickAuthority = this.clickAuthority.bind(this);
  }

  componentDidMount() {
    this.props.fetchAuthorities();
  }

  clickAuthority(authorityId, authorityName) {
    this.props.fetchRatings(authorityId, authorityName);
  }

  renderAuthority(authorityData) {
    return (
      <MenuItem 
			onClick={() => {this.clickAuthority(authorityData.LocalAuthorityId, authorityData.Name)}} 
			key={authorityData.LocalAuthorityId} 
			eventKey={authorityData.LocalAuthorityId}>{authorityData.Name}
			</MenuItem>
    )
  }

  static proptypes = {
    authorities: PropTypes.array,
    fetchAuthorities: PropTypes.func,
    fetchRatings: PropTypes.func,
  };

  render() {
    if (!this.props.authorities) {
      return <div>Loading...</div>
    }

    return (
      <div>
        <Col xsOffset={0.5} md={2}>
          <ButtonGroup Col xsOffset={1} md={4} justified centered>
            <DropdownButton title="Authority" id="bg-justified-dropdown">
              {this.props.authorities.map(this.renderAuthority)}
            </DropdownButton>
          </ButtonGroup>
        </Col>
      </div>
    )
  }
}

function mapStateToProps ({authorities}) {
  return { authorities }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchAuthorities, fetchRatings }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
