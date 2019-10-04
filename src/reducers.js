import { combineReducers } from 'redux';
import todos from './Pages/TodoList/Containers/AddTodo/Reducer';
import visibilityFilter from './Pages/TodoList/Containers/VisibleTodoList/Reducer';

export default combineReducers({
    todos,
    visibilityFilter,
});
