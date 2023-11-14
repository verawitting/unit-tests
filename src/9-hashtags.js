export const hashtags = (text) => {

  const hashtagRegex = /#(\w+)/g;

  const matches = text.match(hashtagRegex);
  
  return matches || []
}