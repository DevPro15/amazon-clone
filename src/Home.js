import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />
      <div className="home__row">
        <Product
          id={12321341}
          title="The Lean startup: How Constant Inovation Creates Redically Succesful Business Paperback"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
        />
        <Product
          id={45454532}
          title="Prestige PRP4 Pressure Cooker, 4 L, Silver"
          price={45.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/71rs3Xde80S._AC_SL1500_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id={8297480}
          title="Gibson Home Rockaway 12-Piece Dinnerware Set Service for 4, Grey Matte -"
          price={88.96}
          rating={2}
          image="https://m.media-amazon.com/images/I/71awztfrCUL._AC_SS450_.jpg"
        />
        <Product
          id={38924209}
          title="HP 14 Laptop - 10th Gen Intel Core i3-1005G1 Processor 1.2GHz 4GB DDR4 2666 SDRAM 128GB SSD 14-dq1033cl"
          price={410.96}
          rating={4}
          image="https://m.media-amazon.com/images/I/61TRyx8TzuL._AC_SX355_.jpg"
        />
        <Product
          id={38721398}
          title="Apple iPad (5th Generation) Wi-Fi, 128GB - Space Gray (Renewed)"
          price={299.96}
          rating={3}
          image="https://m.media-amazon.com/images/I/81gd3uyxc3L._AC_SY355_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id={2743021}
          title="Samsung UN55RU7300FXZA Curved 55-Inch 4K UHD 7 Series Ultra HD Smart TV with HDR and Alexa Compatibility (2019 Model)"
          price={999.96}
          rating={4}
          image="https://m.media-amazon.com/images/I/51gnTCiC1BL._AC_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
