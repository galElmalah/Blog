import { connect } from 'react-redux';
import PostView from '../../../components/MainView/Blog/PostView/PostView';

const mapStateToProps = state => {
  return {
    posts: state.blog.posts,
  };
};

export default connect(mapStateToProps)(PostView);
