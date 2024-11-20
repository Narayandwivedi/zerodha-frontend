export default function Stats() {
  return (
    <div className="stats-container mt-5 p-3">
      <div className="row p-5">
        <div className="col left p-5">
          <h2 className="mb-5">Trust with confidence</h2>
          <h3 >Customer-first always</h3>
          <p className="mb-5">
            That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores
            of equity investments and contribute to 15% of daily retail exchange
            volumes in India.
          </p>
          <h3 >No spam or gimmicks</h3>
          <p className="mb-5">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
          </p>
          <h3>The Zerodha universe</h3>
          <p className="mb-5">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>
          <h3>Do better with money</h3>
          <p>
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>
        <div className="col right p-5">
            <img style={{width:"85%"}} src="image/ecosystem.png" alt="" />
            <div className="text-center">
            <a className="mx-5" href="#">Explore our products <i class="fa-sharp fa-solid fa-arrow-right-long"></i> </a>
            <a href="#">Try Kite demo <i class="fa-sharp fa-solid fa-arrow-right-long"></i></a>
            </div>

        </div>
      </div>
    </div>
  );
}
