export const truncate = text =>
  text && text.length > 150 ? text.slice(0, 150).concat('...') : text;

export const removeHtmlTags = text => text.replace(/<(?:.|\n)*?>/gm, '');
