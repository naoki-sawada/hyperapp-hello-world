import { h, app } from "hyperapp";
import { withLogger } from "@hyperapp/logger";

const state = {
  count: 0
};

const actions = {
  down: value => state => ({ count: state.count - value }),
  up: value => state => ({ count: state.count + value })
};

const CountContent = ({ count, up, down }) => (
  <div class="count">
    <h2>{count}</h2>
    <button onclick={() => { down(1) }}>-</button>
    <button onclick={() => { up(1) }}>+</button>
  </div>
);

const view = (state, actions) => (
  <div style={{ textAlign: "center" }}>
    <h1>Hello, world!</h1>
    <CountContent count={state.count} up={actions.up} down={actions.down} />
  </div>
);

const main = withLogger(app)(state, actions, view, document.body);