import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AppstoreOutlined,
  BarChartOutlined,
  LogoutOutlined,
  RocketOutlined,
  UnorderedListOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, MenuProps, Popconfirm } from "antd";

import {
  readMenuOpenKeys,
  saveAccessToken,
  saveMenuOpenKeys,
  saveRefreshToken,
} from "../../../utils/localStorage";
import { useAppDispatch, useAppSelector } from "../../../apps/hooks";
import { logout } from "../../../apps/slices/authSlice";

const { Sider, Content } = Layout;

interface AppLayoutInterface {
  children: JSX.Element;
}

const items: MenuProps["items"] = [
  {
    label: <Link to="/">Home</Link>,
    key: "/",
    icon: <RocketOutlined />,
  },
  {
    label: <Link to="/product-category">Product category management</Link>,
    key: "/product-category",
    icon: <UnorderedListOutlined />,
  },
  {
    label: <Link to="/product">Product management</Link>,
    key: "/product",
    icon: <AppstoreOutlined />,
  },
  {
    label: <Link to="/order">Order management</Link>,
    key: "/order",
    icon: <BarChartOutlined />,
  },
];

export default function AppLayout({ children }: AppLayoutInterface) {
  const { user } = useAppSelector((state) => state.auth);

  const appDispatch = useAppDispatch();
  const getLocation = useLocation();
  const [current, setCurrent] = useState("");
  useEffect(() => {
    setCurrent(getLocation.pathname);
  }, [getLocation]);

  const [openKeys, setOpenKeys] = useState<string[]>(readMenuOpenKeys());
  const onClick: MenuProps["onClick"] = (e) => {
    if (e.keyPath.length > 1) {
      setOpenKeys(e.keyPath.slice(-1));
      saveMenuOpenKeys(e.keyPath.slice(-1));
    } else {
      setOpenKeys([]);
      saveMenuOpenKeys("");
    }
  };

  const onOpenChange: MenuProps["onOpenChange"] = (keys) => {
    setOpenKeys(keys);
    saveMenuOpenKeys(keys);
  };

  const handleLogout = () => {
    appDispatch(logout());
    saveAccessToken("");
    saveRefreshToken("");
  };

  return (
    <Layout id="app-layout">
      <Sider trigger={null} width={300}>
        <div className="logo">
          <Link to="/">
            <img src="/images/logo.png" alt="logo" />
          </Link>
          <div className="user_name">
            <Link to="/user-profile">
              <UserOutlined /> {user?.name}
            </Link>
          </div>
        </div>
        <Menu
          onClick={onClick}
          selectedKeys={current ? [current] : []}
          openKeys={openKeys}
          onOpenChange={onOpenChange}
          mode="inline"
          items={items}
        />

        <div className="logout">
          <Popconfirm
            placement="rightTop"
            title="Do you want to sign out?"
            onConfirm={handleLogout}
            okText="Yes"
            cancelText="No"
          >
            <Button size="large" ghost>
              <LogoutOutlined />
              Thoát
            </Button>
          </Popconfirm>
        </div>
      </Sider>
      <Layout className="site-layout">
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
          }}
        >
          <article className="app-content">{children}</article>
        </Content>
      </Layout>
    </Layout>
  );
}
