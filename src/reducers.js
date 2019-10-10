import { combineReducers } from 'redux';
import todos from './Pages/TodoList/AddTodo/Reducer';
import visibilityFilter from './Pages/TodoList/VisibleTodoList/Reducer';
import items from './Pages/Dashboard/Reducer';

export default combineReducers({
    todos,
    visibilityFilter,
    items,
});
