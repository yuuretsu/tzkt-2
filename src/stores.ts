import { writable } from 'svelte/store';
import { tzkt } from './lib';

export const route = writable(window.location.hash);

route.subscribe(value => {
  window.location.hash = value;
});

window.addEventListener("hashchange", () => {
  route.set(window.location.hash);
});

export const blocks = writable([]);

// tzkt(`/blocks/count`)
//   .then(resp => resp.text())
//   .then((block) => tzkt(`/blocks/${Number(block) - 1}`, { operations: true }))
//   .then(resp => resp.json())
//   .then((block) => {
//     blocks.update(val => [block, ...val]);
//   });

tzkt(`/blocks/count`)
  .then(resp => resp.text())
  .then((block) => {
    Promise.all(
      [...Array(20).keys()]
        .map(i => tzkt(`/blocks/${Number(block) - i - 1}`, { operations: true }).then(res => res.json()))
    )
      .then(results => blocks.update(val => [...results.reverse(), ...val]));
  })

// @ts-ignore
const connection = new signalR.HubConnectionBuilder()
  .withUrl("https://api.tzkt.io/v1/events")
  .build();

async function init() {
  await connection.start();
  await connection.invoke("SubscribeToBlocks");
}

// auto-reconnect
connection.onclose(init);

connection.on("blocks", (msg) => {
  console.log(msg);
  if (msg.data) {
    for (const newBlock of msg.data) {
      console.log(Number(newBlock.level));
      tzkt(`/blocks/${Number(newBlock.level)}`, { operations: true })
        .then(resp => resp.json())
        .then((block) => {
          blocks.update(val => {
            const now = [...val, block];
            return now.slice(now.length - 20);
          });
        });
      }
    }
  });
  
init();