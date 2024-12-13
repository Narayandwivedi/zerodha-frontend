import Hero from "./Hero";
import LeftImageSec from "./LeftImageSec";
import RightImageSec from "./RightImageSec";
import Universe from "./Universe";
export default function productPage() {
  return (
    <div className="Product">
      <Hero />
      <LeftImageSec
        imgUrl={"image/kite.png"}
        heading={"Kite"}
        description={
          "Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        }
        tryDemo={"https://chatgpt.com/"}
        learnMore={"https://chatgpt.com/"}
      />

      <RightImageSec
        heading={"Console"}
        description={
          "The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        }
        learnMore={"https://chatgpt.com/"}
        imgUrl={"image/console.png"}
      />

      <LeftImageSec
        imgUrl={"image/coin.png"}
        heading={"Coin"}
        description={
          "Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        }
        tryDemo={"https://chatgpt.com/"}
        learnMore={"https://chatgpt.com/"}
      />

      <RightImageSec
        heading={"Kite Connect Api"}
        description={
          "Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        }
        learnMore={"https://chatgpt.com/"}
        imgUrl={"image/kiteconnect.png"}
      />

      <LeftImageSec
        imgUrl={"image/varsity.png"}
        heading={"Varsity mobile   "}
        description={
          "Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        }
        tryDemo={"https://chatgpt.com/"}
        learnMore={"https://chatgpt.com/"}
      />
      <Universe/>
    </div>
  );
}
