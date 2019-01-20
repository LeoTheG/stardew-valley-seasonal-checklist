// given item season, category, and name
const checks = (state = {}, action) => {
    switch (action.type) {
        case 'TOGGLE_CHECK':
            return {
                ...state,
                checks: {
                    ...state.checks,
                    [action.season]: {
                        ...state.checks[action.season],
                        [action.category]: {
                            ...state.checks[action.season][action.category],
                            [action.name]: {
                                ...state.checks[action.season][action.category][action.name],
                                checked: !state.checks[action.season][action.category][action.name].checked
                            }
                        }
                    }
                }
            }
    }
}