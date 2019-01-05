import { connect } from 'react-redux';
import { loginUser } from '../../store/actionCreators/login';
import { Login } from '../../components/MainView/Login/Login';

const mapStateToProps = state => ({
  loading: state.user.loading,
});

const mapDispatchToProps = {
  loginUser,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
