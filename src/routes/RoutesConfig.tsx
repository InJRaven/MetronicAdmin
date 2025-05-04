import { SignIn, SignUp } from "@pages/auth";
import { Dashboard, Albums, Settings, Singers, Musics } from "@pages/main";

import { MainLayout } from "@/layout/MainLayout";
import { AuthLayout } from "@/layout/AuthLayout";

const mainRoutesConfig = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "", element: <Dashboard /> },
      { path: "singers", element: <Singers /> },
      { path: "musics", element: <Musics /> },
      { path: "albums", element: <Albums /> },
      { path: "settings", element: <Settings /> },
    ],
  },
];

const authRoutesConfig = [
  {
    path: "/auth/",
    element: <AuthLayout />,
    children: [
      { path: "sign-in", element: <SignIn /> },
      { path: "sign-up", element: <SignUp /> },
    ],
  },
];

export { mainRoutesConfig, authRoutesConfig };
