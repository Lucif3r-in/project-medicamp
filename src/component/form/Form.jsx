import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

export default function Form() {
  const [value, setValue] = React.useState("");
  const [currency, setCurrency] = React.useState("Bangalore");

  const cities = [
    {
      value: "Coimbatore",
      label: "Coimbatore",
    },
    {
      value: "Bangalore",
      label: "Bangalore",
    },
    {
      value: "Kanpur",
      label: "Kanpur",
    },
    {
      value: "Mysore",
      label: "Mysore",
    },
    {
      value: "Bhubaneshwar",
      label: "Bhubaneshwar",
    },
    {
      value: "Vijayawada",
      label: "Vijayawada",
    },
    {
      value: "Vishakhapatnam",
      label: "Vishakhapatnam",
    },
    {
      value: "Bhopal",
      label: "Bhopal",
    },
    {
      value: "Nagpur",
      label: "Nagpur",
    },
    {
      value: "Chennai",
      label: "Chennai",
    },
  ];
  
  const handleChange1 = (event) => {
    setCurrency(event.target.value);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Box
      component="form"
      className=""
      sx={{
        "& .MuiTextField-root": { m: 2, width: "36ch" },
        mt: 2,
        mr: "20px",
        borderRadius: "10px",
        fontWeight: "bold",
        padding: "4px",
        boxShadow:
          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          backgroundColor:'#cdc8ae'
      }}
      noValidate
      autoComplete="off"
    >
        <div className="text-[20px] flex justify-center mt-[8px] text-bold font-bold">Book your Consulation today</div>
      <div>
        <TextField
          id="outlined-multiline-flexible"
          label="Name"
          variant="outlined"
          required
          maxRows={4}
          value={value}
          onChange={handleChange}
        />
      </div>
      <div>
        <TextField
          id="outlined-number"
          label="Age"
          type="number"
          maxRows={2}
          required
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
      <div>
        <TextField
          id="outlined-number"
          label="Number"
          type="number"
          maxRows={2}
          helperText="Please provide your phone number"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
      {/* <div>
        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          value={currency}
          required
          onChange={handleChange1}
          helperText="Please select your City"
        >
          {ailments.map((option) => (
            <div className="flex items-center">
                <img
                  src="https://www.practostatic.com/practo-care/brand_page/images/ic_destination.png"
                  height="16px"
                  width="20px"
                  className="mr-[10px] ml-[10px] mb-[10px]"
                />
            <MenuItem key={option.value} value={option.value}>
              
              
              {option.label}
            </MenuItem>
            </div>
          ))}
        </TextField>
      </div> */}
      <div>
        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          value={currency}
          required
          onChange={handleChange1}
          helperText="Please select your City"
        >
          {cities.map((option) => (
            <MenuItem key={option.label} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <div className="flex justify-center mb-[16px] ">
        <Button variant="contained" sx={{ width: "300px", height: "9vh",backgroundColor:'#553692' }}>
          Book Appointment
        </Button>
      </div>
    </Box>
  );
}
