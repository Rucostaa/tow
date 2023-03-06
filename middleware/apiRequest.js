module.exports.ownApiRequest = (subPath) => {
  fetch(process.env.URL + subPath)
    .then((response) => response.json())
    .then((data) => console.log(data));
};
