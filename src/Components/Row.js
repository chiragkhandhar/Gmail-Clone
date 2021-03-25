import React, { Component } from "react";

// MUI Stuff
import withStyles from "@material-ui/core/styles/withStyles";
import { Typography, Chip, Checkbox, IconButton } from "@material-ui/core";

// Icons
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const styles = {
  container: {
    cursor: "pointer",
    display: "flex",
    height: "40px",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#111111",
    borderBottom: "1px solid #363636",
    paddingLeft: "1rem",
    paddingRight: "1rem",
    "&:hover": {
      backgroundColor: "#282828",
    },
  },

  checkBox: {
    color: "#838383",
    "&:hover": {
      color: "white",
    },
  },

  unFav: {
    color: "#838383",
    "&:hover": {
      color: "white",
    },
  },

  fav: {
    color: "gold",
  },

  clickableArea: {
    display: "flex",
  },

  title: {
    marginLeft: "1rem",
    color: "#FFFFFF",
  },

  description: {
    marginLeft: "1rem",
    color: "#838383",
  },

  goodLabel: { marginLeft: "1rem", color: "#00B702", borderColor: "#00B702" },

  badLabel: { marginLeft: "1rem", color: "#E11000", borderColor: "#E11000" },
};

const formatDescriptionText = (original_text) => {
  return original_text.length >= 70
    ? original_text.substring(0, 67) + "..."
    : original_text;
};

export class Row extends Component {
  state = {
    data: this.props.data,
    fav: false,
    openMode: false,
  };

  toggleOpenMode = () => {
    this.props.setNoteData(this.props.data);
  };

  favIT = () => {
    this.setState({ fav: true });
  };

  unFavIT = () => {
    this.setState({ fav: false });
  };
  render() {
    const { classes } = this.props;
    const { data, fav } = this.state;
    return (
      <div className={classes.container}>
        <Checkbox className={classes.checkBox}/>
        {!fav ? (
          <IconButton aria-label="menu" onClick={this.favIT}>
            <AiOutlineStar className={classes.unFav} />
          </IconButton>
        ) : (
          <IconButton aria-label="menu" onClick={this.unFavIT}>
            <AiFillStar className={classes.fav} />
          </IconButton>
        )}

        <div className={classes.clickableArea} onClick={this.toggleOpenMode}>
          {" "}
          <Typography variant="body1" className={classes.title}>
            {data.title}
          </Typography>
          <Typography variant="body1" className={classes.description}>
            {formatDescriptionText(data.desc)}
          </Typography>
          <Chip
            size="small"
            label={data.label === "good" ? "Good Report" : "Bad Report"}
            variant="outlined"
            className={
              data.label === "good" ? classes.goodLabel : classes.badLabel
            }
          />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Row);
