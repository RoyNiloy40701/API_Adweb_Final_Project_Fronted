import React from 'react';
import { Link } from 'react-router-dom';
import '../../'


const HomePage = () => {
     return (
          <div>
         <div>
  <header>
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top ">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src="img/logo.png" alt className="d-inline-block align-text-top" />
          
          </a>
       
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#shoe">Shoes</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#backpack">Backpack</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#subscribe">Subscribe</a>
            </li>
          </ul>
          <ul className="navbar-nav  ">
            <li className="nav-item ">
           
              <Link className="nav-link active d-flex justify-content-end" to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <section className="container ">
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner ">
          <div className="carousel-item  active">
            <div className="row panda-bg-background p-5 d-flex align-items-center">
              <div className="col-lg-7">
                <h1>Cool Dude Headphone</h1>
                <p>This is the best headphone in the world for people who just want to
                  waste time in front of funky world. </p>
                <h1>$420</h1>
                <button className="panda-btn-buynow">Buy Now </button>
              </div>
              <div className="col-lg-5">
                <img src="img/banner-images/headphone.png" className="d-block w-100" alt="..." />
              </div>
            </div>
          </div>
          <div className="carousel-item  ">
            <div className="row panda-bg-background p-5 d-flex align-items-center">
              <div className="col-lg-7">
                <h1>Mega LCD TV For Sports </h1>
                <p>This is the best tv in the world for people who just want to waste time
                  in front of tv. </p>
                <h1>$1200</h1>
                <button className="panda-btn-buynow">Buy Now </button>
              </div>
              <div className="col-lg-5">
                <img src="img/banner-images/tv.png" className="d-block w-100" alt="..." />
              </div>
            </div>
          </div>
          <div className="carousel-item ">
            <div className="row  p-5 panda-bg-background d-flex align-items-center">
              <div className="col-lg-7">
                <h1>X-Box for your living room </h1>
                <p>This is the best x-box in the world for people who just want to waste
                  time in front of fake sports.</p>
                <h1>$600</h1>
                <button className="panda-btn-buynow">Buy Now </button>
              </div>
              <div className="col-lg-5">
                <img src="img/banner-images/xbox.png" className="d-block w-100" alt="..." />
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  </header>
  <main>
    <section className="container my-5 categories">
      <div className="row g-4">
        <div className="col-lg-4 col-md-6 col-12">
          <div className="p-3 border bg-warning d-flex align-items-center justify-content-between rounded-3 ">
            <h1 className="text-white ">Watch</h1>
            <img src="img/categories/watch.png" alt />
          </div>
        </div>
        <div className="col-lg-4  col-md-6 col-12">
          <div className="p-3 border bg-success d-flex align-items-center justify-content-between rounded-3 ">
            <h1 className="text-white">Bag</h1>
            <img src="img/categories/bag.png" alt />
          </div>
        </div>
        <div className="col-lg-4  col-md-6 col-12">
          <div className="p-3 border bg-primary d-flex align-items-center justify-content-between rounded-3 ">
            <h1 className="text-white">Shoes</h1>
            <img src="img/categories/shoes.png" alt />
          </div>
        </div>
      </div>
    </section>
    {/* shoes card  */}
    <section className="container" id="shoe">
      <h2>Shoes</h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        <div className="col ">
          <div className="card shadow-lg border-0 h-100">
            <img src="img/shoes/shoe-1.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Supply 350</h5>
              <p className="card-text">This is a longer card with supporting text below as a
                natural lead-in to additional. </p>
            </div>
            <div className="m-3">
              <button className="panda-btn-buynow">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-lg  h-100 border-0">
            <img src="img/shoes/shoe-2.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Nike 360</h5>
              <p className="card-text">This is a longer card with supporting text below as a
                natural lead-in to additional.</p>
            </div>
            <div className="m-3">
              <button className="panda-btn-buynow">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card  shadow-lg  border-0 h-100">
            <img src="img/shoes/shoe-3.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Red Airmax</h5>
              <p className="card-text">This is a longer card with supporting text below as a
                natural lead-in to additional.</p>
            </div>
            <div className="m-3">
              <button className="panda-btn-buynow">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Backpack  */}
    <section className="container my-5" id="backpack">
      <h2>Backpack</h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        <div className="col ">
          <div className="card shadow-lg border-0 h-100">
            <img src="img/bags/bag-1.png " className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Red Laltu Bag</h5>
              <p className="card-text">This is a wider card with supporting text below as a
                natural lead-in to additional content. This content is a little bit longer.
              </p>
            </div>
            <div className="m-3">
              <button className="panda-btn-buynow">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-lg  h-100 border-0">
            <img src="img/bags/bag-2.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Blue Niltu Bag</h5>
              <p className="card-text">This card has supporting text below as a natural lead-in to
                additional content.</p>
            </div>
            <div className="m-3">
              <button className="panda-btn-buynow">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card  shadow-lg  border-0 h-100">
            <img src="img/bags/bag-3.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Black Kaltu Bag</h5>
              <p className="card-text">This is a wider card with supporting text below as a
                natural lead-in to additional content. This card has even longer content
                than the first to show that equal height action.</p>
            </div>
            <div className="m-3">
              <button className="panda-btn-buynow">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Subscribe  */}
    <section style={{height: 300}} id="subscribe" className=" panda-bg-background container d-flex justify-content-center  align-items-center rounded-3">
      <div>
        <h1>LET'S STAY IN TOUCH</h1>
        <p>Get updates on sales, specials and more
        </p>
        <input type="text" className="form-control" placeholder="You Email" />
        <br />
        <button className="panda-btn-buynow">Submit</button>
      </div>
    </section>
  </main>
  <footer className="mt-5 text-center">
    <p><small>© 2025. Panda Commerce. All rights reserved. Sofia, Bulgaria.</small></p>
  </footer>
</div>

     </div>
     );
};

export default HomePage;