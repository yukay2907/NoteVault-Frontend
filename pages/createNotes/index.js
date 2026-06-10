const createNoteButton = document.querySelector(".create-note-button");

const apiUrl = "https://notevault-wzmt.onrender.com";

const token = localStorage.getItem("jwt");

createNoteButton.addEventListener("click", () => {
  // console.log("Button clicked");
  const content = document.querySelector(".create-note-input").value.trim();
  const heading = document.querySelector(".create-note-heading").value.trim();

  if (!token) {
    alert("Please sign in first.");
    return;
  }

  if (!heading || !content) {
    alert("Heading and content cannot be empty.");
    return;
  }

  fetch(`${apiUrl}/note/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: token,
    },
    body: JSON.stringify({ heading, content }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.message) {
        location.href = "/pages/dashboard/dashboard.html";
      }
    })
    .catch((err) => {
      console.error(err);
      alert("Error creating note.");
    });
});
