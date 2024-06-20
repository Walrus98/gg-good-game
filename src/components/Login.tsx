import React from "react";
import { Checkbox, Input } from "@nextui-org/react";
import { EyeFilledIcon } from "../assets/EyeFilledIcon";
import { EyeSlashFilledIcon } from "../assets/EyeSlashFilledIcon";
import { Button } from "@nextui-org/react";
import { GoogleIcon } from "../assets/GoogleIcon";

export default function Login() {

    const [isVisible, setIsVisible] = React.useState(false);

    const toggleVisibility = () => setIsVisible(!isVisible);

    return (
        <div className="flex w-full max-w-sm flex-col gap-4 rounded-large bg-content1 px-8 py-6 shadow-small">
            <p className="pb-4 text-left text-3xl font-semibold">Log In
                <span aria-label="emoji" className="ml-2" role="img">👋</span>
            </p>
            <form className="flex flex-col gap-3">
                <Input type="email" label="Email" variant="bordered" placeholder="Enter your email" />
                <Input
                    label="Password"
                    variant="bordered"
                    placeholder="Enter your password"
                    endContent={
                        <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                            {isVisible ? (
                                <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                            ) : (
                                <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                            )}
                        </button>
                    }
                    type={isVisible ? "text" : "password"}
                    className="max-w-xs"
                />
                <div className="flex items-center justify-between px-1 py-2">
                    <Checkbox defaultSelected size="sm">Remember me</Checkbox>
                    <a className="relative inline-flex items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-small no-underline hover:opacity-80 active:opacity-disabled transition-opacity text-default-500" tabIndex={0} role="link" href="#">Forgot password?</a>
                </div>
                <Button color="primary">
                    Log In
                </Button>
            </form>

            <div className="flex items-center gap-4 py-2">
                <hr className="bg-divider border-none w-full h-divider flex-1" role="separator" />
                <p className="shrink-0 text-tiny text-default-500">OR</p>
                <hr className="bg-divider border-none w-full h-divider flex-1" role="separator" />
            </div>

            <Button variant="bordered" startContent={<GoogleIcon />}>
                Continue with Google
            </Button>
        </div>
    );
}
