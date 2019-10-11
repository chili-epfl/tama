// @flow

import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { List } from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import Radio from "@material-ui/core/Radio";

const styles = {
  adverb: {
    color: "red"
  },
  adverbDisplay: {
    display: "flex",
    justifyContent: "center"
  }
};

type AdverbDataT = {
  id: string,
  sentence1: string,
  adverb: string,
  sentence2: string
};

export const AdverbDisplay = ({ data }: { data: AdverbDataT }) => (
  <div style={styles.adverbDisplay}>
    <p>
      {data.sentence1} <span style={styles.adverb}>{data.adverb}</span>{" "}
      {data.sentence2}
    </p>
  </div>
);

const AdverbsList = ({
  onSelect,
  adverbs
}: {
  onSelect: Function,
  adverbs: AdverbDataT[]
}) => (
  <div>
    <List>
      {adverbs.map((value, index) => (
        <ListItem
          key={value.id}
          button
          dense={false}
          onClick={() => onSelect(index)}
        >
          <Radio checked={false} />
          <AdverbDisplay data={value} />
        </ListItem>
      ))}
    </List>
  </div>
);

export default withStyles(styles)(AdverbsList);
