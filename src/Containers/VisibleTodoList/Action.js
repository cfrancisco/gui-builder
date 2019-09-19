
export const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    id,
});

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE',
    SHOW_HIGH: 'SHOW_HIGH',
    SHOW_MEDIUM: 'SHOW_MEDIUM',
    SHOW_LOW: 'SHOW_LOW',
};
