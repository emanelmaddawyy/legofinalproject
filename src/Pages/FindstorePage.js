import { Component } from 'react';
import {Link} from 'react-router-dom';

class FindstorePage extends Component {
  state = {
    cards: [
      {
        img:
          "https://www.lego.com/cdn/cs/catalog/assets/blt1eabe713e84ad441/1/Capture.PNG?crop=16:9&disable=upscale&width=480&quality=50",
        text:
          "LEGO® VIPs ONLY! FREE EXCLUSIVE CHARIOT ONLY WITH PURCHASE OF 10276 COLOSSEUM!",
      },
      {
        img:
          "https://www.lego.com/cdn/cs/catalog/assets/blt976cf64f8ed41721/1/Ice_Skating_Rink.jpg?crop=16:9&disable=upscale&width=480&quality=50",
        text: "Free Exclusive Ice Skating Rink with purchases over $150!",
      },
      {
        img:
          "https://www.lego.com/cdn/cs/catalog/assets/blt591881644a6d1fae/1/Olaf.png?crop=16:9&disable=upscale&width=480&quality=50",
        text:
          "In Stores Only! Free Olaf’s Traveling Sleigh with Frozen purchases over $50!",
      },
      {
        img:
          "https://www.lego.com/cdn/cs/catalog/assets/blt5cf781a6220e29d2/1/BB8.png?crop=16:9&disable=upscale&width=480&quality=50",
        text: "In Stores Only! Free BB-8 with Star Wars™ purchases over $40!",
      },
      {
        img:
          "https://www.lego.com/cdn/cs/catalog/assets/blt65a3ca4c2f8cdbc6/1/train.jpg?crop=16:9&disable=upscale&width=480&quality=50",
        text: "In Stores Only! Free Train with purchases over $40!",
      },
      {
        img:
          "https://www.lego.com/cdn/cs/catalog/assets/blte4d3c9847af42d36/1/VIP_Gift_Set.jpg?crop=16:9&disable=upscale&width=480&quality=50",
        text: "Free Holiday Gift Set with VIP purchases over $40!",
      },
    ],
  };
  render() {
    const { cards } = this.state;
    return (
      <>
        <div className="container">
          <div className="info mt-4">
            <div className="info__body">
              <i className="fas fa-info-circle info__icon"></i>
              <div className="info__content">
                Most LEGO® Stores are now open. We are complying with local
                regulations and safety guidelines to keep our visitors and team
                members safe and healthy. Please check your local store page for
                current business hours or call the store before you visit. Thank
                you for your patience and support!
              </div>
            </div>
          </div>
        </div>
{/* 
        <div className="search__container">
          <div className="search">
            <div className="search__content">
              <div className="search__content__items">
                <h3 className="search__header">Find a LEGO® Store</h3>
                <div className="input-group mb-3">
                  <div
                    className="input-group md-form form-sm form-2 pl-0"
                    style={{
                      backgroundColor: "white",
                      height: "50px",
                      borderRadius: "0",
                    }}
                  >
                    <input
                      className="form-control my-0 py-1 amber-border"
                      type="text"
                      placeholder="Search by city, zipcode or place of interest"
                      aria-label="Search"
                      style={{
                        backgroundColor: "white",
                        borderRight: "0",
                        height: "50px",
                        borderRadius: "0",
                      }}
                    />
                    <div
                      className="input-group-append"
                      style={{
                        backgroundColor: "white",
                        borderRight: "0",
                        borderRadius: "0",
                      }}
                    >
                      <span
                        className="input-group-text amber lighten-3"
                        id="basic-text1"
                        style={{
                          backgroundColor: "white",
                          borderLeft: "0",
                          cursor: "pointer",
                          borderRadius: "0",
                        }}
                      >
                        <a href="!#" style={{ color: "#333" }}>
                          <i
                            className="fas fa-search text-grey"
                            aria-hidden="true"
                            style={{ backgroundColor: "white" }}
                          />
                        </a>
                      </span>
                    </div>
                  </div>
                  <div className="Btns__Group">
                    <a
                      href="!#"
                      className="btn btn-lg btn-secondary button__search1"
                    >
                      View Store Calender
                    </a>
                    <a href="!#" className="btn btn-lg button__search2">
                      View All Stores
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className="cards__content">
          <h3 className="cards__header">What's happening in Stores?</h3>
          <div className="crad__container">
            <div class="row row-cols-1 row-cols-md-3 g-4">
              {cards.map((item, i) => {
                return (
                  <a href="!#" class="col  link-card" key={i}>
                    <div class="card">
                      <img src={item.img} class="card-img-top" alt="..." />
                      <div class="card-body">
                        <p class="card-text card__header">{item.text} </p>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="cal__wrapper">
          <div className="cal__second">
            <img
              className="callll"
              alt="cal-img"
              src="https://www.lego.com//cdn/cs/stores/assets/bltac94ba59b3bb3646/NA_FINAL_DIGITAL_FILES_1492-DEC2020-CAL-NA-US-L.jpg?quality=80&format=pjpg&crop=620,500,x0.1,y0"
            />
          </div>
          <div className="cal__first">
            <div className="cal__first__content">
              <h3 className="cal__header">Store Calendar</h3>
              <h3 className="cal__txt">See what’s happening this month</h3>
              <div className="btns__download">
                <a href="!#" className="btn__link1">
                  Open to full view
                  <svg
                    width="15"
                    height="15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="svg__1"
                  >
                    <path
                      d="M9.5.0H15v5.5l-1.023-1V2L11 5l-1-1 3-3h-2.5l-1-1zm-4 0H0v5.5l1.023-1V2L4 5l1-1-3-3h2.5l1-1zm0 15H0V9.5l1.023 1V13L4 10l1 1-3 3h2.5l1 1zm4 0H15V9.5l-1.023 1V13L11 10l-1 1 3 3h-2.5l-1 1z"
                      fill="#4a4a4a"
                    ></path>
                  </svg>
                </a>
                <a href="!#" className="btn__link1">
                  Download PDF
                  <svg
                    width="15"
                    height="15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="svg__1"
                  >
                    <path
                      d="M9.5.0H15v5.5l-1.023-1V2L11 5l-1-1 3-3h-2.5l-1-1zm-4 0H0v5.5l1.023-1V2L4 5l1-1-3-3h2.5l1-1zm0 15H0V9.5l1.023 1V13L4 10l1 1-3 3h2.5l1 1zm4 0H15V9.5l-1.023 1V13L11 10l-1 1 3 3h-2.5l-1 1z"
                      fill="#4a4a4a"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="cards__content">
          <h3 className="cards__header">Come Visit Us</h3>
          <div className="crad__container">
            <div class="row row-cols-1 row-cols-md-2 g-4">
              <a href="!#" class="col  link-card">
                <div class="card">
                  <img
                    src="https://www.lego.com/cdn/cs/stores/assets/blt63860f673e937c47/buy-bricks_pick-a-brick.jpg?disable=upscale&width=1440&quality=40&crop=16:9"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <p class="card-text card__header">
                      Earn points when you shop in-store
                    </p>
                  </div>
                </div>
              </a>
              <a href="!#" class="col  link-card">
                <div class="card">
                  <img
                    src="https://www.lego.com/cdn/cs/stores/assets/bltbe926459e13ea8f2/buy-bricks_bricks-pieces.jpg?disable=upscale&width=1440&quality=40&crop=16:9"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <p class="card-text card__header">Come and shop in-store</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default FindstorePage;
