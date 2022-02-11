import Blocks from "./components/Blocks.svelte";
import Empty from "./components/Blocks.svelte";

function userIsAdmin() {
  //check if user is admin and returns true or false
}

const routes = [
  {
    name: '/',
    component: Blocks,
  },
  {
    name: 'empty',
    component: Empty,
  }
]

export { routes }
