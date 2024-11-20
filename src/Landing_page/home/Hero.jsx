export default function Hero() {
  return (
    <div className="hero-container">
      <div className="row p-5 text-center" >
        <img className="mb-5" src="image/homeHero.png" alt="hero image" />
        <h1 className="mt-4">Invest in everything</h1>
        <p>
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <button className="p-2 btn btn-primary fs-5 mb-5" style={{width : "20%" , margin : "0 auto"}}>sign now </button>
      </div>
    </div>
  );
}
