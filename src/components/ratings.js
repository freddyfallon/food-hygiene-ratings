import React, { Component } from 'react';
import { Col, Table } from 'react-bootstrap';


class Ratings extends Component {
  render() {
    return (
      <Col md={8}>
        <Table>
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
        </Col>
    )
  }
}

export default Ratings;
