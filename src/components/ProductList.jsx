import { motion } from 'framer-motion'
import './ProductList.css'

function ProductList({ products }) {
  if (!products || products.length === 0) {
    return <div className="no-products-msg">No products available</div>
  }

  return (
    <div className="product-list">
      <h4 className="products-title">🛍️ Recommended Products:</h4>
      <div className="products">
        {products.map((product, index) => (
          <motion.a
            key={index}
            href={product.url}
            target="_blank"
            rel="noopener noreferrer"
            className="product-item"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {product.image && (
              <img src={product.image} alt={product.title} className="product-image" />
            )}
            <div className="product-info">
              <p className="product-name">{product.title}</p>
              {product.price && <p className="product-price">{product.price}</p>}
              {product.rating && <p className="product-rating">⭐ {product.rating}</p>}
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  )
}

export default ProductList
