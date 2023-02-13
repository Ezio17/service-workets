document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
  async function start() {
    console.log(555, navigator);
    if ("serviceWorker" in navigator) {
      try {
        const reg = await navigator.serviceWorker.register("/sw.js");
        console.log("Service worker register success", reg);
      } catch (e) {
        console.log("Service worker register fail");
      }
    }

    await loadPosts();
  }

  start();

  const h3 = document.querySelector("h3");

  h3.innerText = window.navigator.onLine ? "online" : "offline";

  async function loadPosts() {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=11"
    );
    const data = await res.json();

    const container = document.querySelector("#posts");
    container.innerHTML = data.map(toCard).join("\n");
  }

  function toCard(post) {
    return `
      <div class="card">
        <div class="card-title">
          ${post.title}
        </div>
        <div class="card-body">
          ${post.body}
        </div>
      </div>
    `;
  }
}
