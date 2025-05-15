import { ReactElement } from "react";
import { Routes, Route } from "react-router";
import { AuthLayout, MainLayout } from "@/layout";
import {
  Albums,
  Dashboard,
  Musics,
  Settings,
  Singers,
  CustomMenuPage,
} from "@pages/main";
import { SignIn, SignUp } from "@pages/auth";

const AppRoutingSetup = (): ReactElement => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Dashboard />} />
        <Route path="singers" element={<Singers />} />
        <Route path="musics" element={<Musics />} />
        <Route path="albums" element={<Albums />} />
        <Route path="/settings/">
          <Route path="" element={<Settings />} />
          <Route path="custom-menu" element={<CustomMenuPage />} />
        </Route>
      </Route>
      <Route path="auth/*" element={<AuthLayout />}>
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
      </Route>
    </Routes>
  );
};

export { AppRoutingSetup };
