import React, { Component } from "react";

// MUI Stuff
import withStyles from "@material-ui/core/styles/withStyles";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Tooltip from "@material-ui/core/Tooltip";

// Icons
import {
  MdCheckBoxOutlineBlank,
  MdRefresh,
  MdMoreVert,
  MdChevronLeft,
  MdChevronRight,
  MdLineWeight,
  MdArrowBack,
  MdArchive,
  MdDelete,
  MdLabel,
} from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import { RiSpam2Line } from "react-icons/ri";

const styles = {
  container: {
    position: "fixed",
    top: "65px",
    height: "48px",
    backgroundColor: "#111111",
    zIndex: 1,
    borderBottom: "1px solid #363636",
    display: "flex",
    alignItems: "center",
  },

  blockWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100vw",
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

  block2: {
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
    count: 150,
    openMenu: false,
  };

  toggleOpenMenu = () => {
    this.setState({
      openMenu: !this.state.openMenu,
    });
  };

  handleBackPress = () => {
    const note_data = {
      id: 0,
      title: "",
      desc: "",
    };
    this.props.contentRef.current.setNoteData(note_data);
  };
  render() {
    const { classes } = this.props;
    const { count, openMenu } = this.state;
    return (
      <div className={classes.container}>
        {!openMenu ? (
          <div className={classes.blockWrapper}>
            <div className={classes.block1}>
              <IconButton aria-label="menu" size="small">
                <MdCheckBoxOutlineBlank className={classes.blockIcons} />
              </IconButton>
              <IconButton aria-label="menu" size="small">
                <IoMdArrowDropdown color="white" className={classes.downIcon} />
              </IconButton>
              <Tooltip title="Refresh">
                <Link href="/">
                  <IconButton aria-label="menu" size="small">
                    <MdRefresh className={classes.blockIcons} />
                  </IconButton>
                </Link>
              </Tooltip>

              <IconButton aria-label="menu" size="small">
                <MdMoreVert className={classes.blockIcons} />
              </IconButton>
            </div>
            <div className={classes.block2}>
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
        ) : (
          <div className={classes.blockWrapper}>
            <div className={classes.block1}>
              <Tooltip title="Back to Inbox">
                <IconButton
                  aria-label="menu"
                  size="small"
                  onClick={this.handleBackPress}
                >
                  <MdArrowBack className={classes.blockIcons} />
                </IconButton>
              </Tooltip>

              <IconButton aria-label="menu" size="small">
                <MdArchive className={classes.blockIcons} />
              </IconButton>

              <IconButton aria-label="menu" size="small">
                <RiSpam2Line className={classes.blockIcons} />
              </IconButton>

              <IconButton aria-label="menu" size="small">
                <MdDelete className={classes.blockIcons} />
              </IconButton>

              <IconButton aria-label="menu" size="small">
                <MdLabel className={classes.blockIcons} />
              </IconButton>

              <IconButton aria-label="menu" size="small">
                <MdMoreVert className={classes.blockIcons} />
              </IconButton>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default withStyles(styles)(MenuBar);
