import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { PageHeader, Button, Modal } from "antd";
import { DownOutlined, MenuOutlined, LoginOutlined } from "@ant-design/icons";
import { useGoogleLogin } from "@react-oauth/google";
import { useDispatch, useSelector } from "react-redux";
import OutsideClickHandler from "react-outside-click-handler";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./style.scss";
import { IPayloadLoginGoogle } from "@globalTypes/globalTypes";
import { saveAccessToken } from "@utils/localStorage";
import { getUserReducer, logOutReducer } from "@apps/redux/actions/auth";
import { RootState } from "@apps/redux/reducers";
import { Menu } from "@components/menu";
import authApi from "@apps/api/auth";
import { notifyError, notifySuccess } from "@utils/helperFuntions";
import { LazyLoadImage } from "react-lazy-load-image-component";

const menus = [
  {
    label: "Home",
    icon: "",
    key: "home",
    url: "/",
    isActive: false,
  },
  // {
  //   label: "Service",
  //   icon: "",
  //   key: "service",
  //   url: "/",
  //   isActive: false,
  //   children: [
  //     {
  //       label: "DX Consulting",
  //       icon: "",
  //       key: "dxConsulting",
  //       url: "/",
  //     },
  //     {
  //       label: "Contract Development",
  //       icon: "",
  //       key: "contractDevelopment",
  //       url: "/",
  //     },
  //     {
  //       label: "Offshore Development Center (ODC)",
  //       icon: "",
  //       key: "odc",
  //       url: "/",
  //     },
  //     {
  //       label: "Blockchain and Web3",
  //       icon: "",
  //       key: "blockchain",
  //       url: "/",
  //     },
  //   ],
  // },
  // {
  //   label: "About us",
  //   icon: "",
  //   key: "aboutUs",
  //   url: "/about-us",
  //   isActive: false,
  // },
  {
    label: "News",
    icon: "",
    key: "news",
    url: "/news",
    isActive: false,
  },
  {
    label: "Organization",
    icon: "",
    key: "organization",
    url: "/organization",
    isActive: false,
  },
  {
    label: "Tools",
    icon: "",
    key: "tools",
    url: "/tool",
    isActive: false,
  },
  {
    label: "Study",
    icon: "",
    key: "study",
    url: "/study",
    isActive: false,
  },
  // {
  //   label: "Contributing",
  //   icon: "",
  //   key: "career",
  //   url: "/contributing",
  //   isActive: false,
  // },
];

const logo = "/images/logo_du10.svg";

const languageLogo = [
  {
    id: 1,
    language: "日本語",
    image: "/images/iconJP.svg",
    isActive: true,
  },
  {
    id: 2,
    language: "English (US)",
    image: "/images/iconUS.svg",
    isActive: false,
  },
];

export default function Header() {
  const [showMenuMobile, setShowMenuMobile] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [showLanguage, setShowLanguage] = useState(false);
  const [userDropdown, setUserDropdown] = useState(false);
  const [isLoginSuccess, setIsLoginSuccess] = useState(false);
  const [isLoginFail, setIsLoginFail] = useState(false);

  const { user, accessToken, success } = useSelector(
    (state: RootState) => state.auth,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    const pathname = window.location.pathname;
    const padthIndex = menus.findIndex((item) => item.url === pathname);
    menus[padthIndex].isActive = true;
  }, []);

  useEffect(() => {
    if (isLoginSuccess) notifySuccess("Đăng nhập thành công");
    if (isLoginFail) notifyError("Đăng nhập thất bại");
  }, [isLoginSuccess, isLoginFail]);

  const showModal = () => {
    const appLayout = document.getElementById("app-layout");
    if (appLayout) {
      appLayout.style.filter = "blur(6px)";
    }
    setShowMenuMobile(true);
  };

  const handleClose = () => {
    const appLayout = document.getElementById("app-layout");
    if (appLayout) {
      appLayout.style.filter = "none";
    }
    setShowMenuMobile(false);
    setShowSubMenu(false);
    setShowLanguage(false);
  };

  const clickMenu = (item: any) => {
    if (!item.isActive) {
      clearActiveMenu();
      item.isActive = true;
    }

    if (item.children) {
      setShowSubMenu(!showSubMenu);
    } else {
      handleClose();
    }
  };

  const clearActiveMenu = () => {
    menus.map((item) => (item.isActive = false));
  };

  const chooseLanguage = (item: any) => {
    languageLogo.map((item) => (item.isActive = false));
    item.isActive = true;
    handleClose();
  };

  const onHandleLoginGoogle = useGoogleLogin({
    onSuccess: async (codeResponse: any) => {
      if (codeResponse.access_token) {
        const payload: IPayloadLoginGoogle = {
          access_token: codeResponse.access_token,
        };
        const response = await authApi.loginGoogle(payload);
        const dataRes = response?.data?.data || {};
        if (dataRes.access_token) {
          saveAccessToken(dataRes.access_token);
          dispatch(await getUserReducer(dataRes.access_token));
          setIsLoginSuccess(true);
        }
      }
      handleClose();
    },
    onError: () => {
      setIsLoginFail(true);
    },
    flow: "implicit",
  });

  const onHandleLogout = async () => {
    setUserDropdown(false);
    dispatch(await logOutReducer(accessToken));
    setIsLoginSuccess(false);
    if (success) notifySuccess("Đăng xuất thành công");
    else notifyError("Đăng xuất thất bại");
  };

  const location = useLocation();

  return (
    <PageHeader
      className={`page-header w-full z-50 bg-[#FEF8FB] ${
        location.pathname === "/tool" ? "fixed" : ""
      }`}
    >
      <div className="md:container flex items-center justify-between">
        <div className="logo">
          <Link to="/">
            <LazyLoadImage src={logo} alt="logo" width={124} height={52} />
          </Link>
        </div>
        <div className="w-full hidden items-center md:flex">
          {/* Menu  */}
          <div
            style={{ width: "inherit" }}
            className="md:px-[3%] lg:pl-[8%] lg:pr-[5%]"
          >
            <Menu className="menu-header" items={menus} clickMenu={clickMenu} />
          </div>

          <div className="hidden md:flex items-center">
            {/* language  */}
            <div className="flex items-center md: mr-4 lg:mr-10">
              <div className="language-header relative cursor-pointer">
                <div className="flex items-center">
                  <div className="border-2 rounded-xl border-gray-400 w-[25px]">
                    <LazyLoadImage
                      src="/images/iconUS.svg"
                      alt=""
                      width={32}
                      height={32}
                    />
                  </div>
                  <DownOutlined className="language-header ml-2 text-[12px]" />
                </div>
                <div className="language-header-option absolute flex flex-col w-fit bg-white p-4 rounded-lg">
                  {languageLogo?.map((item: any, index: any) => {
                    return (
                      <div className="flex pr-5 pb-3 last:pb-0" key={index}>
                        <LazyLoadImage
                          src={item.image}
                          alt=""
                          width={24}
                          height={24}
                        />
                        <p className="pl-2 text-[#000] font-bold hover:text-[#db2f69]">
                          {item.language}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* icon login  */}

            {user && user.email ? (
              <OutsideClickHandler
                onOutsideClick={() => setUserDropdown(false)}
              >
                <div className="relative">
                  <LazyLoadImage
                    src={user.avatar}
                    alt="User dropdown"
                    className="w-10 h-10 max-w-none rounded-full cursor-pointer"
                    onClick={() => {
                      setUserDropdown(!userDropdown);
                    }}
                  />
                  {userDropdown && (
                    <div className="absolute top-full left-[-100px] 2xl:left-0 mt-2">
                      <div className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                        <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                          <div>{user.name}</div>
                          <div className="font-medium truncate">
                            {user.email}
                          </div>
                        </div>
                        <div className="py-1">
                          <div
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white cursor-pointer"
                            onClick={onHandleLogout}
                          >
                            Sign out
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </OutsideClickHandler>
            ) : (
              <LoginOutlined
                onClick={() => onHandleLoginGoogle()}
                className="w-10 text-[20px] cursor-pointer"
              />
            )}
          </div>
        </div>
        {user && user.email && <p className="md:hidden">{user.email}</p>}
        <Button
          type="text"
          shape="circle"
          icon={<MenuOutlined />}
          className="inline-block md:hidden !text-[#db2f69] !text-[20px]"
          onClick={showModal}
        ></Button>
        <Modal
          open={showMenuMobile}
          footer={null}
          onCancel={handleClose}
          style={{ top: 0, margin: 0, padding: 0, maxWidth: "100%" }}
          wrapClassName="modal-menu-header"
          maskStyle={{ background: "unset" }}
          bodyStyle={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
          }}
          width={"100%"}
        >
          <div className="absolute flex flex-col top-[10%] w-[83%]">
            {menus.map((item: any, index: any) => {
              return (
                <div key={index}>
                  <div className="flex items-center justify-between">
                    <Link
                      className={`${
                        item.isActive && "!text-[#db2f69]"
                      } text-[#5a5657] font-bold text-2xl py-1`}
                      key={index}
                      to={item.url}
                      onClick={() => clickMenu(item)}
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <DownOutlined
                        onClick={() => clickMenu(item)}
                        className={`${
                          !showSubMenu && "icon-show-menu"
                        } ml-2 text-[14px]`}
                      />
                    )}
                  </div>
                  {item.children &&
                    item.children.map((itemChild: any, indexChild: any) => {
                      return (
                        <div
                          style={{
                            transition:
                              "visibility 0s linear 0.33s, opacity 0.33s linear",
                          }}
                          className={` ${
                            !showSubMenu && "hidden"
                          } flex flex-col ml-6`}
                          key={indexChild}
                        >
                          <Link
                            className={`w-fit py-1 text-[#7c7979] hover:text-[#db2f69] font-medium text-base`}
                            to={itemChild.url}
                            onClick={handleClose}
                          >
                            {itemChild.label}
                          </Link>
                        </div>
                      );
                    })}
                </div>
              );
            })}
            <div className="flex items-center justify-between">
              <div
                onClick={() => setShowLanguage(!showLanguage)}
                className="text-[#5a5657] font-bold text-2xl py-1"
              >
                Language
              </div>
              <DownOutlined
                onClick={() => setShowLanguage(!showLanguage)}
                className={`${
                  !showLanguage && "icon-show-menu"
                } ml-2 text-[14px]`}
              />
            </div>
            {showLanguage &&
              languageLogo?.map((item: any, index: any) => {
                return (
                  <div className="flex pr-5 pb-3 last:pb-0 ml-6" key={index}>
                    <LazyLoadImage
                      className="w-[24px]"
                      src={item.image}
                      alt=""
                    />
                    <p
                      className={` ${
                        item.isActive && "!text-[#db2f69]"
                      } pl-4 text-[#7c7979] font-bold py-2`}
                      key={index}
                      onClick={() => chooseLanguage(item)}
                    >
                      {item.language}
                    </p>
                  </div>
                );
              })}
            <div className="flex items-center mt-6 cursor-pointer justify-center py-2 rounded-xl bg-[#DB2F69] active:bg-[#f184a9] text-white">
              <div className="font-bold text-base text-center">Sign in</div>
              <LoginOutlined
                onClick={() => onHandleLoginGoogle()}
                className="text-[20px] ml-4"
              />
            </div>
          </div>
        </Modal>
        <ToastContainer />
      </div>
    </PageHeader>
  );
}
