import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Table } from 'react-bootstrap';

export class Ratings extends Component {
  render() {
    if (!this.props.ratings) {
      return <Col md={8}>Select an authority to get started</Col>
    } else if ( this.props.ratings.pass === 0 && this.props.ratings.pass === 0 ) {
      return (
        <Col md={8}>
          <h2 class="city-name">{this.props.ratings.name}</h2>
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
                  <td>{`${this.props.ratings.fiveStar}%`}</td>
                </tr>
                <tr>
                  <td>4-star</td>
                  <td>{`${this.props.ratings.fourStar}%`}</td>
                </tr>
                <tr>
                  <td>3-star</td>
                  <td>{`${this.props.ratings.threeStar}%`}</td>
                </tr>
                <tr>
                  <td>2-star</td>
                  <td>{`${this.props.ratings.twoStar}%`}</td>
                </tr>
                <tr>
                  <td>1-star</td>
                  <td>{`${this.props.ratings.oneStar}%`}</td>
                </tr>
                <tr>
                  <td>Exempt</td>
                  <td>{`${this.props.ratings.exempt}%`}</td>
                </tr>
              </tbody>
            </Table>
          </Col>
      )
    } else return (
      <Col md={8}>
      <h2 className="city-name">{this.props.ratings.name}</h2>
        <Table>
            <thead>
              <tr>
                <th>Rating</th>
                <th>Percentage</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Pass</td>
                <td>{`${this.props.ratings.pass}%`}</td>
              </tr>
              <tr>
                <td>Fail</td>
                <td>{`${this.props.ratings.fail}%`}</td>
              </tr>
              <tr>
                <td>Exempt</td>
                <td>{`${this.props.ratings.exempt}%`}</td>
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
