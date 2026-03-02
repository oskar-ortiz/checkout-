export default function Home() {
  return (
    <div className="checkout-page">
      <section className="checkout-hero">
        <div className="hero-inner">
          <div className="hero-top-row">
            <button className="back-link" type="button" aria-label="Go back">
              <span aria-hidden="true">&#8592;</span> Go Back
            </button>
            <div className="brand-mark">2019</div>
            <button className="menu-link" type="button" aria-label="Open menu">
              &#9776;
            </button>
          </div>

          <div className="steps-bar" role="navigation" aria-label="Checkout steps">
            <div className="step-item step-current">
              <span className="step-dot">&#10003;</span>
              <span>Personal details</span>
            </div>
            <div className="step-item">
              <span className="step-dot">2</span>
              <span>Order details</span>
            </div>
            <div className="step-item">
              <span className="step-dot">3</span>
              <span>Payment</span>
            </div>
            <div className="step-item">
              <span className="step-dot">4</span>
              <span>Confirmation</span>
            </div>
            <button className="steps-back" type="button" aria-label="Previous step">
              <span aria-hidden="true">&#8592;</span> Previous step
            </button>
          </div>
        </div>
      </section>

      <main className="checkout-content" aria-label="Checkout information">
        <section className="order-card">
          <header className="card-header">
            <h2>Order items</h2>
            <button type="button" className="edit-link">
              &#9998; Edit shopping cart
            </button>
          </header>

          <article className="order-row">
            <div className="product-visual product-visual-case" aria-hidden="true" />
            <div className="product-info">
              <h3>Silicone Case for Iphone 7</h3>
              <p>Product color: Midnight Blue, Turquoise Blue</p>
              <p>Quantity: 2 items</p>
            </div>
            <div className="price-block">
              <strong>&#8364; 36.40</strong>
              <span>&#8364; 18.20 per item</span>
            </div>
          </article>

          <article className="order-row">
            <div className="product-visual product-visual-glass" aria-hidden="true" />
            <div className="product-info">
              <h3>Tempered glass for Iphone</h3>
              <p>Size: Iphone 7, Iphone 8</p>
              <p>Quantity: 4 items</p>
            </div>
            <div className="price-block">
              <strong>&#8364; 20.00</strong>
              <span>&#8364; 5.00 per item</span>
            </div>
          </article>

          <article className="order-row">
            <div className="product-visual product-visual-glass" aria-hidden="true" />
            <div className="product-info">
              <h3>Tempered glass for Iphone</h3>
              <p>Size: Iphone 7, Iphone 8</p>
              <p>Quantity: 4 items</p>
            </div>
            <div className="price-block">
              <strong>&#8364; 20.00</strong>
              <span>&#8364; 5.00 per item</span>
            </div>
          </article>

          <button className="discount-link" type="button">
            Have discount code? Click to enter it.
          </button>
        </section>

        <aside className="checkout-side">
          <section className="summary-card">
            <h2>Summary</h2>
            <p className="summary-copy">
              The total cost consist of the tax, insurance and the delivery charge.
            </p>

            <div className="summary-list">
              <div>
                <span>Subtotal</span>
                <strong>&#8364; 56.40</strong>
              </div>
              <div>
                <span>Delivery</span>
                <strong>FREE</strong>
              </div>
              <div>
                <span>Tax</span>
                <strong>&#8364; 11.84</strong>
              </div>
              <div>
                <span>Insurance</span>
                <strong>&#8364; 7.00</strong>
              </div>
            </div>

            <div className="summary-total">
              <span>TOTAL:</span>
              <strong>&#8364; 75.24</strong>
            </div>
          </section>

          <button className="delivery-card" type="button" aria-label="Select delivery">
            <span>Delivery</span>
            <span className="plus">+</span>
          </button>

          <button className="next-step-button" type="button">
            Next step
          </button>
        </aside>
      </main>

      <section className="bottom-features">
        <div className="feature-item">
          <span className="feature-icon" aria-hidden="true">
            &#128274;
          </span>
          <h3>Your information is Safe</h3>
          <p>The total cost consist of the tax, insurance and the delivery charge.</p>
        </div>
        <div className="feature-item">
          <span className="feature-icon" aria-hidden="true">
            &#128737;
          </span>
          <h3>Secure checkout</h3>
          <p>The total cost consist of the tax, insurance and the delivery charge.</p>
        </div>
        <div className="feature-item">
          <span className="feature-icon" aria-hidden="true">
            &#127911;
          </span>
          <h3>24/7 Support</h3>
          <p>The total cost consist of the tax, insurance and the delivery charge.</p>
        </div>
      </section>
    </div>
  );
}