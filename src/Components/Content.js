import React, { Component } from "react";

// MUI Stuff
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";

// Icons
import { MdFeaturedPlayList } from "react-icons/md";
import { ImCheckmark, ImCross } from "react-icons/im";

const styles = {
  container: {
    position: "absolute",
    top: "114px",
    width: "100vw",
  },
  tabBar: {
    position: "fixed",
    width: "100vw",
    height: "56px",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#303030",
    borderBottom: "1px solid #363636",
  },

  activeTabBG: {
    backgroundColor: "#565656",
  },

  tab: {
    cursor: "pointer",
    width: "252px",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    "&:hover": {
      backgroundColor: "#565656",
    },
  },

  tabIcon: {
    height: "20px",
    width: "20px",
    marginLeft: "1rem",
    marginRight: "1rem",
    color: "#FFFFFF",
  },

  tabText: {
    color: "#FFFFFF",
  },

  content: {
    marginTop: "56px",
    // border: "2px solid red",
    height: "calc(100vh - 170px)",
  },
};

export class Content extends Component {
  state = {
    activeTab: 0,
    content: [
      {
        label: "good",
        text: "This is good content",
      },
      {
        label: "bad",
        text: "This is bad content",
      },
      {
        label: "bad",
        text: "This is bullshit content",
      },
      {
        label: "bad",
        text: "This is crap content",
      },
      {
        label: "bad",
        text: "This is shit content",
      },
    ],
  };

  handlePrimaryClick = () => {
    this.setState({
      activeTab: 0,
    });
  };

  handleCat1Click = () => {
    this.setState({
      activeTab: 1,
    });
  };

  handleCat2Click = () => {
    this.setState({
      activeTab: 2,
    });
  };

  render() {
    const { classes } = this.props;
    const { activeTab, content } = this.state;

    return (
      <div className={classes.container}>
        <div className={classes.tabBar}>
          <div
            className={`${classes.tab} ${
              activeTab === 0 && classes.activeTabBG
            }`}
            onClick={this.handlePrimaryClick}
          >
            <MdFeaturedPlayList className={classes.tabIcon} />
            <Typography variant="body1" className={classes.tabText}>
              Primary
            </Typography>
          </div>
          <div
            className={`${classes.tab} ${
              activeTab === 1 && classes.activeTabBG
            }`}
            onClick={this.handleCat1Click}
          >
            <ImCheckmark className={classes.tabIcon} />
            <Typography variant="body1" className={classes.tabText}>
              Good
            </Typography>
          </div>
          <div
            className={`${classes.tab} ${
              activeTab === 2 && classes.activeTabBG
            }`}
            onClick={this.handleCat2Click}
          >
            <ImCross className={classes.tabIcon} />
            <Typography variant="body1" className={classes.tabText}>
              Bad
            </Typography>
          </div>
        </div>

        <div className={classes.content}>
          {activeTab === 0
            ? content.map((rowData) => <p>{rowData.text}</p>)
            : activeTab === 1
            ? content.map(
                (rowData) => rowData.label === "good" && <p>{rowData.text}</p>
              )
            : activeTab === 2 &&
              content.map(
                (rowData) => rowData.label === "bad" && <p>{rowData.text}</p>
              )}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Content);
