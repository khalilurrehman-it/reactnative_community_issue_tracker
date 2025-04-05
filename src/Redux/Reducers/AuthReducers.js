const initialState = {
    user: null,
    isAuthenticated: false,
    loading: false,
    error: null,
  };
  
  const AuthReducers = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_REQUEST':
        return { ...state, loading: true };
      case 'LOGIN_SUCCESS':
        return {
          ...state,
          loading: false,
          isAuthenticated: true,
          user: action.payload,
        };
      case 'LOGIN_FAILURE':
        return { ...state, loading: false, error: action.payload };
      case 'SIGNUP_REQUEST':
        return { ...state, loading: true };
      case 'SIGNUP_SUCCESS':
        return {
          ...state,
          loading: false,
          isAuthenticated: true,
          user: action.payload,
        };
      case 'SIGNUP_FAILURE':
        return { ...state, loading: false, error: action.payload };
      case 'LOGOUT':
        return { ...state, isAuthenticated: false, user: null };
      default:
        return state;
    }
  };
  
  export default AuthReducers;
  