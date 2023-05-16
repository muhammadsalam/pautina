const choices = new Choices("#action-select", {
  searchEnabled: false, // Отключение поиска
  itemSelectText: "", // Удаление текста при выборе опции
  renderSelectedChoices: "always", // Отображение выбранной опции всегда
  shouldSortItems: true, // Сортировка опций
  renderSelectedChoices: "always", // Отображение выбранной опции всегда
});

document.querySelector("#action-select").addEventListener("change", (event) => {
  console.log(choices.getValue(true));
  const selectedOption = choices.getValue(true);
  if (selectedOption) {
    choices.removeActiveItemsByValue(selectedOption.value);
    choices.setChoiceByValue(selectedOption.value, true);
  }
});

// номер телефона. при нажатии 8 или 9 автоматом дописывается 7
const authInput = document.querySelector("#action-input_phone");

let inputMask = IMask(authInput, {
  mask: "+7 (000) 000-00-00",
  lazy: true,
  prepare: function (str) {
    if (authInput.value == "8") {
      return "";
    }
    if (authInput.value == "7") {
      return "";
    }
    return str;
  },
});

// слайдер
const swiper = new Swiper(".swiper", {
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

// аккордеон
// Получаем .faq-list
const faqList = document.querySelector(".faq-list");

// Добавляем обработчик события для кликов внутри .faq-list
faqList.addEventListener("click", (event) => {
  // Проверяем, был ли клик на элементе с классом .faq-item_summary
  if (event.target.classList.contains("faq-item_summary")) {
    // Получаем соответствующие элементы аккордеона
    const summary = event.target;
    const item = summary.parentNode;
    const text = item.querySelector(".faq-item_text");

    // Проверяем, открыт ли элемент
    const isOpen = item.hasAttribute("open");

    // Закрываем все элементы аккордеона
    const allItems = faqList.querySelectorAll(".faq-item");
    allItems.forEach((el) => {
      el.removeAttribute("open");
      el.querySelector(".faq-item_text").style.maxHeight = null;
    });

    // Открываем или закрываем текущий элемент
    if (!isOpen) {
      item.setAttribute("open", "");
      text.style.maxHeight = text.scrollHeight + "px";
    } else text.style.maxHeight = null;
  }
});
