export default function Awards() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col p-2">
          <img style={{width:"80%"}} src="image/largestBroker.svg" alt="" />
        </div>
        <div className="col p-2">
          <h1 className="mt-4" >Largest stock broker in India</h1>
          <p className="mb-5">
            2+ million Zerodha client contribute to over 15% of all retail order
            volumes in india by trading and investing in :{" "}
          </p>
          <div className="row ">
            <div className="col">
              <ul>
                <li>Future and options</li>
                <li>Commodity derivatives</li>
                <li>Currency derivatives</li>
              </ul>
            </div>
            <div className="col">
              <ul>
                <li>Stocks & Ipos </li>
                <li>Direct mutual funds</li>
                <li>Bonds and Govt securties </li>
              </ul>
            </div>
          </div>
          <img src="image/pressLogos.png" alt="" />
        </div>
      </div>
    </div>
  );
}
