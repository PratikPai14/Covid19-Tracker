import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./InfoBox.css";
export function InfoBox({ isRed, title, active, cases, total, ...props }) {
  return (
    <Card
      className={`infoBox ${active && "infoBox--selected"} ${
        active && isRed && "infoBox--isRed"
      }`}
      onClick={props.onClick}
    >
      <CardContent>
        <Typography className="infoBox__title" color="textSecondary">
          <strong>{title}</strong>
        </Typography>
        <h3 className={`infoBox__cases ${!isRed && "infoBox__cases--green"}`}>
          {cases}
        </h3>
        <Typography className="infoBox__total">{total} Total</Typography>
      </CardContent>
    </Card>
  );
}
