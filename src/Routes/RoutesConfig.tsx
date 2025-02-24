import { SignIn, SignUp } from "@/components/pages/auth";
import {
  Albums,
  Home,
  Settings,
  Singers,
  Musics,
} from "@/components/pages/main";

import { AuthLayout, MainLayout } from "../views/layout";

const mainRoutesConfig = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "", element: <Home /> },
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
