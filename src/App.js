import React from "react";
import TrelloList from "./Component/TrelloList";
import { connect } from "react-redux";
import TrelloActionButton from "./Component/TrelloActionButton";
import { DragDropContext } from "react-beautiful-dnd";

const App = ({ lists }) => {
  const onDragEnd = () => {
    // drag
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div>
        <h1 style={{ textAlign: "center" }}>Welcome</h1>
        <div style={styles.listsContainer}>
          {lists.map(list => (
            <TrelloList
              id={list.id}
              key={list.id}
              title={list.title}
              cards={list.cards}
            />
          ))}
          <TrelloActionButton list />
        </div>
      </div>
    </DragDropContext>
  );
};

const mapStateToProps = state => {
  return {
    lists: state.lists
  };
};
const styles = {
  listsContainer: {
    display: "flex",
    flexDirection: "row"
  }
};
export default connect(mapStateToProps)(App);
