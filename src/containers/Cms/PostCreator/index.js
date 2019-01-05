import { connect } from 'react-redux';
import { PostCreator } from '../../../components/MainView/Cms/PostCreator/PostCreator';
import { createPost } from '../../../store/actionCreators/posts';

const mapStateToProps = state => {};

const mapDispatchToProps = { createPost };
export default connect(
  null,
  mapDispatchToProps
)(PostCreator);
