import { connect } from 'react-redux';
import { PostsManager } from '../../../components/MainView/Cms/PostsManager/PostsManager';
import { deletePost, fetchAllPosts } from '../../../store/actionCreators/posts';
import {} from '../../../store/actionCreators';

const mapStateToProps = state => ({
  posts: state.blog.privatePosts,
});

const mapDispatchToProps = { fetchAllPosts, deletePost };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsManager);
