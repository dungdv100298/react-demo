export type UserProps = {
  id: number;
  name: string;
  email: string;
};
export type AuthProps = {
  user: null | UserProps;
  access_token: null | string;
  refresh_token: null | string;
};

export type ResponseProps<T> = {
  data: T;
  message: string;
  statusCode: number;
};

export interface ProductCategoryProps {
  id: number;
  name: string;
}

export interface FormValueProps {
  values: { name: string };
}

export interface ErrorProps {
  message: string;
  errors: {
    [key: string]: string[];
  };
}

export interface PayloadLoginProps {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface ParentsProps {
  label: string;
  path: string;
}

export interface ChildrenProps {
  children: JSX.Element;
}

export interface AppBreadcrumbProps {
  pageName: string;
  parents?: ParentsProps[];
}

export interface PaginationProps {
  page: number;
  total: number | undefined;
  onChangePage: (page: number, pageSize: number) => void;
}

export interface HeaderPageProps {
  pageName: string;
  onSearch: (value: string) => void;
  openModalStore: () => void;
}

export interface DataListLayoutType
  extends ChildrenProps,
    AppBreadcrumbProps,
    PaginationProps,
    HeaderPageProps {}

export interface IPostLoginGoogleResponse {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  token_type: string;
}

export interface IPayloadLoginGoogle {
  access_token: string;
}

export interface IUser {
  uuid: string;
  id: number;
  name: string;
  code: string;
  email: string;
  avatar: string;
  department_id: number;
  team_id: number;
}
