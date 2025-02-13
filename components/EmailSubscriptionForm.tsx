// components/EmailSubscriptionForm.js
import { Send } from "lucide-react";

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
      <label
        htmlFor="email"
        className="block mb-2 text-[18px] font-normal text-[#292929]"
      >
        Get in Touch:
      </label>
      <div className="w-full flex justify-center items-center">
        <input
          type="email"
          name="email"
          id="email"
          required
          placeholder="Your email address"
          className="w-10/12 p-2 mr-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-[1px] focus:ring-gray-600"
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="rounded-full p-3 text-white bg-gray-600 hover:bg-gray-700"
        >
          <Send className="h-[20px] w-[20px]" />
        </button>
      </div>
    </form>
  );
};

export default EmailSubscriptionForm;
