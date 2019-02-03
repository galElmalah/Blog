import { connect } from 'react-redux';
import { registerUser } from '../../store/actionCreators/login';
import { Register } from '../../components/MainView/Register/Register';

const mapStateToProps = state => ({
  loading: state.user.loading,
});

const mapDispatchToProps = {
  registerUser,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
