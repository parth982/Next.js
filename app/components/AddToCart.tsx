// For Client Side Rendering as we use onClickListener
"use client";

const AddToCart = () => {
  return (
    <button
      className="btn btn-primary"
      onClick={() => console.log("Added to Cart")}
    >
      Add To Cart
    </button>
  );
};

export default AddToCart;
