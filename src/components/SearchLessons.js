import React, { Component } from 'react';

class SearchLessons extends Component {
  render() {
    return (
      <form action="/action_page.php">
        <div className="form-group">
          <div className="input-group">
            <input type="text" class="form-control" />
            <div className="input-group-append">
              <button className="btn btn-info dropdown-toggle" data-toggle="dropdown" type="button">Sort by: <span className="caret"/>
              </button>
              <div className="dropdown-menu">
                <button className="dropdown-item" href="#">
                  Lesson Date
                </button>
                <button className="dropdown-item" href="#">
                  Lesson Time
                </button>
                <div className="dropdown-divider">
                </div>
                <button className="dropdown-item" href="#">
                  Asc
                </button>
                <button className="dropdown-item" href="#">
                  Dec
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    )
  }
}

export default SearchLessons;
