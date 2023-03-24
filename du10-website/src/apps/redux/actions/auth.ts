import authApi from "@apps/api/auth";
import { removeItemLocalStorage } from "@utils/localStorage";
import { GET_USER, LOGOUT, FETCH_FAIL } from "../contant";

export const getUserReducer = async (accessToken: string) => {
  try {
    const userResponse = await authApi.getUser(accessToken);
    const user = userResponse?.data?.data || {};

    return {
      type: GET_USER,
      payload: { user, accessToken },
    };
  } catch (error: any) {
    return {
      type: FETCH_FAIL,
      payload: { message: "Get user fail!" },
    };
  }
};

export const logOutReducer = async (accessToken: string) => {
  try {
    const response = await authApi.logOut(accessToken);
    if (response?.data?.data && response?.data?.status === 200) {
      removeItemLocalStorage("accessToken");
    }

    return {
      type: LOGOUT,
    };
  } catch (error: any) {
    return {
      type: FETCH_FAIL,
      payload: { message: "Logout fail!" },
    };
  }
};
