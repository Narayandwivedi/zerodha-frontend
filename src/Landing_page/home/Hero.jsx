
function Hero() {
  return (
<<<<<<< Updated upstream
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <img
          src="image/homeHero.png"
          alt="Hero Image"
          className="mb-5"
        />
        <h1 className="mt-5">Invest in everything</h1>
        <p>
          Online platform to invest in stocks, derivatives, mutual funds, and
          more
        </p>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup Now
        </button>
=======
    <div className="container">
      <div className="row p-5 text-center" >
        <img className="mb-5" src="image/homeHero.png" alt="hero image" />
        <h1 className="mt-4">Invest in everything</h1>
        <p className="fs-5 m-2">
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <button className="p-2 mb-5 mt-4 btn btn-primary fs-5" style={{width : "22%" , margin : "0 auto"}}>sign now </button>
>>>>>>> Stashed changes
      </div>
    </div>
  );
}

export default Hero;