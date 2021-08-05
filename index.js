const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
]; // набор цветов (дано)

const delayT = 1000;// задержка в мс (при 500 немного тормозит)

let timeoutId = null;// пустышка для работы с интервалом

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};// функция из дз (дано)

const refs = {
  btnStart: document.querySelector("body button[data-action='start']"),// старт кнопка
  btnStop: document.querySelector("body button[data-action='stop']"),// стоп кнопка
  myBody: document.querySelector("body"),// тело страницы,тут меняем цвет
}; // массив ссылок

refs.btnStart.addEventListener("click", changeBackground);// прослушка при клике на старт + функция ,что происходит
refs.btnStop.addEventListener("click", cancelBackground);// прослушка при клике на стоп + функция ,что происходит


function changeBackground(e) {
  refs.btnStart.disabled = true; // при клике выключаем кнопку
  timeoutId = setInterval(() => {// интервал
    const colorRandomIndex = randomIntegerFromInterval(0, colors.length - 1);//применяем рандом на масив цветов для генерации рандомного индекса
    const colorBody = colors[colorRandomIndex];//присваиваем рандомный индекс 
    refs.myBody.style.backgroundColor = `${colorBody}`;//инлайново присваиваем рандомный цвет к телу страницы
    console.log(colorBody);//выводит рандомный цвет в консоль
  }, delayT);//что происходит при клике на старт
}


function cancelBackground() {
  clearInterval(timeoutId);// убираем интервал
  refs.btnStart.disabled = false;// включаем кнопку старт при остановке 
}// что происходит при клике на стоп

/*----------------------------------Это было весело)))----------------*/