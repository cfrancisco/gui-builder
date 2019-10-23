const items = (state = [], action) => {
    switch (action.type) {
    case 'DASHBOARD':
        return [
            ...state,
            {
                items: action.items,
            },
        ];
    default:
        return state;
    }
};

export default items;
