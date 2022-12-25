import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import PropTypes from 'prop-types';


function Cities({ direction, ...args }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <div className='mt-[-15px] ml-[-45px] w-full'>
      <div className="d-flex p-5  ">
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
    </div>
  );
}

Cities.propTypes = {
  direction: PropTypes.string,
};

export default Cities;