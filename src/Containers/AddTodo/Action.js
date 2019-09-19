const addTodo = (text, priority, nextTodoId) => ({
    type: 'ADD_TODO',
    id: nextTodoId,
    text,
    priority,
});

export default addTodo;
