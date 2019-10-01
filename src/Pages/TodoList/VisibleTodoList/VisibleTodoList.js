import { connect } from 'react-redux';
import { toggleTodo, VisibilityFilters } from './Action';
import TodoList from '../../../Components/TodoList/TodoList';

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
    case VisibilityFilters.SHOW_ALL:
        return todos;
    case VisibilityFilters.SHOW_COMPLETED:
        return todos.filter((t) => t.completed);
    case VisibilityFilters.SHOW_ACTIVE:
        return todos.filter((t) => !t.completed);
    case VisibilityFilters.SHOW_HIGH:
        return todos.filter((t) => t.priority === 'high');
    case VisibilityFilters.SHOW_MEDIUM:
        return todos.filter((t) => t.priority === 'medium');
    case VisibilityFilters.SHOW_LOW:
        return todos.filter((t) => t.priority === 'low');
    default:
        throw new Error(`Unknown filter: ${filter}`);
    }
};

const mapStateToProps = (state) => ({
    todos: getVisibleTodos(state.todos, state.visibilityFilter),
});

const mapDispatchToProps = (dispatch) => ({
    toggleTodo: (id) => dispatch(toggleTodo(id)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(TodoList);
