import React from 'react'
import TrelloList from './Component/TrelloList'
import { connect } from 'react-redux'
import TrelloActionButton from './Component/TrelloActionButton'

const App = ({ lists }) => {
  return (
    <div>
      <h1>Welcome</h1>
      <div style={styles.listsContainer}>
        {lists.map(list => <TrelloList title={list.title} key={list.id} cards={list.cards} />)}
        <TrelloActionButton lists/>
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