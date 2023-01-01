import React from "react";

const Menu = (data) => {
  return (
    <div className="d-inline position-relative pt-3">
      <form>
        <input
          className=" form-control me-2 border-success "
          type="search"
          placeholder="Search"
          aria-label="Search"
        ></input>
      </form>
      <br />
      <h6 className="">All Coffees</h6>

      <h6 className="">Hot</h6>

      <h6 className="">Iced</h6>
    </div>
  );
};

export default Menu;
