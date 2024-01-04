import Link from "next/link";
import { motion, cubicBezier } from "framer-motion";
export default function Navigation() {

  return (
    <>

      <motion.div
        className="logo_wrapper bg-slate-800"
      > 

      <div className="logo">
       <img src="/tb-logo.svg" viewBox="0 0 32 32"></img>
      </div>

          <motion.span
            layoutId="title"
            className="logotext text-lg text-white"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 1,
              delay: 0,
              easing: cubicBezier(0.35, 0.17, 0.3, 0.86),
            }}
          >
            Teaserbull Company
          </motion.span>

      
      </motion.div>

   
          
      <div className="fixed bottom-8 md:bottom-auto md:top-8 right-8 z-50 flex gap-1 items-center">

              <a href="tel:027 503 1588"
                 className="rounded-lg bg-brand text-white py-2 px-4 overflow-hidden bg-slate-800"
              >
                  027 503 1588
              </a>
              <a href="mailto:teaserbull@outlook.com"
                 className="rounded-lg bg-brand text-white py-2 px-4 overflow-hidden bg-slate-800"
              >
              Contact
              </a>
              {/* <a 
              target="_blank"
              className="ml-1 rounded-lg bg-[#F0047F] text-white py-2 px-4 overflow-hidden"
              href={"https://docs.google.com/forms/d/e/1FAIpQLSd5tMR_mWZ9BpZ7Lz206JVpFlWUPKN4lbfVS87Gg2Rnpv08Kw/viewform"}>
              Lease/Buy
              </a> */}
      
      </div>
    </>
  );
}
