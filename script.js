const byValue = document.querySelectorAll("input");

const clickElement = () => {
  byValue.forEach((element) => {
    element.value == "Zmień status zamówienia na wysłane"
      ? element.click()
      : element;
  });
};

byValue[0].addEventListener("click", clickElement);
