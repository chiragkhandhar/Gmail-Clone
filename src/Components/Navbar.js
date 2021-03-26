import React, { Component } from "react";

// Components
import SearchResultRow from "./SearchResultRow";

// MUI Stuff
import withStyles from "@material-ui/core/styles/withStyles";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import test_data from "../Data/data.json";
import Tooltip from "@material-ui/core/Tooltip";

// Icons
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { MdHelpOutline, MdCancel } from "react-icons/md";
import { IoSettingsOutline, IoApps } from "react-icons/io5";
import { Typography } from "@material-ui/core";

const styles = {
  conatiner: {
    position: "fixed",
    width: "100vw",
    height: "48px",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#111111",
    zIndex: 2,
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
    zIndex: 2,
    position: "absolute",
    left: "calc(238px + 35px)",
    height: "20px",
    width: "20px",
    color: "#A9A9A9",
  },

  searchBox: {
    zIndex: 1,
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
      borderRadius: "9px 9px 0px 0px",
      boxshadow: `0 2.8px 2.2px rgba(0, 0, 0, 0.034),
                  0 6.7px 5.3px rgba(0, 0, 0, 0.048),
                  0 12.5px 10px rgba(0, 0, 0, 0.06),
                  0 22.3px 17.9px rgba(0, 0, 0, 0.072),
                  0 41.8px 33.4px rgba(0, 0, 0, 0.086),
                  0 100px 80px rgba(0, 0, 0, 0.12)`,
    },
  },

  searchResults: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingLeft: "2.5rem",
    borderTop: "1px solid #A9A9A9",
    width: "569px",
    maxHeight: "520px",
    overflowY: "scroll",
    border: "0",
    backgroundColor: "#FFFFFF",
    color: "#000000",
    borderRadius: "0px 0px 9px 9px",
    boxshadow: `0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048),
    0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072),
    0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12)`,
  },

  searchResultsRow: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    marginRight: "2.5rem",
  },

  cancelBtn: {
    color: "#FFFFFF",
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

  avatar: {
    marginLeft: "1rem",
  },
};

export class Navbar extends Component {
  state = {
    searchText: "",
    searchResults: false,
    results: [],
  };

  handleChange = (event) => {
    let results;
    if (event.target.value !== "") {
      results = this.searchDB(event.target.value);
    } else {
      results = [];
    }

    this.setState({
      [event.target.name]: event.target.value,
      results: results,
      searchResults: results.length > 0 ? true : false,
    });
  };

  searchDB = (keyword) => {
    let results = test_data.filter((record) => {
      if (record.title.search(keyword) !== -1) return record;
      else if (record.title.search(keyword) !== -1) return record;
      else return null;
    });
    return results;
  };

  showSearchResults = () => {
    this.setState({
      searchResults: true,
    });
  };

  hideSearchResults = () => {
    this.setState({
      searchResults: false,
      results: [],
      searchText: "",
    });
  };

  setSND = (data) => {
    this.props.contentRef.current.setNoteData(data);
    this.hideSearchResults();
  };

  render() {
    const { classes } = this.props;
    const { searchText, searchResults, results } = this.state;
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

        <div>
          <input
            type="text"
            name="searchText"
            value={searchText}
            className={classes.searchBox}
            placeholder="Search Report"
            onChange={this.handleChange}
            onFocus={this.showSearchResults}
          ></input>
          {searchResults && (
            <div className={classes.searchResults}>
              {results.length > 0 ? (
                <div className={classes.searchResultsRow}>
                  {results.map((rowData) => (
                    <SearchResultRow
                      key={rowData.id}
                      rowData={rowData}
                      setSND={this.setSND}
                    />
                  ))}
                </div>
              ) : (
                <Typography variant="body2">Start typing keyword...</Typography>
              )}
            </div>
          )}
          {searchResults && (
            <Tooltip title="Clear Results">
              <IconButton
                aria-label="menu"
                size="small"
                className={classes.cancelBtn}
                onClick={this.hideSearchResults}
              >
                <MdCancel />
              </IconButton>
            </Tooltip>
          )}
        </div>

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
          <Avatar src="/chirag_avatar.jpeg" className={classes.avatar}></Avatar>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Navbar);
