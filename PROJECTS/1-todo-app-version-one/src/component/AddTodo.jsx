function AddTodo() {
  return <div class="container text-center">
    <div class="row my-row">
      <div class="col-6">
        <input type="text" placeholder="Enter todo here" />
      </div>
      <div class="col-4 my-row">
        <input type="date" />
      </div>
      <div class="col-2 my-col">
        <button type="button" class="btn btn-success my-button">Add</button>
      </div>
    </div>
  </div>
}

export default AddTodo;