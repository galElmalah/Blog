import { connect } from 'react-redux';
import { PostsManager } from '../../../components/MainView/Cms/PostsManager/PostsManager';
import { createPost } from '../../../store/actionCreators/posts';
import { fetchPosts } from '../../../store/actionCreators';

const mapStateToProps = state => ({
  posts: state.blog.posts,
});

const mapDispatchToProps = { fetchPosts };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsManager);
