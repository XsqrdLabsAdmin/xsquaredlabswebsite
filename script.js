import GlitchedWriter, { wait } from "https://cdn.skypack.dev/glitched-writer@2.0.29";
// Glitched Writer npm module:
// https://www.npmjs.com/package/glitched-writer
const Writer = new GlitchedWriter('#glitch_this', { letterize: true }, logString);
(async () => {
    await wait(1000);
    await Writer.write("We are xSquared Labs.");
    await wait(1200);
    await Writer.write("We are the dawn of a new beginning.");
    await wait(2000);
    await Writer.write("We can advance society, all we need is your help.");
    await wait(1000);
    await Writer.write("Join Us?");
    await wait(3000);
    await Writer.write("cbZzQ2vxwQTdD2f3dKk1vYIrQlczDynxnr4xFIvrAZ1qUIFivXEf");
    input.removeAttribute("disabled");
})();
function logString(string) {
    logs.innerHTML += `<p>${string}</p>`;
}
