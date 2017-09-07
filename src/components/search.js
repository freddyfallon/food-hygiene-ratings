import React, { Component } from 'react';
import { Col, ButtonGroup, DropdownButton, MenuItem  } from 'react-bootstrap';

class Search extends Component {
  render() {
    return (
      <div>
        <Col xsOffset={0.5} md={2}>
          <ButtonGroup Col xsOffset={1} md={4} justified centered>
            <DropdownButton title="Authority" id="bg-justified-dropdown">
              <MenuItem eventKey="1">Dropdown link</MenuItem>
              <MenuItem eventKey="2">Dropdown link</MenuItem>
            </DropdownButton>
          </ButtonGroup>
        </Col>
      </div>
    )
  }
}

export default Search;
