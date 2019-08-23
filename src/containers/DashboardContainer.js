import { connect } from 'react-redux'
import Dashboard from '../views/Dashboard'

const mapStateToProps = state => ({
  tasks: state.auth.tasks,
  states: state.auth.states,
  initialValues: state.clock.clock,
  isLoading: state.clock.loading,
  isClocked: state.clock.isClocked,
})

const mapDispatchToProps = dispatch => ({ dispatch })

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard)
