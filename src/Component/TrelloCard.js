import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import { Draggable } from "react-beautiful-dnd";

const TrelloCard = ({ text, id, index }) => {
  return (
    <Draggable droppableId={String(id)} index={index}>
      {provided => (
        <div
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
        >
          <Card style={styles.cardContainer}>
            <CardContent>
              <Typography gutterBottom>{text}</Typography>
            </CardContent>
          </Card>
        </div>
      )}
    </Draggable>
  )
};

const styles = {
  cardContainer: {
    marginBottom: 8
  }
};

export default TrelloCard;
