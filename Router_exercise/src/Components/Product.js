import React from "react";
import { useParams } from "react-router-dom";
import Head from "./Head";
import styles from "./Product.module.css";

function Product() {
  const [product, setProduct] = React.useState(null);
  const [loading, setLoading] = React.useState(null);
  const [error, setError] = React.useState(null);
  const { id } = useParams();

  React.useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const r = await fetch(
          `https://ranekapi.origamid.dev/json/api/produto/${id}`
        );
        const json = await r.json();
        setProduct(json);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) return <div className="loading"></div>;
  if (error) return <p>{error}</p>;
  if (!product) return null;
  return (
    <main className={`${styles.container} animeLeft`}>
      <Head
        title={`Ranek | ${product.nome}`}
        description={`Ranek | ${product.nome}`}
      />
      <div className={styles.ProductContainer} key={product.id}>
        <div className={styles.productImages}>
          {product.fotos.map((foto) => (
            <img key={foto.src} src={foto.src} alt={foto.titulo} />
          ))}
        </div>
        <div className={styles.productContent}>
          <h1 className={styles.name}>{product.nome}</h1>
          <span className={styles.price}>R$ {product.preco}</span>
          <p className={styles.description}>{product.descricao}</p>
        </div>
      </div>
    </main>
  );
}

export default Product;
