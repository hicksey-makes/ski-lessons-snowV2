<span className="lsn-date text-white">
<Moment
  date={this.props.lsns.lessonDate}
  format="MM-DD"
/>
<Moment
  date={this.props.lsns.lsnTime}
  format="hh:mm a"
/>
</span>


<form className="" onSubmit={(event) => {this.props.onFormSubmit(event); this.props.toggleAdd(); this.props.onLessonAdd(this.props.selectedLsn); }}>
  <div className="form-group form-row mb-md-5">
    <label className="col-md-2 mt-2 text-md-right" htmlFor="riderName">Rider Name:</label>
    <div className="col-md-5 mt-2 mt-md-0 mb-2">
      <input type="text" className="form-control" name="riderName" id="riderName" value={this.props.riderName} onChange={event => this.props.onRiderAdd(event)} placeholder="Rider's Name" />
    </div>
    <label className="col-md-2 mt-2 text-md-right" htmlFor="lsnLength">Instructor:</label>
    <h5 className="col-md-3 mt-0 mt-md-2 font-italic cool">
      {this.props.selectedLsn.instructorName}
    </h5>
  </div>
  <div className="form-group form-row mb-md-5 mb-1">
    <label className="col-md-1 ml-md-4 mt-0 mt-md-2 text-md-right" htmlFor="lsnType">Type:</label>
    <h5 className="col-md-2 mt-0 mt-md-2 font-italic cool">
      {this.props.selectedLsn.lsnType}
    </h5>
      <div className="col-6 col-md-2 mb-2 mt-4 mt-md-1 ml-md-0 ml-1">
        <button type="button" className="btn btn-success add-btn ml-md-2 ml-lg-5" disabled={this.props.lessonLength === "Full Day"} active={this.props.lessonLength === "Full Day"} href="#" id="lsnLength" value="Full Day" onClick={event => this.props.setFullPrice(event)}>Full Day</button>
      </div>
      <div className="col-8 col-md-3 mb-2 mt-md-1 ml-1">
        <button type="button" className="btn btn-success add-btn" disabled={this.props.lessonLength === "Half Day"} active={this.props.lessonLength === "Half Day"} href="#" id="lsnLength" value="Half Day" onClick={(event) => this.props.setHalfPrice(event)}>Half Day (2.5 hr)</button>
      </div>
    <label className="ml-md-2 col-md-1 mt-3 mt-md-2 text-md-right">Price:</label>
    <div className=" col-md-2  mt-md-2 text-dark">
    <h5 className=" font-italic cool font-weight-bold">
    $ {Math.round(this.props.selectedLsn.lessonCost)}
    </h5>
    </div>
  </div>
  <div className="form-group form-row mb-md-5">
  <label className="col-md-1 ml-md-4 mt-2 mt-md-0 text-md-right" htmlFor="lsnDate">Date:</label>
  <div className="col-md-3 mt-md-0 ">
    <mark className="p-md-1 text-danger font-weight-bold">
    <Moment
      date={this.props.selectedLsn.lessonDate}
      format="ddd MMM DD"
    />
    </mark>
  </div>
  <label className="col-md-2 mt-3 mt-md-0 text-md-right " htmlFor="lsnTime">Time:</label>
  <div className="col-md-4 mt-md-0">
    <mark className="p-md-1 text-danger font-weight-bold">
    <Moment
      date={this.props.selectedLsn.lsnTime}
      format="hh:mm a"
    />
    </mark>
    </div>
  </div>
  <div className="form-group form-row ">
    <label className="col-md-2 mt-2 mt-md-0 ml-md-5 mb-3" htmlFor="lsnNotes">Lesson Notes:</label>
    <div className="col-md-8 mb-2 mb-md-0">
      <textarea name="lsnNotes" className="form-control" id="lsnNotes" value={this.props.lessonNotes} onChange={event => this.props.onNotesChange(event)} rows="5" cols="50" placeholder="Lesson Notes" />
    </div>
  </div>
  <div className="form-group form-row">
    <div className="col-md-12">
      <button className="btn btn-lg btn-primary btn-danger mt-2 ml-md-auto mr-md-0 mx-auto d-block" type="submit">Reserve
      </button>
    </div>
  </div>
</form>

const [validated, setValidated] = useState(false);
const validateSubmit= (event) => {
  const form = event.currentTarget;
  console.log(form.checkValidity());
  if (form.checkValidity() === "false") {
    event.preventDefault();
    event.stopPropagation();
  }

  setValidated(true);

}


<Col md={4} className="mb-5">
  <div className="">
    <Form.Label>Type: </Form.Label>
    <span className="indigo fs-4 fst-italic text-opacity-75"> {props.selectedLsn.lsnType}</span>
  </div>
</Col>
