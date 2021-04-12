export function updateLabels() {
  // eslint-disable-next-line no-unused-vars, no-undef
  M.updateTextFields();
  document.querySelectorAll(".on-response-activate").forEach((node) => {
    const label = node.querySelector("label");
    label.classList.add("active");
  });
}

export function updateSelect(elementValue) {
  const element = document.querySelector("select");
  let event = null;
  if (typeof Event === "function") {
    event = new Event("change");
  } else {
    // for IE11
    event = document.createEvent("Event");
    event.initEvent("change", true, true);
  }
  element.value = elementValue;
  element.dispatchEvent(event);
  // eslint-disable-next-line no-unused-vars, no-undef
  let instanceSelect = M.FormSelect.getInstance(element);

  instanceSelect.destroy();

  // eslint-disable-next-line no-unused-vars, no-undef
  instanceSelect = M.FormSelect.init(element);

  instanceSelect.input.dispatchEvent(new Event("change"));
  // var instance = M.FormSelect.getInstance(element);
  // eslint-disable-next-line no-unused-vars, no-undef
  M.updateTextFields();
  return instanceSelect;
}
