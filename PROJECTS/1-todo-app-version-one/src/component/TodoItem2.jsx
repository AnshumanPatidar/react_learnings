function TodoItem2() {
  let todoName = 'Go to college';
  let todoDate = '22/2/2024';


  return (
    <div class="container">
      <div class="row my-row">
        <div class="col-6">
          {todoName}
        </div>
        <div class="col-4 my-row">
          {todoDate}
        </div>
        <div class="col-2 my-row">
          <button type="button" class="btn btn-danger">Delete</button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem2;