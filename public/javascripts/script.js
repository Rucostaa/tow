fetch("http://localhost:5000/api/v1/products")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
