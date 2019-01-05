import RichTextEditor from 'react-rte';

export const initialPostState = (id, posts) => {
  const post = posts.find(post => post.id == id);
  if (post) {
    return {
      ...post,
      value: RichTextEditor.createValueFromString(post.body, 'html'),
      tag: '',
    };
  } else {
    return {
      title: '',
      body: '',
      value: RichTextEditor.createEmptyValue(),
      tags: [],
      tag: '',
    };
  }
};
