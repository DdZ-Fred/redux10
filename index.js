import expect from 'expect';
import deepfreeze from 'deep-freeze';

// Copy values of all properties from 1+ sources to target Object
// passed as first param
const toggleTodo = (todo) => Object.assign({}, todo, {
  completed: !todo.completed,
});


const testToggleTodo = () => {
  const todoBefore = {
    id: 0,
    text: 'Learn redux',
    completed: false,
  };
  const todoAfter = {
    id: 0,
    text: 'Learn redux',
    completed: true,
  };

  deepfreeze(todoBefore);

  expect(
    toggleTodo(todoBefore)
  ).toEqual(todoAfter);
};

testToggleTodo();
console.log('All tests passed');
