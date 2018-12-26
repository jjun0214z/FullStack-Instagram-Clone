// imports

// actions

// action creators

// API actions
function getFeed(){
    return (dispatch, getState) => {
        const { user : { token } } = getState();
        fetch('/images/', {
            headers: {
                'Authorization': `JWT ${token}`
            }
        })
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(err => console.log(err));
    }
}


// initial state
const initialState = {

};

// reducer
function reducer(state = initialState, action){
    switch (action.type) {
        default:
            return state;
    }
}

// reducer functions

// exports
const actionCreators = {
    getFeed
};

export { actionCreators };

// export reducer by default
export default reducer;
