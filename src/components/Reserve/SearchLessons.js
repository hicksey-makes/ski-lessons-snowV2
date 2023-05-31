import React, { Component } from 'react';

class SearchLessons extends Component {
  render() {

    return (
        <div className="row row-margin justify-content-center">
          <div className="col-md-12">
            <div className="input-group">
              <input type="text" className="form-control" onFocus={() => this.props.hideForm()} onChange={e => this.props.searchLsns(e.target.value)} />
              <div className="input-group-append">
                <button className="btn btn-info dropdown-toggle" data-bs-toggle="dropdown" type="button">Sort by: <span className="caret"/>
                </button>
                <div className="dropdown-menu">
                  <button className={
                    'dropdown-item ' +
                    (this.props.orderBy === 'lessonDate' ? 'active' : '')} href="#" onClick={(e) => this.props.changeOrder('lessonDate', this.props.orderDir)}>
                    Lesson Date
                  </button>
                  <button className={
                    'dropdown-item ' +
                    (this.props.orderBy === 'instructorName' ? 'active' : '')} href="#" onClick={(e) => this.props.changeOrder('instructorName', this.props.orderDir)}>
                    Instructor
                  </button>
                  <button className={
                    'dropdown-item ' +
                    (this.props.orderBy === 'lessonCost' ? 'active' : '')} href="#" onClick={(e) => this.props.changeOrder('lessonCost', this.props.orderDir)}>
                    Price
                  </button>
                  <div className="dropdown-divider">
                  </div>
                  <button className={
                    'dropdown-item ' +
                    (this.props.orderDir === 'asc' ? 'active' : '')} href="#" onClick={e => this.props.changeOrder(this.props.orderBy, 'asc')}>
                    Asc
                  </button>
                  <button className={
                    'dropdown-item ' +
                    (this.props.orderDir === 'des' ? 'active' : '')} href="#" onClick={e => this.props.changeOrder(this.props.orderBy, 'des')}>
                    Dec
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default SearchLessons;
