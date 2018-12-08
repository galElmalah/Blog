export const truncate = text =>
  text.length > 150 ? text.slice(0, 150).concat("...") : text;
