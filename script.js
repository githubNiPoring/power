function start() {
  fetch("laws.json")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      var random = Math.floor(Math.random() * data.length);
      console.log(data[random]);
      document.getElementById("id").innerHTML = `Law #${data[random].name}`;
      document.getElementById(
        "law-title"
      ).innerHTML = `"${data[random].title}"`;
      document.getElementById("law-desc").innerHTML = data[random].desc;
    });
}
