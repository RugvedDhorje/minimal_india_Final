import { motion } from "framer-motion";
export function CompanyLogo() {
  return (
    <div className="w-full max-w-screen-2xl mx-auto h-auto bg-gradient-to-r from-[#130C0B] to-[#0C0807]">
      <h4 className="text-white text-[24px] text-center pb-6">
        Trusted by Industry Leaders
      </h4>
      <div className="w-full mx-auto flex items-center justify-evenly gap-x-3 py-6 bg-black rounded-full overflow-hidden">
        <motion.img
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5 }}
          src="/companyLogo.png"
          alt="Logo 1"
          className="h-[80px] w-auto"
        />
        <motion.img
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5 }}
          src="/companyLogo.png"
          alt="Logo 2"
          className="h-[80px]  w-auto"
        />
        <motion.img
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5 }}
          src="/companyLogo.png"
          alt="Logo 3"
          className="h-[80px]  w-auto"
        />
        <motion.img
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5 }}
          src="/companyLogo.png"
          alt="Logo 4"
          className="h-[80px]  w-auto"
        />
        <motion.img
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5 }}
          src="/companyLogo.png"
          alt="Logo 5"
          className="h-[80px]  w-auto"
        />
      </div>
    </div>
  );
}
