function ListGroup() {
  const fruits = ["apple", "banana", "mango", "peach"];

  return (
    <div className="container mt-4">
      <h3 className="mb-3">My Fruits List</h3>
      <div className="list-group">
        {fruits.map((fruit, index) => (
          <div
            key={index}
            className="list-group-item list-group-item-action p-3 mb-2 bg-primary text-white"
          >
            {index + 1}: {fruit}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListGroup;
