import React, { Component } from 'react';
import { ButtonGroup, DropdownButton, MenuItem  } from 'react-bootstrap';


const Search = () => {
  return (
    <div>
    <ButtonGroup justified>
      <DropdownButton title="Authority" id="bg-justified-dropdown">
        <MenuItem eventKey="1">Dropdown link</MenuItem>
        <MenuItem eventKey="2">Dropdown link</MenuItem>
      </DropdownButton>
    </ButtonGroup>
    </div>
  )
};

export default Search;
