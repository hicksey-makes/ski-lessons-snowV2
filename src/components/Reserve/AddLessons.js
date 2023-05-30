import React, { Component } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import Moment from 'react-moment';
import LessonForm from './LessonForm.js';

class AddLessons extends Component {
  render() {

    return (
      <div className={
        'card textcenter mt-3 ' +
        (this.props.formDisplay ? '' : 'add-lesson')
      }>
        <div className="card-header bg-secondary text-white text-center py-3 pointer" onClick={this.props.toggleAdd}>
          <span className={(this.props.formDisplay ? 'show-hide' : '')}>
          <FaPlus  />
          </span>
          <span className={(this.props.formDisplay ? '' : 'show-hide')}>
          <FaMinus  />
          </span>
          <h6 className="d-inline ms-2 font-monospace">Book:</h6>
        </div>

        <div className="card-body" id="book-ptop">
          <LessonForm  onFormSubmit={this.props.onFormSubmit} toggleAdd={this.props.toggleAdd} onLessonAdd={this.props.onLessonAdd} riderName={this.props.riderName} onRiderAdd={this.props.onRiderAdd} riderEmail={this.props.riderEmail} onRiderEChange={this.props.onRiderEChange} selectedLsn={this.props.selectedLsn} lessonLength={this.props.lessonLength} setFullPrice={this.props.setFullPrice} setHalfPrice={this.props.setHalfPrice} lessonNotes={this.props.lessonNotes} onNotesChange={this.props.onNotesChange} />

        </div>
      </div>
    );
  }
}

export default AddLessons;
