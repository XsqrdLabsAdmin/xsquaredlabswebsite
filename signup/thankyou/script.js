import GlitchedWriter, { wait } from "https://cdn.skypack.dev/glitched-writer@2.0.29";
// Glitched Writer npm module:
// https://www.npmjs.com/package/glitched-writer
const Writer = new GlitchedWriter('#glitch_this', { letterize: true }, logString);
(async () => {
    await wait(1000);
    await Writer.write("Welcome to Xsquared Labs.");
    input.removeAttribute("disabled");
})();
function logString(string) {
    logs.innerHTML += `<p>${string}</p>`;
}
