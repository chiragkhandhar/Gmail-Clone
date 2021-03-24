import React, { Component } from "react";

// MUI Stuff
import withStyles from "@material-ui/core/styles/withStyles";

const styles = {
  container: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#111111",
    borderBottom: "1px solid #363636",
  },
};

export class Row extends Component {
  state = {
    content: this.props.content,
  };
  render() {
    const { classes } = this.props;
    const { content } = this.state;
    return (
      <div className={classes.container}>
        <p style={{ color: "white" }}>{content}</p>
      </div>
    );
  }
}

export default withStyles(styles)(Row);
