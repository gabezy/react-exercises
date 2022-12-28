import React from "react";
import { Link } from "react-router-dom";
import Head from "./Head";
import styles from "./Products.module.css";

function Products() {
  const [products, setProducts] = React.useState(null);
  React.useEffect(() => {
    fetch("https://ranekapi.origamid.dev/json/api/produto")
      .then((r) => r.json())
      .then((json) => setProducts(json));
  }, []);

  if (!products) return null;
  return (
    <section className={`${styles.productsContainer} animeLeft`}>
      <Head title="Ranek" description="Home" />
      {products.map((p) => (
        <Link to={`product/${p.id}`} key={p.id} className={styles.link}>
          <div className={styles.product}>
            <img src={p.fotos[0].src} alt={p.fotos[0].titulo} />
            <h1 className={styles.name}>{p.nome}</h1>
          </div>
        </Link>
      ))}
    </section>
  );
}

export default Products;
