import Backpack from "./Backpack.js";

const backPack = new Backpack(
    'Green One', 30, 'Green', 2,20,32,false,'23 Jun 2012'
);
console.log('back pack:', backPack);
console.log('Back pack age:', backPack.getBackPackAge());

const content = `
<main>
<article>
  <h1>${backPack.name}</h1>
  <ul>
    <li>Volume: ${backPack.volume}</li>
    <li>Color: ${backPack.color}</li>
    <li>Age: ${backPack.getBackPackAge()}</li>
    <li>Number of pockets: ${backPack.pocketNum}</li>
    <li>Left strap length: ${backPack.strapLength.left}</li>
    <li>Right strap length: ${backPack.strapLength.right}</li>
    <li>Lid status: ${backPack.lidOpen}</li>
  </ul>
</article>
</main>
`;

document.body.innerHTML = content;
