import React, { Component } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import ListLesson from './ListLesson.js';

class ListLessons extends Component {
  render() {
    const listItems = this.props.lessons.map(item => (
      <div>{item.boarderName}</div>
    ));

    return ( <>
      <div className="bg-secondary text-white text-center py-3 rounded" onClick={this.props.toggleAdd}>
        <span className={(this.props.formDisplay ? '' : 'show-hide')}>
        <FaPlus  />
        </span>
        <span className={(this.props.formDisplay ? 'show-hide' : '')}>
        <FaMinus  />
        </span>
        <h6 className="d-inline ml-2 text-monospace">Availability:</h6>
      </div>
      <div className={
        'lesson-list item-list mb-3 ' +
        (this.props.formDisplay ? 'remove-lsn-list' : '')
      }>
        {this.props.lessons.map(item => {
          return <ListLesson  key={item.lsnId} lsns={item} toggleAdd={this.props.toggleAdd} reserveLsn={this.props.reserveLsn}  />
        })}
      </div>
    </>);
  }
}

export default ListLessons;
