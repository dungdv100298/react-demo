import { axiosClient } from "./axiosClient";
import {
  IPostLoginGoogleResponse,
  IPayloadLoginGoogle,
} from "../../types/globalTypes";

interface IPostLoginDataResponse<T> {
  data: T;
}

const authApi = {
  loginGoogle(payload: IPayloadLoginGoogle) {
    const url: string = "/google/callback";
    return axiosClient.post<IPostLoginDataResponse<IPostLoginGoogleResponse>>(
      url,
      payload,
    );
  },
  getUser(accessToken: string) {
    const url: string = "/user";
    return axiosClient.get(url, {
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    });
  },
  logOut(accessToken: string) {
    const url: string = "/logout";
    return axiosClient.post(url, undefined, {
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    });
  },
};

export default authApi;
