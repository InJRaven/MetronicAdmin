import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-light-auth bg-auth-light dark:bg-auth-dark bg-no-repeat bg-center bg-cover">
      <main className="flex items-start p-[4rem] flex-col gap-[3rem] rounded-[1.2rem] border border-gray-200 bg-light shadow-light-widget dark:shadow-dark-widget">
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayout;
