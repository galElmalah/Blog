import { connect } from 'react-redux';
import { fetchPosts } from '../../store/actionCreators';
import Blog from '../../components/MainView/Blog/Blog';

const mapStateToProps = state => {
  return {
    posts: postsSelector(state),
    activeTags: Object.keys(state.blog.filterByTags),
    loadingPosts: state.blog.loadingPosts,
  };
};

const postsSelector = ({ blog: { posts, filterByTags } }) => {
  return Object.keys(filterByTags).length > 0
    ? posts.filter(post => post.tags.some(tag => filterByTags[tag]))
    : posts;
};

const mapDispatchToProps = {
  fetchPosts,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Blog);
