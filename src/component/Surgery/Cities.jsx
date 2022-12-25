import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SectionContainer from "../Shared/SectionContainer";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import PropTypes from "prop-types";

function Cities({ direction, ...args }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <span >
        <div className=" d-flex p-5 ml-[-44px] mt-[-15px]">
          <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={direction}>
            <DropdownToggle caret>Select Your City</DropdownToggle>
            <DropdownMenu {...args}>
              <DropdownItem>Bangalore</DropdownItem>
              <DropdownItem>Hyderabad</DropdownItem>
              <DropdownItem>Mumbai</DropdownItem>
              <DropdownItem>Delhi</DropdownItem>
              <DropdownItem>Chennai</DropdownItem>
              <DropdownItem>Pune</DropdownItem>
              <DropdownItem>Bhubaneswar</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
    </span>
  );
}

Cities.propTypes = {
  direction: PropTypes.string,
};

export default Cities;
