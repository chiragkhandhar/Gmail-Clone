import React, { Component } from "react";

// MUI Stuff
import withStyles from "@material-ui/core/styles/withStyles";
import { Chip, Typography } from "@material-ui/core";

const styles = {
  container: {
    position: "absolute",
    top: "114px",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    height: "calc(100vh - 114px)",
  },

  titleWrapper: {
    display: "flex",
    alignItems: "center",
    marginLeft: "2rem",
    marginRight: "2rem",
    marginTop: "2rem",
  },

  goodLabel: {
    marginLeft: "1rem",
    color: "#FFFFFF",
    backgroundColor: "#00B702",
  },

  badLabel: {
    marginLeft: "1rem",
    color: "#FFFFFF",
    backgroundColor: "#E11000",
  },

  desc: {
    marginLeft: "2rem",
    marginTop: "2rem",
    marginRight: "2rem",
  },
};

export class ViewReport extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <div className={classes.titleWrapper}>
          <Typography variant="h4" align="left">{this.props.data.title}</Typography>
          <Chip
            label={
              this.props.data.label === "good" ? "Good Report" : "Bad Report"
            }
            className={
              this.props.data.label === "good"
                ? classes.goodLabel
                : classes.badLabel
            }
          />
        </div>

        <Typography variant="body1" className={classes.desc} align="left">
          {this.props.data.desc}
        </Typography>
      </div>
    );
  }
}

export default withStyles(styles)(ViewReport);
