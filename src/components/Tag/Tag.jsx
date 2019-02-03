import * as s from './tag.scss';
import { connect } from 'react-redux';
import { addTagFilter, removeTagFilter } from '../../store/actionCreators';
const mapDispatchToProps = {
  addTagFilter,
  removeTagFilter,
};
export const TagContainer = connect(
  null,
  mapDispatchToProps
)(({ children, addTagFilter, removeTagFilter, id }) =>
  children({ addTagFilter, removeTagFilter, id })
);
