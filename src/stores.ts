import { writable } from 'svelte/store';
import { tzkt } from './lib';

export const blocks = (() => {
  const blocksAmount = 10;
  const blocks = writable([]);

  // @ts-ignore
  const connection = new signalR.HubConnectionBuilder()
    .withUrl("https://api.tzkt.io/v1/events")
    .build();

  async function init() {
    await connection.start();
    await connection.invoke("SubscribeToBlocks");
    blocks.set([]);
    tzkt(`/blocks/count`)
      .then(resp => resp.text())
      .then((block) => {
        Promise.all(
          [...Array(blocksAmount).keys()]
            .map(i => tzkt(`/blocks/${Number(block) - i - 1}`, { operations: true }).then(res => res.json()))
        )
          .then(results => blocks.update(val => [...results.reverse(), ...val]));
      })
  }

  connection.onclose(init);

  connection.on("blocks", msg => {
    if (msg.data) {
      for (const newBlock of msg.data) {
        console.log(Number(newBlock.level));
        tzkt(`/blocks/${Number(newBlock.level)}`, { operations: true })
          .then(resp => resp.json())
          .then((block) => {
            blocks.update(val => {
              const now = [...val, block];
              return now.slice(now.length - blocksAmount);
            });
          });
        }
      }
    });
    
  init();

  return blocks;
})();