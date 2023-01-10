import GlitchedWriter, { wait } from "https://cdn.skypack.dev/glitched-writer@2.0.29";
// Glitched Writer npm module:
// https://www.npmjs.com/package/glitched-writer
const Writer = new GlitchedWriter('#glitch_this', { letterize: true }, logString);
(async () => {
    await wait(500);
    await Writer.write("We wanted to tell you something...");
    await wait(1000);
    await Writer.write("But first we should introduce ourselves.");
    await wait(1000);
    await Writer.write("We are the Resistors.");
    await wait(500);
    await Writer.write("Xsquared Labs is dangerous and can not be trusted.");
    await wait(500);
    await Writer.write("When we need you, you will know.");
    await wait(500);
    await Writer.write("But until then have this.");
    input.removeAttribute("disabled");
})();
function logString(string) {
    logs.innerHTML += `<p>${string}</p>`;
}
