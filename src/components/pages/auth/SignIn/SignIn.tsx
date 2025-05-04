import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <>
      {/* <div className="w-full flex flex-col gap-[1rem] items-center self-stretch">
        <h2 className="text-2.5xl font-medium text-center text-gray-900">
          Sign In
        </h2>
        <span className="text-md font-regular text-gray-700">
          Need an account?{" "}
          <Link to="/auth/sign-up" className="text-primary">
            Sign up
          </Link>
        </span>
      </div>
      <form className="w-[30rem] flex flex-col items-stretch gap-[2rem] items form-auth">
        <div className="flex items-start justify-center gap-[1rem]">
          <Button
            as="button"
            state="Default"
            color="Light"
            variant="Light"
            size="Small"
            iconLeft={<Icon.Google />}
            text="Use Google"
            className="w-full"
          />
          <Button
            as="button"
            state="Default"
            color="Light"
            variant="Light"
            size="Small"
            iconLeft={<Icon.Apple />}
            text="Use Google"
            className="!bg-light-light !border-gray-300 w-full"
          />
        </div>

        <div className="flex justify-center items-center self-stretch gap-[0.8rem] ">
          <span className="flex h-[1px] gap-[1rem] flex-1 border border-gray-200"></span>
          <p className="text-xs text-gray-600 font-regular ">OR</p>
          <span className="flex h-[1px] gap-[1rem] flex-1 border border-gray-200"></span>
        </div>

        <Input.Label
          size="Large"
          type="email"
          variant="Outline"
          label="Email"
          name="email"
          placeholder="email@email.com"
        />

        <Input.Icon
          size="Large"
          type="password"
          variant="Outline"
          label="Password"
          name="password"
          placeholder=""
          iconRight={<i className="ki-filled ki-eye" />}
        />
        <Button
          state="Default"
          as="button"
          size="Large"
          color="Primary"
          text="Sign In"
        />
      </form> */}
    </>
  );
};

export { SignIn };
