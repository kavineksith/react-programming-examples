function Products() {
  const products = [
    { id: 1, name: "React Pro", price: "$99" },
    { id: 2, name: "Bootstrap UI Kit", price: "$49" },
    { id: 3, name: "Router Package", price: "$29" },
  ];

  return (
    <div className="table-responsive">
      <table className="table table-striped table-hover shadow">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Product Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Products;
