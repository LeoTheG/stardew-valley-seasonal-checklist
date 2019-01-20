const checks = (state = {}, action) => {
    switch(action.type){
        case 'TOGGLE_CHECK':
        return {
            ...state,
            {
                checks: {
                    ...checks,
                }
            }
        }
    }
}