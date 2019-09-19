let nextTodoId = 0;

const addTodo = (text, priority) => {
    nextTodoId += 1;
    return {
        type: 'ADD_TODO',
        id: nextTodoId + 1,
        text,
        priority,
    };
};

export default addTodo;
