import React from 'react'
import TrelloCard from './TrelloCard'
import TrelloActionButton from '../Component/TrelloActionButton'

const TrelloList = ({ title, cards, id }) => {
  console.log('CARDS :',cards)
  return (
    <div style={styles.container}>
      <h4 style={styles.title}>{title}</h4>
      {cards.map(card => <TrelloCard text={card.text} key={card.id}/>)}
      <TrelloActionButton id={id}/>
    </div>
  )
};

const styles = {
  container: {
    backgroundColor: '#ccc',
    borderRadius: 3,
    width: 300,
    padding: 8,
    marginRight: 8,
    height: '100%'
  },
  title: {
    textAlign: 'center'
  }
};
export default TrelloList