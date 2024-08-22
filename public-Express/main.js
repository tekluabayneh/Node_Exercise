const show = document.querySelector(".input");
const button = document.querySelector(".button");
const Submit = document.querySelector(".Submit");

async function showposts() {
  try {
    const response = await fetch("http://localhost:3000/api/posts");
    if (!response.ok) {
      throw new Error("faild to fetch post");
    }
    const posts = await response.json();
    show.innerHTML = "";
    posts.forEach((post) => {
      const postElemt = document.createElement("div");
      postElemt.textContent = post.name;
      show.appendChild(postElemt);
    });
  } catch (err) {
    console.log(`Error Fetching post:`, err);
  }
}
async function addPost(e) {
  e.preventDefault(); // Prevent the default form submission
  const formData = new FormData(e.target);
  const name = formData.get("name");
  try {
    const response = await fetch("http://localhost:3000/api/posts", {
      method: "POST",
      headers: {
        "Content-type": "application/json", // Corrected the typo here
      },
      body: JSON.stringify({ name }),
    });

    if (!response.ok) {
      // Log more information about the response
      const errorText = await response.text();
      console.error(
        "Failed to fetch post:",
        response.status,
        response.statusText,
        errorText
      );
      throw new Error("Failed to fetch post");
    } else {
      const newPost = await response.json();
      const postElement = document.createElement("div");
      postElement.textContent = newPost.name;
      document.getElementById("show").appendChild(postElement);
      showPosts();
    }
  } catch (error) {
    console.log("Error adding post", error);
  }
}

button.addEventListener("click", showposts);
Submit.addEventListener("submit", addPost);
