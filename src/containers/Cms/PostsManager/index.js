import { connect } from 'react-redux';
import { PostsManager } from '../../../components/MainView/Cms/PostsManager/PostsManager';
import { deletePost, fetchPosts } from '../../../store/actionCreators/posts';
import {} from '../../../store/actionCreators';

const mapStateToProps = state => ({
  posts: state.blog.posts,
});

const mapDispatchToProps = { fetchPosts, deletePost };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsManager);
