import React from "react";
import classes from "../../../styles/DimensionX/Rules.module.css";
import AboutImage from "../../../images/DimensionX/banner2.svg";
import data from "../../../data.json";

const Rules = () => {
  console.log(data.DimensionX.rules.logo[1]);
  return (
    <div className={classes.rulesSection} id={"rules"}>
      <img src={AboutImage} className={classes.image} />
      <div className={classes.rulesContainer}>
        <div className={classes.title}>
          <p>Rules and</p>
          <h1>Regulations</h1>
        </div>

        <div className={classes.description}>
          <div className={classes.singleCategory}>
            <h1>3D</h1>
            <ol className={classes.rules}>
              {data.DimensionX.rules.threeD.map((rule) => {
                return <li>{rule}</li>;
              })}
            </ol>
          </div>

          <div className={classes.singleCategory}>
            <h1>2D</h1>
            <ol className={classes.rules}>
              {data.DimensionX.rules.twoD.map((rule) => {
                return <li>{rule}</li>;
              })}
            </ol>
          </div>

          <div className={classes.singleCategory}>
            <h1>Logo Designing</h1>
            <ol className={classes.rules}>
              {data.DimensionX.rules.logo.map((rule) => {
                return <li>{rule}</li>;
              })}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rules;
