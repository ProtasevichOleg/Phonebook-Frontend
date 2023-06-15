const pendingReducer = state => ({
  ...state,
  isLoading: true,
});

const rejectedReducer = (state, action) => ({
  ...state,
  isLoading: false,
  error: action.payload,
});

const fetchContactsFulfilledReducer = (state, action) => ({
  ...state,
  isLoading: false,
  error: null,
  items: action.payload,
});

const addContactFulfilledReducer = (state, action) => ({
  ...state,
  isLoading: false,
  error: null,
  items: [action.payload, ...state.items],
});

const deleteContactFulfilledReducer = (state, action) => ({
  ...state,
  isLoading: false,
  error: null,
  items: state.items.filter(item => item.id !== action.payload.id),
});

export {
  pendingReducer,
  rejectedReducer,
  fetchContactsFulfilledReducer,
  addContactFulfilledReducer,
  deleteContactFulfilledReducer,
};
