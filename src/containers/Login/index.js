import { connect } from 'react-redux';
import { loginUser } from '../../store/actionCreators/login';
import { Login } from '../../components/MainView/Login/Login';

const mapStateToProps = state => ({
  loading: state.user.loading,
  isLoggedIn: state.user.isLoggedIn,
  currentlyLoggedInUser: state.user.currentlyLoggedInUser,
});

const mapDispatchToProps = {
  loginUser,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
