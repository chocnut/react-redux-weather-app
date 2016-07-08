export default function(string) {
  return string.charAt(0).toUpperCase() + string.substring(1);
}

export const words = (string) => {
  return string.replace(/(^|[^a-zA-Z\u00C0-\u017F'])([a-zA-Z\u00C0-\u017F])/g, (m) => {
    return m.toUpperCase();
  });
};
