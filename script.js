const id_no = document.getElementById("id_no");
const advice_text = document.getElementById("advice_text");
const btn = document.getElementById("btn");

const api = `https://api.adviceslip.com/advice`;

const getAdvice = async () => {
  try {
    const response = await fetch(api, {
      method: "GET",
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

btn.addEventListener("click", () => {
  getAdvice().then((data) => {
    let advice = data.slip.advice;
    let id = data.slip.id;

    id_no.innerHTML = id;
    advice_text.innerHTML = advice;
  });
});
