import { Button, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div className="min-h-screen mt-20">
      <div className=" flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        <div className="flex-1">
          {" "}
          <Link to={"/"} className="sm:text-xl font-bold  text-4xl">
            <span className="px-2 py-1 bg-gradient-to-b from-indigo-600 via-purple-400 to-blue-500 rounded-xl text-white">
              Azaan&apos;s
            </span>
            Blog
          </Link>
          <p>
            This is a demo project Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Repellendus laborum asperiores temporibus tempore!
            Fugiat veritatis tempore doloribus eveniet odit delectus itaque
            fuga, consectetur sapiente totam porro nisi quis, neque minus.
          </p>
        </div>
        <div className="flex-1">
          <form className="flex flex-col gap-2">
            <div>
              <Label value="Your Username" />
              <TextInput type="text" placeholder="Username" id="username" />
            </div>
            <div>
              <Label value="Your Email" />
              <TextInput type="text" placeholder="name@company.com" id="email" />
            </div>
            <div>
              <Label value="Your Password" />
              <TextInput type="text" placeholder="Password" id="password" />
            </div>
            <Button className="mt-4" gradientDuoTone={"purpleToPink"} type="submit">
              Sign Up
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account ?</span>
            <Link to="/sign-in" className="text-blue-500 underline">Sign In</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
