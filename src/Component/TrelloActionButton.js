import React, { Component } from "react";
import { Icon, Card, Button } from "@material-ui/core";
import Textarea from "react-textarea-autosize";
import { connect } from "react-redux";
import { addList, addCard } from "../actions/actions";

class TrelloActionButton extends Component {
  state = {
    formOpen: false,
    text: ""
  };
  openForm = e => {
    this.setState({
      formOpen: true
    });
  };
  closeForm = e => {
    this.setState({
      formOpen: false
    });
  };
  renderAddButton = () => {
    const { list } = this.props;
    const buttonText = list ? "Add another list" : "Add another card";
    const buttonTextOpacity = list ? 1 : 0.5;
    const buttonTextColor = list ? "grey" : "inherit";
    const buttonTextBackground = list ? "rgpa(0,0,0,.15)" : "inherit";
    return (
      <div
        onClick={this.openForm}
        style={{
          ...styles.buttonGroup,
          opacity: buttonTextOpacity,
          color: buttonTextColor,
          backgroundColor: buttonTextBackground
        }}
      >
        <Icon>add</Icon>
        <span>{buttonText}</span>
      </div>
    );
  };
  handleInputChange = e => {
    this.setState({
      text: e.target.value
    });
  };
  handleAddList = () => {
    const { addList } = this.props;
    const { text } = this.state;
    if (text) {
      this.setState({
        text: ""
      });
      addList(text);
    }
  };
  handleAddCard = () => {
    const { addCard, id } = this.props;
    const { text } = this.state;
    if (text) {
      this.setState({ text: "" });
      addCard(id, text);
    }
  };
  renderForm = () => {
    const { list } = this.props;
    const placeholder = list
      ? "Enter list title"
      : "Enter a title for this card";
    const buttonTitle = list ? "Add List" : "Add Card";
    return (
      <div>
        <Card
          style={{
            minHeight: 50,
            minWidth: 250,
            padding: "6px 8px 2px"
          }}
        >
          <Textarea
            placeholder={placeholder}
            onBlur={this.closeForm}
            onChange={this.handleInputChange}
            value={this.state.text}
            autoFocus
            style={{
              resize: "none",
              width: "100%",
              outline: "none",
              border: "none",
              overflow: "hidden"
            }}
          />
        </Card>
        <div style={styles.formButtonGroup}>
          <Button
            onMouseDown={list ? this.handleAddList : this.handleAddCard}
            varient="contained"
            style={{ color: "white", backgroundColor: "green" }}
          >
            {buttonTitle}{" "}
          </Button>
          <Icon style={{ marginLeft: 2, cursor: "pointer" }}>close</Icon>
        </div>
      </div>
    );
  };

  render() {
    return this.state.formOpen ? this.renderForm() : this.renderAddButton();
  }
}

const styles = {
  buttonGroup: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    borderRadius: 3,
    height: 36,
    width: 272,
    paddingLeft: 10
  },
  formButtonGroup: {
    display: "flex",
    marginTop: 4,
    alignItems: "center"
  }
};
export default connect(null, { addList, addCard })(TrelloActionButton);
