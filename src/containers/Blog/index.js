import { connect } from 'react-redux';
import { fetchPosts } from '../../store/actionCreators/posts';
import Blog from '../../components/MainView/Blog/Blog';

const mapStateToProps = state => {
  return {
    posts: postsSelector(state),
    activeTags: Object.keys(state.blog.filterByTags),
    loading: state.blog.loading,
  };
};

const postsSelector = ({ blog: { publicPosts, filterByTags } }) => {
  return Object.keys(filterByTags).length > 0
    ? publicPosts.filter(post => post.tags.some(tag => filterByTags[tag]))
    : publicPosts;
};

const mapDispatchToProps = {
  fetchPosts,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Blog);
