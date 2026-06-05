const cardContainer = document.querySelector(".card-container");

const cardData = [
  { heading: "heading1", content: "askjfhkjladgfhliksg", id: 1 },
  { heading: "heading2", content: "askjfhkjladgfhliksg", id: 2 },
  { heading: "heading3", content: "askjfhkjladgfhliksg", id: 3 },
  { heading: "heading4", content: "askjfhkjladgfhliksg", id: 4 },
  { heading: "heading5", content: "askjfhkjladgfhliksg", id: 5 },
  { heading: "heading6", content: "askjfhkjladgfhliksg", id: 6 },
  { heading: "heading7", content: "askjfhkjladgfhliksg", id: 7 },
];

const createNotes = (array) => {
  array.forEach((cardObj) => {
    const { heading, content, id } = cardObj;

    const card = document.createElement("div");
    card.classList.add("card");
    card.id = id;

    const insideHtml = `<div class="card-header"><div class="card-heading">${heading}</div><a href="../updateNotes/updateNotes.html?noteId=${id}"><div class="edit-note"><img src="../../assets/edit-note.svg" alt="" /></div></a></div><div class="card-content">${content}</div>`;

    card.innerHTML = insideHtml;

    cardContainer.appendChild(card);
  });
};

createNotes(cardData);

const body = document.querySelector("body");

window.addEventListener("load", () => {
  body.classList.add("visible");
});
