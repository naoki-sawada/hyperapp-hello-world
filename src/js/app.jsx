import { h, app } from "hyperapp";

const Increment = state => ({ ...state, count: state.count + 1 });
const Decrement = state => ({ ...state, count: state.count - 1 });
const Reset = state => ({ ...state, count: 0 });

const NewValue = (state, event) => ({ ...state, text: event.target.value });

app({
  init: () => ({
    count: 0,
    text: "",
  }),
  view: state => {
    console.log(state);

    return (
      <div>
        <div>
          {state.count}
          <button onclick={Increment}>+</button>
          <button onclick={Decrement}>-</button>
          <button onclick={Reset}>Reset</button>
        </div>
        <div>
          <input type="text" value={state.text} oninput={NewValue} />
        </div>
      </div>
    );
  },
  container: document.body,
});
