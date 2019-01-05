import { connect } from 'react-redux';
import { PostCreator } from '../../../components/MainView/Cms/PostCreator/PostCreator';
import { createPost } from '../../../store/actionCreators/posts';

const mapStateToProps = state => ({
  loading: state.blog.loading,
});

const mapDispatchToProps = { createPost };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostCreator);
