import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { List } from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Radio from "@material-ui/core/Radio";
import PropTypes from "prop-types";

const styles ={
    adverb: {
        color: "red"
    }
};


const AdverbsList = ({
onSelectExample,
adverbs
})=>(
    <div>
        <List>
            {adverbs.map((value, index) => (
            <ListItem
              key={value.id}
              button
              dense={false}
              onClick={() => onSelectExample(index)}
            >
                <Radio checked={false} />
                <ListItemText>
                    <span>{value.sentence1}</span>
                    <span style={styles.adverb}> {value.adverb} </span>
                    <span> {value.sentence2} </span>
                </ListItemText>
            </ListItem>
          ))}
        </List>
    </div>
)


AdverbsList.propTypes = {
    onSelectExample: PropTypes.func.isRequired,
    adverbs: PropTypes.array.isRequired
};

export default withStyles(styles)(AdverbsList);
