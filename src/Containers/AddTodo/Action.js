let nextTodoId = 0;

const addTodo = (text, priority) => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text,
    priority,
});

export default addTodo;
