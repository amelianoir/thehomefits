import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>✨ The Home Fits ✨</h3>
          <p>Transform your space with dopamine-boosting home improvements</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Privacy</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social">
            <a href="#">Instagram</a>
            <a href="#">TikTok</a>
            <a href="#">Pinterest</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 The Home Fits. All rights reserved. | Amazon Affiliate Links</p>
      </div>
    </footer>
  )
}

export default Footer
