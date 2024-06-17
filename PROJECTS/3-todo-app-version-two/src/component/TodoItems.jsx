function TodoItems({todoDate , todoName}) {


  return (
    <div className="container">
      <div className="row my-row">
        <div className="col-6">
          {todoName}
        </div>
        <div className="col-4 my-row">
          {todoDate}
        </div>
        <div className="col-2 my-row">
          <button type="button" className="btn btn-danger">Delete</button>
        </div>
      </div>
    </div>
  );

}

export default TodoItems;