const welcome = document.querySelector(".welcome");

const name = localStorage.getItem("name");

welcome.textContent = `Welcome Back, ${name}`;

const cardContainer = document.querySelector(".card-container");
const logout = document.querySelector(".logout");
const createNoteButton = document.querySelector(".new-note");

const apiUrl = "https://notevault-wzmt.onrender.com";

const token = localStorage.getItem("jwt");

if (!token) {
  location.href = "./pages/signInsignUp/authenticate.html";
}

logout.addEventListener("click", () => {
  localStorage.removeItem("jwt");
  location.href = "/";
});

let cardData = [];

createNoteButton.addEventListener("click", () => {
  location.href = "../createNotes/createNotes.html";
});

const createNotes = (array) => {
  cardContainer.innerHTML = "";

  array.forEach((cardObj) => {
    const { heading, content } = cardObj;
    const id = cardObj.noteId;

    const card = document.createElement("div");
    card.classList.add("card");
    card.id = id;

    const insideHtml = `
    <div class="card-header">

      <div class="card-heading">${heading}</div>

      <div class="card-actions">

        <a href="../updateNotes/updateNotes.html?noteId=${id}">
          <div class="edit-note">
            <img src="../../assets/edit-note.svg" alt="" />
          </div>
        </a>

        <div class="delete-note" data-id="${id}">
          🗑️
        </div>

      </div>

    </div>

    <div class="card-content">${content}</div>
    `;
    card.innerHTML = insideHtml;

    cardContainer.appendChild(card);
    const deleteBtn = card.querySelector(".delete-note");

    deleteBtn.addEventListener("click", () => {
      const confirmDelete = confirm(
        "Are you sure you want to delete this note?",
      );

      if (!confirmDelete) return;

      fetch(`${apiUrl}/note/delete/${id}`, {
        method: "DELETE",
        headers: {
          authorization: token,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.message) {
            fetchNotes();
          }
        })
        .catch((err) => {
          console.log(err);
          alert("Error deleting note");
        });
    });
  });
};

const body = document.querySelector("body");

const fetchNotes = () => {
  fetch(`${apiUrl}/note/getallnotes`, {
    method: "GET",
    headers: {
      authorization: token,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      cardData = data.data;
      createNotes(data.data);
    })
    .catch((err) => {
      alert("Error Fetching Data");
      console.log(err);
    });
};

window.addEventListener("load", () => {
  body.classList.add("visible");

  if (token) {
    fetchNotes();
  }
});
