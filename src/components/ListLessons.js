import React, { Component } from 'react';

class ListLessons extends Component {
  render() {
    const listItems = this.props.lessons.map(item => (
      <div>{item.boarderName}</div>
    ));

    return (
      <div className="lesson-list item-list mb-3">
        {this.props.lessons.map(item => (
          <div class="container board-item">
            <div class="row">
              <div class="col-3 col-md-4 brd">
                <span class="lsn-date">
                2021-1-9 9:30
                </span>
              </div>
              <div class="col-3 col-md-3 brd">
                <span class="label-item">
                Rider:
                </span>
                <span class="board-name">
                Jeremy
                </span>
              </div>
              <div class="col-2 col-md-2 brd lsn-length">
                Half Day
              </div>
              <div class="col-2 col-md-1 brd lsn-price">
                $50
              </div>
              <div class="col-2 col-md-2 brd">
                <button class="btn btn-sm btn-danger">X</button>
              </div>
            </div>
            <div class="row">
              <div class="col-3 col-md-4 brd">
                <span class="lsn-date">
                  2021-1-9 9:30
                </span>
              </div>
              <div class="col-3 col-md-3 brd">
                <span class="label-item">
                  Rider:
                </span>
                <span class="board-name">
                  Mitch
                </span>
              </div>
              <div class="col-2 col-md-2 brd lsn-length">
                Half Day
              </div>
              <div class="col-2 col-md-1 brd lsn-price">
                $50
              </div>
              <div class="col-2 col-md-2 brd">
                <button class="btn btn-sm btn-danger">X</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default ListLessons;
