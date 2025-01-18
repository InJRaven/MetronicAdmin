import { SignIn, SignUp } from "../Components/Pages/Auth";
import { Home } from "../Components/Pages/Main";
import { AuthLayout, MainLayout } from "../Views/layout";

const mainRoutesConfig = [
  {
    path: "/",
    element: <MainLayout />,
    children: [{ path: "", element: <Home /> }],
  },
];

const authRoutesConfig = [
  {
    path: "/auth/*",
    element: <AuthLayout />,
    children: [
      { path: "sign-in", element: <SignIn /> },
      { path: "sign-up", element: <SignUp /> },
    ],
  },
];

export { mainRoutesConfig, authRoutesConfig };
