// components/EmailSubscriptionForm.js
import { Label } from "@radix-ui/react-label";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";

const EmailSubscriptionForm = () => {
  return (
    <form
      action="https://api.web3forms.com/submit"
      method="POST"
      className="w-full mx-auto"
    >
      {/* Hidden Input for Access Key */}
      <input
        type="hidden"
        name="access_key"
        value="40ab18ad-905a-4df1-98c8-dca9ee99d671"
      />

      {/* Email Input */}
      <LabelInputContainer className="mb-4">
        <Label htmlFor="email" className="text-white">
          Email Address
        </Label>
        <Input id="email" placeholder="projectmayhem@fc.com" type="email" />
      </LabelInputContainer>

      <label
        htmlFor="email"
        className="block mb-2 text-[18px] font-normal text-white"
      >
        Get in Touch:
      </label>
      <div className="w-full flex justify-center items-center">
        {/* <input
          type="email"
          name="email"
          id="email"
          required
          placeholder="Your email address"
          className="w-10/12 p-2 mr-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-[1px] focus:ring-gray-600"
        /> */}

        {/* Submit Button */}
        <button
          className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
          type="submit"
        >
          <span className="text-neutral-700 dark:text-neutral-300 text-md">
            Submit
          </span>
          <BottomGradient />
        </button>
        {/* <button
          type="submit"
          className="rounded-full p-3 text-white bg-gray-600 hover:bg-gray-700"
        >
          <Send className="h-[20px] w-[20px]" />
        </button> */}
      </div>
    </form>
  );
};

export default EmailSubscriptionForm;
const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
