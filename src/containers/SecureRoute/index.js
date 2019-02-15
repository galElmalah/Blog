import { connect } from 'react-redux';
import { SecureRoute } from '../../components/SecureRoute/SecureRoute';
import { withRouter } from 'react-router';

const mapStateToProps = state => ({
  token: state.user.token,
  isLoggedIn: state.user.isLoggedIn,
});

export default withRouter(connect(mapStateToProps)(SecureRoute));
