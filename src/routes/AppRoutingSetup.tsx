import { ReactElement } from "react";
import { Routes, Route } from "react-router";
import { AuthLayout, MainLayout } from "@/layout";
import {
  Albums,
  Dashboard,
  SidebarSetting,
  Musics,
  Settings,
  Singers,
} from "@pages/main";
import { SignIn, SignUp } from "@pages/auth";

const AppRoutingSetup = (): ReactElement => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Dashboard />} />
        <Route path="menu" element={<SidebarSetting />} />
        <Route path="singers" element={<Singers />} />
        <Route path="musics" element={<Musics />} />
        <Route path="albums" element={<Albums />} />
        <Route path="settings" element={<Settings />} />
      </Route>
      <Route path="auth/*" element={<AuthLayout />}>
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
      </Route>
    </Routes>
  );
};

export { AppRoutingSetup };
