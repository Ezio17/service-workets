// document.addEventListener("deviceready", onDeviceReady, false);
onDeviceReady();

function onDeviceReady() {
  async function start() {
    console.log(555, navigator);
    if ("serviceWorker" in navigator) {
      try {
        console.log(1121111);
        const reg = await navigator.serviceWorker.register("sw.js");
        console.log("Service worker register success", reg);
      } catch (e) {
        console.log("Service worker register fail", e);
      }
    }
    await loadPosts();
  }

  start();

  const h3 = document.querySelector("h3");

  h3.innerText = window.navigator.onLine ? "online" : "offline";

  async function loadPosts() {
    const res = await fetch(
      `https://randomuser.me/api/`
    );
    const data = await res.json();
      console.log(data.results[0]);
    const container = document.querySelector("#posts");
    container.innerHTML =data.results[0].email;
  }
}
