import { lazy } from "react";

export const routeConfig = [
  {
    id: "HomePage",
    path: "/",
    component: lazy(
      () => import(/* webpackPrefetch: true */ "../views/pages/home/HomePage"),
    ),  
    isProtected: false,
  }
  // {
  //   id: "NewsPage",
  //   path: "/news",
  //   component: lazy(
  //     () => import(/* webpackPrefetch: true */ "@pages/news/News"),
  //   ),
  //   isProtected: false,
  // },
  // {
  //   id: "NewDetailPage",
  //   path: "/news/:id",
  //   component: lazy(
  //     () => import(/* webpackPrefetch: true */ "@pages/news/Detail"),
  //   ),
  //   isProtected: false,
  // },
  // {
  //   id: "StudyPage",
  //   path: "/study",
  //   component: lazy(
  //     () => import(/* webpackPrefetch: true */ "@pages/study/StudyPage"),
  //   ),
  //   isProtected: false,
  // },
  // {
  //   id: "ToolPage",
  //   path: "/tool",
  //   component: lazy(
  //     () => import(/* webpackPrefetch: true */ "@pages/tool/AboutUsPage"),
  //   ),
  //   isProtected: false,
  // },
  // {
  //   id: "OrganizationPage",
  //   path: "/organization",
  //   component: lazy(
  //     () =>
  //       import(
  //         /* webpackPrefetch: true */ "@pages/organization/OrganizationPage"
  //       ),
  //   ),
  //   isProtected: false,
  // },
];
