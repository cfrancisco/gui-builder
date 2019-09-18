import { combineReducers } from 'redux';
import todos from './Containers/AddTodo/Reducer';
import visibilityFilter from './Containers/VisibleTodoList/Reducer';

export default combineReducers({
    todos,
    visibilityFilter,
});
