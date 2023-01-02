import GlitchedWriter, {
    wait
  } from "https://cdn.skypack.dev/glitched-writer@2.0.29";
  
  // Glitched Writer npm module:
  // https://www.npmjs.com/package/glitched-writer
  
  const Writer = new GlitchedWriter('#glitch_this', { letterize: true }, logString);
  
  (async  ()=> {
    await wait(1000);
    await Writer.write("We are Xsquared Labs.");
    await wait(1200);
    await Writer.write("We are the beginning of something new.");
    await wait(2000);
    await Writer.write("We will advance society beyond your wildest dreams.");
    await wait(500);
    await Writer.write("Join Us.");
    await wait(500);
    await Writer.write("#weshalladvance @xsquaredlabs");
    input.removeAttribute("disabled");
  })();
  
  function logString(string) {
    logs.innerHTML += `<p>${string}</p>`;
  }
  
  input.addEventListener(
    "input",
    _.debounce(() => 
      Writer.write(input.value)
    , 500)
  );
  
