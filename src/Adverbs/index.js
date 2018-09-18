import React from "react";
import { withStyles } from "@material-ui/core/styles";



const styles = () => ({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    alignItems: "center"
  },
  mainContent: {
    height: "70%"
  }
});

type PropsT = {
  classes: Object,
};

const Adverbs = ({
  classes,
}: PropsT) => (
  <div className={classes.root}>
    <h1 className={classes.mainContent}>This feature is not implemented yet !!</h1>
  </div>
);
export default withStyles(styles)(Adverbs);
