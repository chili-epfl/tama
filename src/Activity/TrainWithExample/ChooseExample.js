import React from "react";

import { FormattedMessage } from "react-intl";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import Gallery from "react-grid-gallery";
import IconButton from "@material-ui/core/IconButton";
import BackNavigation from "@material-ui/icons/ArrowBack";
import { List } from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Radio from "@material-ui/core/Radio";


import parallelogramData from "../ParallelogramData";
import mammalsData from "../MammalsData";
import adverbsData from "../AdverbsData";


const styles = theme => ({
  root: {
    height: "100%"
  },
  header: {
    display: "flex",
    flexWrap: "wrap"
  },
  button: {
    margin: theme.spacing.unit * 3
  },
  titleBar: {
    background:
      "linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, " +
      "rgba(0,0,0,0.05) 60%, rgba(0,0,0,0) 100%)"
  },
  gallery: {
    display: "block",
    minHeight: "1px",
    width: "100%",
    border: "1px solid #ddd"
  },
  title: {
    display: "flex",
    alignItems: "center"
  },
  adverb: {
    color: "red"
  }
});



const images = (activityChosen) => {
  return {
    mammals: mammalsData,
    parallelograms: parallelogramData,
    adverbs: adverbsData
  }[activityChosen];
}

const formattedMessage = (activityChosen) => {
  return{
    adverbs: <FormattedMessage
              id="chooseExample.statementAdverb"
              defaultMessage="Choose an adverb to show"
              />,
    mammals: <FormattedMessage
    id="chooseExample.statementMammal"
    defaultMessage="Choose a mammal to show"
  />,
    parallelograms: <FormattedMessage
                                id="chooseExample.statement"
                                defaultMessage="Choose a shape to show"
                              />
  }[activityChosen]
}

const gallery = (activityChosen, onSelectExample, classes) =>{
  if (activityChosen === "adverbs"){
    const adverbs = adverbsData;
    return (<div>
      <List>
          {adverbs.map((value, index) => (
            <ListItem
              key={value.id}
              dense={false}
              button
            >
              <Radio checked={false} />
              <ListItemText>
                <span>{value.sentence1}</span>
                <span className={classes.adverb}> {value.adverb} </span>
                <span> {value.sentence2} </span>
              </ListItemText>
            </ListItem>
          ))}
        </List>
    </div>);
  }
    return (<Gallery
      images={images(activityChosen)}
      onClickThumbnail={onSelectExample}
      enableImageSelection={false}
      margin={0}
    />);
  

}

const ChooseExample = ({
  activityChosen,
  onNavigationBackToMenu,
  onSelectExample,
  classes
}) => (
  <div className={classes.root}>
    <div className={classes.header}>
      <IconButton
        className={classes.button}
        onClick={onNavigationBackToMenu}
        color="inherit"
      >
        <BackNavigation />
      </IconButton>
      <Typography variant="headline" className={classes.title}>
      {formattedMessage(activityChosen)}
      </Typography>
    </div>
    <div className={classes.gallery}>
    {gallery(activityChosen,onSelectExample, classes)}
    </div>
  </div>
);

ChooseExample.propTypes = {
  classes: PropTypes.object.isRequired,
  onSelectExample: PropTypes.func.isRequired,
  onNavigationBackToMenu: PropTypes.func.isRequired,
  activityChosen: PropTypes.string.isRequired
};

export default withStyles(styles)(ChooseExample);
