import { connect } from 'react-redux';
import { PostCreator } from '../../../components/MainView/Cms/PostCreator/PostCreator';
import { createPost, updatePost } from '../../../store/actionCreators/posts';

const mapStateToProps = state => ({
  loading: state.blog.loading,
  posts: state.blog.posts,
});

const mapDispatchToProps = { createPost, updatePost };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostCreator);
