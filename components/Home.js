import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
      <div>

        

        <div id="carouselExampleCaptions" className="carousel slide mb-5 mt-3" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="./img/budapest342499_1280.jpg" className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>Some representative placeholder content for the first slide.</p>
              </div>
            </div>

            <div className="carousel-item">
              <img src="./img/shanghai.jpg" className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>Some representative placeholder content for the second slide.</p>
              </div>
            </div>

            <div className="carousel-item">
              <img src="./img/barpark.jpg" className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>Some representative placeholder content for the third slide.</p>
              </div>
            </div>

          </div>

          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
          
        </div>


        <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Name </label>
          <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Name" />
          <label htmlFor="exampleFormControlInput1" className="form-label">Last Name </label>
          <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Last name" />
          <label htmlFor="exampleFormControlInput1" className="form-label">Phone </label>
          <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="+9 999 22 22" />
          <label htmlFor="exampleFormControlInput1" className="form-label">Email </label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
          <label htmlFor="exampleFormControlInput1" className="form-label">Adress </label>
          <input type="text" className="form-control" id="exampleFormControlInput1" />
          <label htmlFor="exampleFormControlInput1" className="form-label">Web Site </label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label"> About me</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary mb-3">Submit</button>
        </div>

      </div>
    )
  }
}
