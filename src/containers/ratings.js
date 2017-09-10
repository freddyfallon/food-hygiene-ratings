import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Col, Table } from 'react-bootstrap';


class Ratings extends Component {
  render() {
    if (!this.props.ratings) {
      return <Col md={8}>Please wait</Col>
    }
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
                <td>Pass</td>
                <td>{`${this.props.ratings}%`}</td>
              </tr>
              <tr>
                <td>Fail</td>
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

function mapStateToProps(state) {
  return {
    ratings: state.ratings
  };
}

export default connect(mapStateToProps)(Ratings)
