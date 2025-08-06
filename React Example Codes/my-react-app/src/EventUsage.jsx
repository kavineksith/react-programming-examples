function Football() {
  const shoot = (a, b) => {
    alert(b.type);
    /*
      'b' represents the React event that triggered the function,
      in this case the 'click' event
      */
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 text-center">
          <button
            onClick={(event) => shoot("Goal!", event)}
            className="btn btn-primary btn-lg"
          >
            Take the shot!
          </button>
          <p className="mt-3 text-muted">
            Click the button to see the event type
          </p>
        </div>
      </div>
    </div>
  );
}

export default Football;