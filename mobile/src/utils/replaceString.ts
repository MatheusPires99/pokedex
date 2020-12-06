const replaceString = (text: string) =>
  text.replace(/\f/g, ' ').replace(/\n/g, ' ');

export default replaceString;
