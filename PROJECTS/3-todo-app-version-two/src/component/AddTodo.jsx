function AddTodo() {
  
  return <div className="container text-center">
    <div className="row my-row">
      <div className="col-6">
        <input type="text" placeholder="Enter todo here" />
      </div>
      <div className="col-4 my-row">
        <input type="date" />
      </div>
      <div className="col-2 my-col">
        <button type="button" className="btn btn-success my-button">Add</button>
      </div>
    </div>
  </div>
}

export default AddTodo;