import React, { Component } from 'react';

class ListLessons extends Component {
  render() {
    const listItems = this.props.lessons.map(item => (
      <div>{item.boarderName}</div>
    ));

    return (
      <div className="lesson-list item-list mb-3">
        {this.props.lessons.map(item => (
          <div className="board-item col media py-3">
            <div className="mr-3">
              <button className="board-delete btn btn-sm btn-danger">X</button>
            </div>

            <div className="board-info media-body">
              <div className="board-head d-flex">
                <span className="board-name">Boarder Name</span>
                <span className="lsn-date ml-auto">Lesson Date</span>
              </div>
              <div className="lsn-length">Lesson Length</div>
            </div>

          </div>
        ))}
      </div>

    );
  }
}

export default ListLessons;
