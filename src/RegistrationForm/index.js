import React from "react";

import { FormattedMessage } from "react-intl";
import { withStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import PropTypes from "prop-types";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import firebase from "../firebase";

const styles = theme => ({
  root: {
    display: "flex",
    marginTop: "0.5%",
    height: "100%"
  },
  validatorForm: {
    margin: theme.spacing.unit
  },
  group: {
    margin: theme.spacing.unit,
    height: "12%"
  },
  title: {
    height: "8%"
  },
  textValidator: {
    width: 200
  },
  button: {
    marginTop: theme.spacing.unit
  }
});

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        username: "",
        gender: "female",
        status: "student",
        age: "",
        knowledge: "no"
      },
      openErrorDialog: false
    };
  }

  handleInputChange = event => {
    const { value, name } = event.target;

    this.setState(prevState => ({
      form: { ...prevState.form, [name]: value }
    }));
  };

  handleOpenErrorDialog = () => {
    this.setState({ openErrorDialog: true });
  };

  handleCloseErrorDialog = () => {
    this.setState({ openErrorDialog: false });
  };

  handleSubmit = () => {
    const newUser = firebase
      .database()
      .ref()
      .child("users")
      .push().key;
    firebase
      .database()
      .ref(`/users/${newUser}`)
      .set(this.state.form, error => {
        if (error) {
          this.handleOpenErrorDialog();
        } else {
          localStorage.setItem("user_id", newUser);
          localStorage.setItem("username", this.state.form.username);
          this.props.onSubmit(newUser);
        }
      });
  };

  render() {
    const { classes } = this.props;
    return (
      <Grid container className={classes.root} justify="center">
        <Grid item xs={12} sm={8} className={classes.root}>
          <Grid container className={classes.root} justify="center">
            <Grid item xs={12} sm={8} className={classes.root}>
              <ValidatorForm
                component="fieldset"
                className={classes.validatorForm}
                onSubmit={this.handleSubmit}
              >
                <div className={classes.title}>
                  <Typography variant="display1">
                    <FormattedMessage
                      id="registrationForm.statement"
                      defaultMessage="Registration to Tama"
                    />
                  </Typography>
                </div>
                <div className={classes.group}>
                  <TextValidator
                    name="username"
                    value={this.state.form.username}
                    className={classes.textValidator}
                    onChange={this.handleInputChange}
                    label={
                      <FormattedMessage
                        id="registrationForm.username"
                        defaultMessage="Your pseudo *"
                      />
                    }
                    validators={["required"]}
                    errorMessages={[
                      <FormattedMessage
                        id="registrationForm.requiredField"
                        defaultMessage="this field is required"
                        key={this.id}
                      />
                    ]}
                  />
                </div>
                <div className={classes.group}>
                  <FormLabel component="legend">
                    {
                      <FormattedMessage
                        id="registrationForm.gender"
                        defaultMessage="I am:"
                      />
                    }
                  </FormLabel>
                  <RadioGroup
                    name="gender"
                    value={this.state.form.gender}
                    onChange={this.handleInputChange}
                    row
                  >
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label={
                        <FormattedMessage
                          id="registrationForm.genderFemale"
                          defaultMessage="Female"
                        />
                      }
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label={
                        <FormattedMessage
                          id="registrationForm.genderMale"
                          defaultMessage="Male"
                        />
                      }
                    />
                    <FormControlLabel
                      value="other"
                      control={<Radio />}
                      label={
                        <FormattedMessage
                          id="registrationForm.genderOther"
                          defaultMessage="Other"
                        />
                      }
                    />
                  </RadioGroup>
                </div>
                <div className={classes.group}>
                  <FormLabel component="legend">
                    {
                      <FormattedMessage
                        id="registrationForm.status"
                        defaultMessage="I am:"
                      />
                    }
                  </FormLabel>
                  <RadioGroup
                    name="status"
                    value={this.state.form.status}
                    onChange={this.handleInputChange}
                    row
                  >
                    <FormControlLabel
                      value="student"
                      control={<Radio />}
                      label={
                        <FormattedMessage
                          id="registrationForm.statusStudent"
                          defaultMessage="Student"
                        />
                      }
                    />
                    <FormControlLabel
                      value="teacher"
                      control={<Radio />}
                      label={
                        <FormattedMessage
                          id="registrationForm.statusTeacher"
                          defaultMessage="Teacher"
                        />
                      }
                    />
                    <FormControlLabel
                      value="parent"
                      control={<Radio />}
                      label={
                        <FormattedMessage
                          id="registrationForm.statusParent"
                          defaultMessage="Parent"
                        />
                      }
                    />
                    <FormControlLabel
                      value="other"
                      control={<Radio />}
                      label={
                        <FormattedMessage
                          id="registrationForm.statusOther"
                          defaultMessage="Other"
                        />
                      }
                    />
                  </RadioGroup>
                </div>
                <div className={classes.group}>
                  <TextValidator
                    name="age"
                    value={this.state.form.age}
                    className={classes.textValidator}
                    onChange={this.handleInputChange}
                    label={
                      <FormattedMessage
                        id="registrationForm.age"
                        defaultMessage="Age *"
                      />
                    }
                    validators={["required", "isNumber"]}
                    errorMessages={[
                      <FormattedMessage
                        id="registrationForm.requiredField"
                        defaultMessage="this field is required"
                        key={this.id}
                      />,
                      <FormattedMessage
                        id="registrationForm.numberRequired"
                        defaultMessage="please enter a number"
                        key={this.id}
                      />
                    ]}
                  />
                </div>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  type="submit"
                >
                  Ok
                </Button>
              </ValidatorForm>
            </Grid>
          </Grid>
        </Grid>
        <Dialog
          open={this.state.openErrorDialog}
          onClose={this.handleCloseErrorDialog}
        >
          <DialogTitle>Connection failed</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Error establishing a database connection, please try again.
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </Grid>
    );
  }
}

RegistrationForm.propTypes = {
  classes: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default withStyles(styles)(RegistrationForm);

// <div className={classes.group}>
// <FormLabel component="legend">
//   <FormattedMessage
//     id="registrationForm.knowledgeParallelograms"
//     defaultMessage="My knowledge of parallelograms:"
//   />
// </FormLabel>
// <RadioGroup
//   name="knowledge"
//   value={this.state.form.knowledge}
//   onChange={this.handleInputChange}
//   row
// >
//   <FormControlLabel
//     value="no"
//     control={<Radio />}
//     label={
//       <FormattedMessage
//         id="registrationForm.knowledgeParallelogramsNo"
//         defaultMessage="No"
//       />
//     }
//   />
//   <FormControlLabel
//     value="poor"
//     control={<Radio />}
//     label={
//       <FormattedMessage
//         id="registrationForm.knowledgeParallelogramsPoor"
//         defaultMessage="Poor"
//       />
//     }
//   />
//   <FormControlLabel
//     value="average"
//     control={<Radio />}
//     label={
//       <FormattedMessage
//         id="registrationForm.knowledgeParallelogramsAverage"
//         defaultMessage="Average"
//       />
//     }
//   />
//   <FormControlLabel
//     value="solid"
//     control={<Radio />}
//     label={
//       <FormattedMessage
//         id="registrationForm.knowledgeParallelogramsSolid"
//         defaultMessage="Solid"
//       />
//     }
//   />
// </RadioGroup>
// </div>
