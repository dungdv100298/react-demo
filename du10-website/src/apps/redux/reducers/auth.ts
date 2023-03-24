import { IUser } from "@globalTypes/globalTypes";
import { GET_USER, LOGOUT, FETCH_FAIL } from "../contant";

interface IAuthState {
  user: IUser | null;
  accessToken: string;
  success: boolean;
  messageError: string;
}

interface IAction {
  type: string;
  payload: any;
}

const initialState: IAuthState = {
  user: null,
  accessToken: "",
  success: false,
  messageError: "",
};

const authReducer = (state = initialState, action: IAction) => {
  const { type, payload } = action;
  switch (type) {
    case GET_USER:
      return {
        ...state,
        user: payload.user,
        accessToken: payload.accessToken,
        success: true,
        messageError: "",
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
        accessToken: null,
        success: true,
        messageError: "",
      };
    case FETCH_FAIL:
      return {
        ...state,
        success: false,
        messageError: payload.message,
      };
    default:
      return state;
  }
};

export default authReducer;
