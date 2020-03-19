import React from 'react'
import TrelloList from './Component/TrelloList'
import { connect } from 'react-redux'
import TrelloActionButton from './Component/TrelloActionButton'

const App = ({ lists }) => {
  return (
    <div>
      <h1>Welcome</h1>
      <div style={styles.listsContainer}>
        {lists.map(list =>
          <TrelloList
            id={list.id}
            key={list.id}
            title={list.title}
            cards={list.cards}
          />)}
        <TrelloActionButton list/>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    lists: state.lists
  }
}
const styles = {
  listsContainer: {
    display: 'flex',
    flexDirection: 'row'
  }
}
export default connect(mapStateToProps)(App);