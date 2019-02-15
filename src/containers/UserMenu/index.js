import { connect } from 'react-redux';
import { UserMenu } from '../../components/Header/UserMenu/UserMenu';
import { withRouter } from 'react-router';

const mapStateToProps = state => ({
  token: state.user.isAdmin,
  currentlyLoggedInUser: state.user.currentlyLoggedInUser,
});

export default withRouter(connect(mapStateToProps)(UserMenu));
