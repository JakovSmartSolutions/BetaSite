export const isActiveClass = (isTrushy: boolean, defaultClass?: string) => {
  if (!defaultClass) defaultClass = '';
  return `${defaultClass} ${isTrushy ? 'active' : ''}`;
};
