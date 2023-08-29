function Landing(props) {
  return (
    <div id="carouselExampleIndicators" class="carousel slide">
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="images/contact-image.png" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img
            src="images/section3-image.png"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img src="images/slider-1.png" class="d-block w-100" alt="..." />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

    // <div class="accordion" id="accordionExample">
    //   <div class="accordion-item">
    //     <h2 class="accordion-header">
    //       <button
    //         class="accordion-button"
    //         type="button"
    //         data-bs-toggle="collapse"
    //         data-bs-target="#collapseOne"
    //         aria-expanded="true"
    //         aria-controls="collapseOne"
    //       >
    //         Accordion Item #1
    //       </button>
    //     </h2>
    //     <div
    //       id="collapseOne"
    //       class="accordion-collapse collapse show"
    //       data-bs-parent="#accordionExample"
    //     >
    //       <div class="accordion-body">
    //         <strong>This is the first item's accordion body.</strong> It is
    //         shown by default, until the collapse plugin adds the appropriate
    //         classes that we use to style each element. These classes control the
    //         overall appearance, as well as the showing and hiding via CSS
    //         transitions. You can modify any of this with custom CSS or
    //         overriding our default variables. It's also worth noting that just
    //         about any HTML can go within the <code>.accordion-body</code>,
    //         though the transition does limit overflow.
    //       </div>
    //     </div>
    //   </div>
    //   <div class="accordion-item">
    //     <h2 class="accordion-header">
    //       <button
    //         class="accordion-button collapsed"
    //         type="button"
    //         data-bs-toggle="collapse"
    //         data-bs-target="#collapseTwo"
    //         aria-expanded="false"
    //         aria-controls="collapseTwo"
    //       >
    //         Accordion Item #2
    //       </button>
    //     </h2>
    //     <div
    //       id="collapseTwo"
    //       class="accordion-collapse collapse"
    //       data-bs-parent="#accordionExample"
    //     >
    //       <div class="accordion-body">
    //         <strong>This is the second item's accordion body.</strong> It is
    //         hidden by default, until the collapse plugin adds the appropriate
    //         classes that we use to style each element. These classes control the
    //         overall appearance, as well as the showing and hiding via CSS
    //         transitions. You can modify any of this with custom CSS or
    //         overriding our default variables. It's also worth noting that just
    //         about any HTML can go within the <code>.accordion-body</code>,
    //         though the transition does limit overflow.
    //       </div>
    //     </div>
    //   </div>
    //   <div class="accordion-item">
    //     <h2 class="accordion-header">
    //       <button
    //         class="accordion-button collapsed"
    //         type="button"
    //         data-bs-toggle="collapse"
    //         data-bs-target="#collapseThree"
    //         aria-expanded="false"
    //         aria-controls="collapseThree"
    //       >
    //         Accordion Item #3
    //       </button>
    //     </h2>
    //     <div
    //       id="collapseThree"
    //       class="accordion-collapse collapse"
    //       data-bs-parent="#accordionExample"
    //     >
    //       <div class="accordion-body">
    //         <strong>This is the third item's accordion body.</strong> It is
    //         hidden by default, until the collapse plugin adds the appropriate
    //         classes that we use to style each element. These classes control the
    //         overall appearance, as well as the showing and hiding via CSS
    //         transitions. You can modify any of this with custom CSS or
    //         overriding our default variables. It's also worth noting that just
    //         about any HTML can go within the <code>.accordion-body</code>,
    //         though the transition does limit overflow.
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Landing;
