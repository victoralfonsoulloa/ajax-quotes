document.getElementById("fetchData").addEventListener("click", () => {
  fetch("server.php")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("result").innerHTML = data;
    })
    .catch((err) => {
      console.error("AJAX Error:", err);
    });
});