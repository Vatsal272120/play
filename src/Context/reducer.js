const initialState = {
  user: null,
  userConversations: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      };

    case 'SET_CONVERSATION':
      return {
        ...state,
        userConversations: [
          ...state.userConversations,
          action.userConversations,
        ],
      };

    default:
      return state;
  }
};

export { initialState, reducer };
