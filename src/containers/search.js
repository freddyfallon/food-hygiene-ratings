import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchAuthorities } from '../actions/fetchAuthorities';
import { Col, ButtonGroup, DropdownButton, MenuItem  } from 'react-bootstrap';

class Search extends Component {
  componentDidMount() {
    this.props.fetchAuthorities();
  }

  renderAuthority(authorityData) {
    return (
      <MenuItem key={authorityData.LocalAuthorityId} eventKey={authorityData.LocalAuthorityId}>{authorityData.Name}</MenuItem>
    )
  }

  render() {
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
  return bindActionCreators({ fetchAuthorities }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
