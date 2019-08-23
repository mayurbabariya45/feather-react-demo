import { connect } from 'react-redux'
import Login from '../../views/Auth/Login'

const mapStateToProps = state => ({ isLoading: state.auth.loading })

const mapDispatchToProps = dispatch => ({ dispatch })

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login)
