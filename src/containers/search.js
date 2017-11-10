import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchAuthorities } from '../actions/fetchAuthorities';
import { fetchRatings } from '../actions/fetch_ratings';
import { Col, ButtonGroup, DropdownButton, MenuItem  } from 'react-bootstrap';

export class Search extends Component {
  componentDidMount() {
    this.props.fetchAuthorities();
  }

  constructor(props) {
    super(props);
    this.renderAuthority = this.renderAuthority.bind(this);
    this.clickAuthority = this.clickAuthority.bind(this);
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
