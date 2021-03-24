import React, { Component } from "react";

// MUI Stuff
import withStyles from "@material-ui/core/styles/withStyles";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

// Icons
import {
  MdCheckBoxOutlineBlank,
  MdRefresh,
  MdMoreVert,
  MdChevronLeft,
  MdChevronRight,
  MdLineWeight,
} from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";

const styles = {
  container: {
    position: "fixed",
    top: "65px",
    width: "100vw",
    height: "48px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#111111",
    zIndex: 1,
    borderBottom: "1px solid #363636",
  },

  block1: {
    marginLeft: "238px",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },

  blockIcons: {
    color: "#FFFFFF",
    marginLeft: "1rem",
  },

  block3: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    color: "#FFFFFF",
    marginRight: "1rem",
  },

  splitIcon: {
    color: "#FFFFFF",
    transform: "rotate(180deg)",
  },
};
export class MenuBar extends Component {
  state = {
    count: 125,
  };
  render() {
    const { classes } = this.props;
    const { count } = this.state;
    return (
      <div className={classes.container}>
        <div className={classes.block1}>
          <IconButton aria-label="menu" size="small">
            <MdCheckBoxOutlineBlank className={classes.blockIcons} />
          </IconButton>
          <IconButton aria-label="menu" size="small">
            <IoMdArrowDropdown color="white" className={classes.downIcon} />
          </IconButton>
          <IconButton aria-label="menu" size="small">
            <MdRefresh className={classes.blockIcons} />
          </IconButton>
          <IconButton aria-label="menu" size="small">
            <MdMoreVert className={classes.blockIcons} />
          </IconButton>
        </div>
        <div className={classes.block3}>
          <Typography variant="overline">{`1-50 of ${count}`}</Typography>
          <IconButton aria-label="menu" size="small" disabled>
            <MdChevronLeft
              className={classes.blockIcons}
              style={{ color: "grey" }}
            />
          </IconButton>
          <IconButton aria-label="menu" size="small">
            <MdChevronRight className={classes.blockIcons} />
          </IconButton>
          <IconButton aria-label="menu" size="small">
            <MdLineWeight className={classes.splitIcon} />
          </IconButton>
          <IconButton aria-label="menu" size="small">
            <IoMdArrowDropdown color="white" className={classes.downIcon} />
          </IconButton>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(MenuBar);
