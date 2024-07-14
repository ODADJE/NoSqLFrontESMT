export const hashData = (data) => {
  let hash = 0;
  if (data.length === 0) return hash;
  for (let i = 0; i < data.length; i++) {
    const char = data.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }
  return hash;
};
