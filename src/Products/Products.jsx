import "./Products.css";

function Products({ data }) {
  return (
    <>
      <section className="card-container">{data}</section>
    </>
  );
}

export default Products;
