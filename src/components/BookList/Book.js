import React, { Component } from "react";

export default class Book extends Component {
  render() {
    const { title, author, year } = this.props;
    return (
      <tr>
        <th>{title}</th>
        <th>{author}</th>
        <th>{year}</th>
      </tr>
    );
  }
}
