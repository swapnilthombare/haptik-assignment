import React, { useState } from "react";
import ProductCard from "./ProductCard";
import Grid from "@material-ui/core/Grid";
import cardListDummy from "../../data/static-data";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  gridContainer: {
    display: "flex",
    justifyContent: "center"
  },
  gridItem: {
    flexBasis: "unset",
    padding: "12px"
  }
});

const ProductCardList = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={24} className={classes.gridContainer}>
        {cardListDummy.map(card => {
          return (
            <Grid item xs={12} className={classes.gridItem}>
              <ProductCard
                id={card.id}
                imgSrc={card.imgSrc}
                description={card.description}
                heading={card.heading}
              ></ProductCard>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default ProductCardList;
