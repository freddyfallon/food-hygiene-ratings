import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

const Ratings = () => {
  return (
    <Table responsive>
        <thead>
          <tr>
            <th>Rating</th>
            <th>Percentage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>5-star</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <td>4-star</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <td>3-star</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <td>2-star</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <td>1-star</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <td>Exempt</td>
            <td>Table cell</td>
          </tr>
        </tbody>
      </Table>
  )
};

export default Ratings;
