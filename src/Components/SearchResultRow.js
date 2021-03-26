import React, { Component } from "react";

// MUI Stuff
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";

const styles = {
  container: {
    display: "flex",
  },
  searchRowText: {
    cursor: "pointer",
    height: "44px",
    display: "flex",
    alignItems: "center",
    "&:hover": { backgroundColor: "#DDDDDD" },
  },
};

export class SearchResultRow extends Component {
  state = {};

  handlePrimaryClick = () => {
    this.props.setSND(this.props.rowData);
  };

  render() {
    const { classes, rowData } = this.props;
    return (
      <Typography
        variant="body1"
        align="left"
        className={classes.searchRowText}
        onClick = {this.handlePrimaryClick}
      >
        {rowData.title.substring(0, 67) + "..."}
      </Typography>
    );
  }
}

export default withStyles(styles)(SearchResultRow);
