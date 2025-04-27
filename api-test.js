const claveApi="f78086b6df5a4086af0130253252504";
const idioma ="es";
const ciudad ="Huancayo";

const apiClimaActual =`https://api.weatherapi.com/v1/current.json?
q=${ciudad}&lang=${idioma}&key=${claveApi}`;
const response = await fetch(apiClimaActual);
let data = await response.json();

console.log(data.current.localtime);