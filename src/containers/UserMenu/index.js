import { connect } from 'react-redux';
import { UserMenu } from '../../components/Header/UserMenu/UserMenu';
import { logoutUser } from '../../store/actionCreators/login';
import { withRouter } from 'react-router';

const mapStateToProps = state => ({
  isAdmin: state.user.isAdmin,
  currentlyLoggedInUser: state.user.currentlyLoggedInUser,
});

export default withRouter(
  connect(
    mapStateToProps,
    { logoutUser }
  )(UserMenu)
);
