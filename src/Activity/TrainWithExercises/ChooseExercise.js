import React from "react";

import { FormattedMessage } from "react-intl";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Gallery from "react-grid-gallery";
import IconButton from "@material-ui/core/IconButton";
import BackNavigation from "@material-ui/icons/ArrowBack";
import Typography from "@material-ui/core/Typography";
import AdverbsList from "../Utils/AdverbsList";

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
  }
});


const topicData =  {
  mammals: mammalsData,
  parallelograms: parallelogramData,
};

const formattedMessage = {
  adverbs: 
    <FormattedMessage
      id="chooseExample.statementAdverb"
      defaultMessage="Choose an adverb to show"
    />,
  mammals: 
    <FormattedMessage
      id="chooseExample.statementMammal"
      defaultMessage="Choose a mammal to show"
    />,
  parallelograms: 
    <FormattedMessage
      id="chooseExample.statement"
      defaultMessage="Choose a shape to show"
    />
  };

const ChooseExercise = ({
  onNavigationBackToMenu,
  onSelectExercise,
  classes,
  activityChosen
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
        {formattedMessage[activityChosen]}
      </Typography>
    </div>
    <div className={classes.gallery}>
    {activityChosen === "adverbs" ? 
      <AdverbsList
        adverbs={adverbsData}
        onSelect = {onSelectExercise}
      />
      :
      <Gallery
        images={topicData[activityChosen]}
        onClickThumbnail={onSelectExercise}
        enableImageSelection={false}
        margin={0}
      />
    }
    </div>
  </div>
);

ChooseExercise.propTypes = {
  classes: PropTypes.object.isRequired,
  onSelectExercise: PropTypes.func.isRequired,
  onNavigationBackToMenu: PropTypes.func.isRequired,
  activityChosen: PropTypes.string.isRequired
};

export default withStyles(styles)(ChooseExercise);
