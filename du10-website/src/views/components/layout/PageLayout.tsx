import { useEffect } from "react";
import { Layout } from "antd";
import { useDispatch } from "react-redux";

import Header from "./header";
import Footer from "./footer";
import { readAccessToken } from "@utils/localStorage";
import { getUserReducer } from "@apps/redux/actions/auth";

const { Content } = Layout;

interface PageLayoutInterface {
  children: JSX.Element;
}

export default function PageLayout({ children }: PageLayoutInterface) {
  useEffect(() => {
    getUser();
  }, []);

  const dispatch = useDispatch();

  const getUser = async () => {
    const accessTokenLocalStorage = readAccessToken();
    if (accessTokenLocalStorage) {
      dispatch(await getUserReducer(accessTokenLocalStorage));
    }
  };

  return (
    <Layout id="app-layout">
      <Header></Header>
      <Content className="site-layout-background">
        <article className="app-content">{children}</article>
      </Content>
      <Footer></Footer>
    </Layout>
  );
}
