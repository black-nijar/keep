import React from "react";
import TrelloCard from "./TrelloCard";
import TrelloActionButton from "../Component/TrelloActionButton";
import { Droppable } from "react-beautiful-dnd";

const TrelloList = ({ title, cards, id }) => {
  return (
    <Droppable droppableId={String(id)}>
      {provided => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          style={styles.container}
        >
          <h4 style={styles.title}>{title}</h4>
          {cards.map((card, index) => (
            <TrelloCard
              text={card.text}
              key={card.id}
              id={card.id}
              index={index}
            />
          ))}
          <TrelloActionButton id={id} />
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

const styles = {
  container: {
    backgroundColor: "#ccc",
    borderRadius: 3,
    width: 300,
    padding: 8,
    marginRight: 8,
    height: "100%",
    marginLeft: 10
  },
  title: {
    textAlign: "center"
  }
};
export default TrelloList;
