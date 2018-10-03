
export default function allTodos (state) {
  const arr = Object.keys(state.todos).map(
      key => state.todos[key]
  );
  return arr;

}
