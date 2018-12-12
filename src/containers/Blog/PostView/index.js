import { connect } from "react-redux";
import PostView from "../../../components/MainView/Blog/PostView/PostView";

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

export default connect(mapStateToProps)(PostView);
