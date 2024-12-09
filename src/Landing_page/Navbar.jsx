export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg border-bottom ">
      <div class="container p-2">
        <a class="navbar-brand" href="/">
          <img style={{ width: "21%" }} src="image/logo.svg" alt="" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <form class="d-flex" role="search">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">

              <li class="nav-item">
                <a class="nav-link " aria-current="page" href="/signup">Signup</a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="/about">About</a>
              </li>
              
              <li class="nav-item">
                <a class="nav-link" href="/products">Products</a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#">Pricing</a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#">Support</a>
              </li>

            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}
