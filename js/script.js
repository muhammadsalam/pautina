// const choices = new Choices("#action-select", {
//   searchEnabled: false, // Отключение поиска
//   itemSelectText: "", // Удаление текста при выборе опции
//   renderSelectedChoices: "always", // Отображение выбранной опции всегда
//   shouldSortItems: true, // Сортировка опций
//   renderSelectedChoices: "always", // Отображение выбранной опции всегда
// });

// document.querySelector("#action-select").addEventListener("change", (event) => {
//   console.log(choices.getValue(true));
//   const selectedOption = choices.getValue(true);
//   if (selectedOption) {
//     choices.removeActiveItemsByValue(selectedOption.value);
//     choices.setChoiceByValue(selectedOption.value, true);
//   }
// });

// // номер телефона. при нажатии 8 или 9 автоматом дописывается 7
// const authInput = document.querySelector("#action-input_phone");

// let inputMask = IMask(authInput, {
//   mask: "+7 (000) 000-00-00",
//   lazy: true,
//   prepare: function (str) {
//     if (authInput.value == "8") {
//       return "";
//     }
//     if (authInput.value == "7") {
//       return "";
//     }
//     return str;
//   },
// });

// слайдер
const swiper = new Swiper(".swiper", {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  effect: "creative",
  pagination: {
    clickable: true,
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
