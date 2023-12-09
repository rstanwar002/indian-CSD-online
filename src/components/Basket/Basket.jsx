import React, { useContext } from "react";
import "./Basket.css";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import { ProductContext, ProductDispath } from "../Context/ContextProvider";
import BasketItem from "./BasketItem";
import Offer from "./Offer";
import OfferBadge from "./OfferBadge";
import SendProducts from "./SendProducts";

export default function Basket() {
  const { state } = useContext(ProductContext);
  const { dispath } = useContext(ProductDispath);
  return (
    <>
      <div className="favorite_container_linkBar">
        <div className="favorite_linkBar">
          <span>Shopping Cart</span>
          <Link className="favorite_backLink" to={"/"}>
            <HiArrowRight />
            Product Page
          </Link>
        </div>
        {state.basket.length > 0 && (
          <div className="favorite_linkBar">
            <div className="free_send_title">
              <img src="images/sound(1).jpg" alt="" />
              <span>
              Shipping fee is free for purchases over Rs 100,000.
              </span>
            </div>
          </div>
        )}
      </div>
      {state.basket.length > 0 ? (
        <div className="basket_container">
          <div className="basket_itemBox">
            {state.basket.map((product) => (
              <BasketItem key={product.id} {...product} />
            ))}
          </div>
          <div className="basket_priceBox">
            <OfferBadge />
            <div className="basket_price">
              <span>Basket Collection</span>
              <span>|</span>
              <span>{state.totalPrice.toLocaleString()} Rs</span>
            </div>
            {state.totalPriceAfterOffer > 0 && (
              <div className="basket_offer">
                <span>Discounted Price</span>
                <span>{state.totalPriceAfterOffer.toLocaleString()} Rs</span>
              </div>
            )}
            <Offer />
            <SendProducts />
            <div className="basket_send">
              <span>Total amount payable</span>
              <span>{state.totalPriceFainal.toLocaleString()} Rs</span>
            </div>
            <button className="basket_button_buy">Continue shopping</button>
            <button
              onClick={() => dispath({ type: "EMPTY_BASKET" })}
              className="basket_button_remove"
            >
              Remove {state.basket.length} Goods from cart
            </button>
          </div>
        </div>
      ) : (
        <div className="favorite_empty">
          <img
            className="favorite_empty_img"
            src="images/empty-cart.png"
            alt=""
          />
          <span className="favorite_empty_title">Cart is empty</span>
        </div>
      )}
    </>
  );
}
