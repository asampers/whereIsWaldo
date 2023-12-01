export const getAlertStyling = (found, position) => {
  let alertType = found.name ? "alert-success" : "alert-danger";
  let message = found.name ? `You found ${found.name}` : "Ope, try again!";
  let display = !found.visible ? "d-none" : "";
  let style = {
    position: "absolute",
    left: position.x + "px",
    top: position.y + "px",
  };

  return { alertType, message, display, style };
};
