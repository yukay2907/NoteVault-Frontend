console.log("updateNotes JS loaded");

const urlParams = new URLSearchParams(window.location.search);
const noteId = urlParams.get("noteId");
console.log("Note ID:", noteId);

const updateNoteButton = document.querySelector(".create-note-button");

const headingInput = document.querySelector(".create-note-heading");
const contentInput = document.querySelector(".create-note-input");

const apiUrl = "https://notevault-wzmt.onrender.com";

const token = localStorage.getItem("jwt");

//FETCH NOTE BY ID
if (token) {
  fetch(`${apiUrl}/note/${noteId}`, {
    method: "GET",
    headers: {
      authorization: token,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      headingInput.value = data.heading;
      contentInput.value = data.content;
    })
    .catch((err) => {
      console.log(err);
      alert("Error Fetching Note");
    });
}

//UPDATE NOTE
updateNoteButton.addEventListener("click", (event) => {
  const heading = headingInput.value;
  const content = contentInput.value;

  if (token) {
    fetch(`${apiUrl}/note/update/${noteId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
      body: JSON.stringify({ content, heading }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          location.href = "/pages/dashboard/dashboard.html";
        }
      })
      .catch((err) => {
        alert("Error Updating Note");
        console.log(err);
      });
  }
});
