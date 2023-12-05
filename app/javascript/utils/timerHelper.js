export const getTimerStyle = () => {
  const heightDifference =
    window.innerHeight - window.document.body.offsetHeight;
  const style = {
    marginBottom: `${heightDifference > 0 ? heightDifference : 20}px`,
  };

  return style;
};
