import React, { Component } from "react";

// MUI Stuff
import withStyles from "@material-ui/core/styles/withStyles";

const styles = {
  container: {
    position: "absolute",
    top: "114px",
    width: "100vw",
    backgroundColor: "white",
  },
};

export class ViewReport extends Component {
  render() {
    const { classes } = this.props;
    return <div className={classes.container}>
        <h1>{this.props.data.title}</h1>
        <p>{this.props.data.desc}</p>
    </div>;
  }
}

export default withStyles(styles)(ViewReport);
