import "./Input.css";

function Input(props) {
  function changeHandler(event) {
    const enteredText = event.target.value;
    props.onInput(enteredText);
  }

  function submitHandler(event) {
    event.preventDefault();
    props.onAdd();
  }
  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        onChange={changeHandler}
        value={props.value}
        required
      />
      <button>Add</button>
    </form>
  );
}

export default Input;
