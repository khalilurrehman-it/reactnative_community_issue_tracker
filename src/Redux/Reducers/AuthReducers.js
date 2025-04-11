const initialState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  isAuthLoading: true, // 👈 new
  error: null,
};

const AuthReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'AUTH_CHECK_STARTED': // 👈 new
      return {...state, isAuthLoading: true};

    case 'LOGIN_REQUEST':
      return {...state, loading: true};
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.payload,
        isAuthLoading: false,
      };
    case 'LOGIN_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload,
        isAuthLoading: false,
      };
    case 'SIGNUP_REQUEST':
      return {...state, loading: true};
    case 'SIGNUP_SUCCESS':
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.payload,
      };
    case 'SIGNUP_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload,
        isAuthLoading: false,
      };
    case 'LOGOUT':
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        isAuthLoading: false,
      };
    default:
      return state;
  }
};

export default AuthReducers;
