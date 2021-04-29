import { FormControl, Select, MenuItem } from "@material-ui/core";
import React from "react";
import "./Header.css";

export function Header({ countries, country, onCountryChange }) {
  return (
    <div className="app__header">
      <h1>COVID19 TRACKER</h1>
      <h5>
        {" "}
        <a
          href="https://github.com/PratikPai14/Covid19-Tracker"
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          View Source Code
        </a>
      </h5>

      <FormControl className="app__dropdown">
        <Select variant="outlined" onChange={onCountryChange} value={country}>
          <MenuItem value="worldwide">Worldwide</MenuItem>
          {countries.map((country) => {
            return <MenuItem value={country.value}>{country.name}</MenuItem>;
          })}
        </Select>
      </FormControl>
    </div>
  );
}
