export const safeId = () =>
  Date.now().toString(36) + Math.random().toString(36).substring(2);
