function Pricing() {
  return (
    <div className="container pb-5">
      <div className="row">
        <div className="col-4">
          <h2 className="mb-3">Unbeatable pricing</h2>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
              See pricing  <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
        </div>
        <div className="col-2"></div>
        <div className="col-6">

          <div className="row text-center ">
            <div className="col border p-3">
              <h2 className="mb-3">₹0</h2>
              <p>Free equity delivery and <br /> direct mutual fund</p>
            </div>
            <div className="col border p-3">
              <h2 className="mb-3">₹20</h2>
              <p>intraday and F&O</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Pricing;
