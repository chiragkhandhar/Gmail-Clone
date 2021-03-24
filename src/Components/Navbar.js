import React, { Component } from "react";

// MUI Stuff
import withStyles from "@material-ui/core/styles/withStyles";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";

// Icons
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { MdHelpOutline } from "react-icons/md";
import { IoSettingsOutline, IoApps } from "react-icons/io5";

const styles = {
  conatiner: {
    position: "fixed",
    width: "100vw",
    height: "48px",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#111111",
    zIndex: 1,
    padding: "8px",
    borderBottom: "1px solid #363636",
  },

  block1: {
    marginLeft: "1rem",
    width: "238px",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },

  menuIcon: {
    color: "#FFFFFF",
  },

  logo: {
    marginLeft: "2rem",
    height: "30px",
  },

  searchIcon: {
    position: "absolute",
    left: "calc(238px + 35px)",
    height: "20px",
    width: "20px",
    color: "#A9A9A9",
  },

  searchBox: {
    width: "568px",
    height: "46px",
    outline: 0,
    backgroundColor: "#525252",
    paddingLeft: "2.5rem",
    color: "#FFFFFF",
    fontFamily: "'Roboto', sans-serif",
    fontSize: "18px",
    border: "0",
    borderRadius: "9px",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",

    "&:focus": {
      backgroundColor: "#FFFFFF",
      color: "#000000",
      boxshadow: `0 2.8px 2.2px rgba(0, 0, 0, 0.034),
                  0 6.7px 5.3px rgba(0, 0, 0, 0.048),
                  0 12.5px 10px rgba(0, 0, 0, 0.06),
                  0 22.3px 17.9px rgba(0, 0, 0, 0.072),
                  0 41.8px 33.4px rgba(0, 0, 0, 0.086),
                  0 100px 80px rgba(0, 0, 0, 0.12)`,
    },
  },

  block3: {
    position: "absolute",
    right: "1rem",
    marginRight: "1rem",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },

  block3Icon: {
    color: "#FFFFFF",
  },
};

export class Navbar extends Component {
  state = {
    searchText: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.conatiner}>
        <div className={classes.block1}>
          <IconButton aria-label="menu" size="small">
            <AiOutlineMenu className={classes.menuIcon} />
          </IconButton>
          <img
            src="/segmed_logo.png"
            alt="Segmed Logo 1"
            className={classes.logo}
          />
        </div>

        <AiOutlineSearch className={classes.searchIcon} />
        <input
          type="text"
          name="searchText"
          className={classes.searchBox}
          placeholder="Search Report"
          onChange={this.handleChange}
        ></input>

        <div className={classes.block3}>
          <IconButton aria-label="menu">
            <MdHelpOutline className={classes.block3Icon} />
          </IconButton>
          <IconButton aria-label="menu">
            <IoSettingsOutline className={classes.block3Icon} />
          </IconButton>
          <IconButton aria-label="menu">
            <IoApps className={classes.block3Icon} />
          </IconButton>
          <Avatar src="/akash_avatar.jpeg"></Avatar>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Navbar);