const API_BASE_URL = "https://sixseven.maksimkrivenkow.workers.dev";

const input = document.getElementById("playerTagInput");
const button = document.getElementById("searchButton");

async function handleSearch() {
  const tag = input.value.trim();

  if (!tag) {
    alert("Введи тег");
    return;
  }

  try {
    const response = await fetch(API_BASE_URL + "/player/" + encodeURIComponent(tag));
    const data = await response.json();
    console.log(data);
    alert("Данные пришли, смотри Console");
  } catch (error) {
    console.error(error);
    alert("Ошибка загрузки");
  }
}

button.addEventListener("click", handleSearch);
