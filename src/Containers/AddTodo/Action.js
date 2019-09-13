let nextTodoId = 0;

export const addTodo = (text, priority) => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text,
    priority
});
