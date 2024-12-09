export default function Footer() {
  return (
    <footer >
        <div style={{ width: "100vw", backgroundColor: "#fbfbfb" }}>
    <div className="container border-top" style={{ backgroundColor: "#fbfbfb" }}>
      <div className="row mt-5 footer1 text-muted">
        {/* column 1 */}

        <div className="col ">
          <div className="footer-logo mb-3">
            <img style={{ width: "55%" }} src="image/logo.svg" alt="" />
          </div>
          <p style={{ fontSize: "13px", color: "#666666" }}>
            © 2010 - 2024, Zerodha Broking Ltd. <br />
            All rights reserved.
          </p>
          <ul className="social p-0">
            <li>
              <a href="">
                <i class="fa-brands fa-x-twitter"></i>
              </a>
            </li>

            <li>
              <a href="">
              <i class="fa-brands fa-square-facebook"></i>
              </a>
            </li>

            <li>
              <a href="">
              <i class="fa-brands fa-instagram"></i>
              </a>
            </li>

            <li>
              <a href="">
              <i class="fa-brands fa-linkedin-in"></i>
              </a>
            </li>
          </ul>
          <hr className="m-0" style={{opacity:"8%"}} />

        <ul className="social p-0 mt-2">
          <li>
            <a href="">
            <i class="fa-brands fa-youtube"></i>
            </a>
          </li>

          <li>
            <a href="">
            <i class="fa-brands fa-whatsapp"></i>
            </a>
          </li>

          <li>
            <a href="">
            <i class="fa-brands fa-telegram"></i>
            </a>
          </li>
        </ul>

        </div>

        {/* column 2 - Company */}

        <div className="col company">
          <ul>
            <li className="nav-head">Company</li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Products</a>
            </li>
            <li>
              <a href="">Referral programme</a>
            </li>
            <li>
              <a href="">Careers</a>
            </li>
            <li>
              <a href="">Zerodha.tech</a>
            </li>
            <li>
              <a href="">Press & media</a>
            </li>
            <li>
              <a href="">Zerodha Cares (CSR)</a>
            </li>
          </ul>

          {/* column-3 support */}
        </div>
        <div className="col support">
          <ul>
            <li className="nav-head">Support</li>
            <li>
              <a href="">Contact us</a>
            </li>
            <li>
              <a href="">Support portal</a>
            </li>
            <li>
              <a href="">Z-Connect blog</a>
            </li>
            <li>
              <a href="">List of charges</a>
            </li>
            <li>
              <a href="">Downloads & resources</a>
            </li>
            <li>
              <a href="">Videos</a>
            </li>
            <li>
              <a href="">Market overview</a>
            </li>
            <li>
              <a href="">How to file a complaint?</a>
            </li>
            <li>
              <a href="">Status of your complaints</a>
            </li>
          </ul>
        </div>

        {/* column 4- account */}
        <div className="col">
          <ul>
            <li className="nav-head">Account</li>
            <li>
              <a href="">Open an account</a>
            </li>
            <li>
              <a href="">Fund transfer</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="row mt-5 footer2">
        <p>
          Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
          no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
          Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading
          through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI
          Registration no.: INZ000038238 Registered Address: Zerodha Broking
          Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public
          School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For
          any complaints pertaining to securities broking please write to &nbsp;
          <a href="">complaints@zerodha.com</a>, for DP related to <a href="">dp@zerodha.com</a>. Please
          ensure you carefully read the Risk Disclosure Document as prescribed
          by SEBI | ICF
        </p>

        <p>
          Procedure to file a complaint on SEBI SCORES: Register on SCORES
          portal. Mandatory details for filing complaints on SCORES: Name, PAN,
          Address, Mobile Number, E-mail ID. Benefits: Effective Communication,
          Speedy redressal of the grievances
        </p>

        <p>
          <a  href="">
            Smart Online Dispute Resolution
          </a>{" "}
          &nbsp; |
          <a  href="">
            {" "}
            Grievances Redressal Mechanism
          </a>
        </p>

        <p>
          Investments in securities market are subject to market risks; read all
          the related documents carefully before investing.
        </p>

        <p>
          Attention investors: 1) Stock brokers can accept securities as margins
          from clients only by way of pledge in the depository system w.e.f
          September 01, 2020. 2) Update your e-mail and phone number with your
          stock broker / depository participant and receive OTP directly from
          depository on your e-mail and/or mobile number to create pledge. 3)
          Check your securities / MF / bonds in the consolidated account
          statement issued by NSDL/CDSL every month.
        </p>

        <p>
          "Prevent unauthorised transactions in your account. Update your mobile
          numbers/email IDs with your stock brokers. Receive information of your
          transactions directly from Exchange on your mobile/email at the end of
          the day. Issued in the interest of investors. KYC is one time exercise
          while dealing in securities markets - once KYC is done through a SEBI
          registered intermediary (broker, DP, Mutual Fund etc.), you need not
          undergo the same process again when you approach another
          intermediary." Dear Investor, if you are subscribing to an IPO, there
          is no need to issue a cheque. Please write the Bank account number and
          sign the IPO application form to authorize your bank to make payment
          in case of allotment. In case of non allotment the funds will remain
          in your bank account. As a business we don't give stock tips, and have
          not authorized anyone to trade on behalf of others. If you find anyone
          claiming to be part of Zerodha and offering such services, please &nbsp;
           <a href="">create a ticket here</a>.
        </p>
      </div>
    </div>
    </div>
    </footer>
  );
}
