import { connect } from 'react-redux'
import { toggleCheck } from '../actions'

const getVisibleChecklists = ( currentSeason, profiles, currentProfile ) => {
    return profiles[currentProfile][currentSeason]
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
  }
}

const mapStateToProps = state => {
  return {
    checks: getVisibleChecklists(state.currentSeason, state.profiles, state.currentProfile)
  }
}

// calls corresponding reducer, creates props for component
const mapDispatchToProps = dispatch => {
    return {
        onCheckPress: ({profile, season, category, name}) => {
            dispatch(toggleCheck({profile,season,category,name}))
        }
    }
}
/*
const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      dispatch(toggleTodo(id))
    },
    onDeleteClick: id => {
      dispatch(deleteTodo(id))
    }
  }
}
*/

const VisibleChecklists = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedAppScreen)

export default VisibleChecklists