import Link from "next/link";
import { motion, cubicBezier, useAnimationControls } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useState, useContext, useRef } from "react";
import { useScrollPosition } from "../scrollPosContext";
import { RouteContext } from "../routeContext";
import Audio from "./audio";
export default function Navigation() {
  const router = useRouter();

  const { routeInfo } = useContext(RouteContext);

  const { scrollPosition } = useScrollPosition();
  const [isActive, setIsActive] = useState(false);
  const [offset, setOffset] = useState(0);


  useEffect(() => {
    if (router.asPath !== router.route) {
      if( router.asPath === '/'){
        setOffset(20);
      }else if(router.asPath === '/posts'){
        setOffset(-50);
      }
        
    }
  }, [router.asPath, router.route]);

  useEffect(() => {
    if (scrollPosition > 200) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [scrollPosition]);

  const pages = [
    {
      id: "home",
      title: "Home",
      url: "/",
    },
    {
      id: "work",
      title: "Work",
      url: "/posts",
    },
    {
      id: "about",
      title: "About",
      url: "/bio",
    },
  ];


  const [activePage, setActivePage] = useState(pages[0].id);



  return (
    <>

      <motion.div
        className={`logo_wrapper ${isActive ? "active" : ""} ${
          router.asPath === "/" ? "text-white" : "bg-white text-black"
        }`}
      > 

      <div className="logo">
       <img src="/logo3.svg" viewBox="0 0 32 32"></img>
      </div>


        {router.asPath === "/" ? (
          <motion.span
            layoutId="title"
            className="logotext text-lg"
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
            Teaserbull
          </motion.span>
        ) : (
          <motion.span className="logotext text-lg text-black">
            - All Projects {offset}
          </motion.span>
        )}

  
      </motion.div>

   
   
      <div className="fixed top-6 right-6 z-50 goo">
      <motion.div
              initial={{
                scale: 0,
                width: 40,
                height: 40,
                x: 0,
              }}
              animate={{
                scale: 1,
                width: 60,
                x: 0,
              }}
              transition={{
                scale: {
                  duration: 0.6,
                  ease: [0.34, 1.56, 0.64, 1],
                },
                x: {
                  delay: 0.6,
                  duration: 0.9,
                  ease: [0.25, 1, 0.5, 1],
                },
                width: {
                  delay: 0.6,
                  duration: 0.9,
                  ease: [0.25, 1, 0.5, 1],
                },
              }}
              className="btn absolute right-1 overflow-hidden "
            >Buy/Lease</motion.div>
            <motion.div
              initial={{
                scale: 0,
                width: 40,
                height: 40,
                x: 0,
              }}
              animate={{
                scale: 1,
                width: 80,
                x: -80,
              }}
              transition={{
                scale: {
                  duration: 0.6,
                  ease: [0.34, 1.56, 0.64, 1],
                },
                x: {
                  delay: 0.6,
                  duration: 0.9,
                  ease: [0.25, 1, 0.5, 1],
                },
                width: {
                  delay: 0.6,
                  duration: 0.9,
                  ease: [0.25, 1, 0.5, 1],
                },
              }}
               className="btn absolute right-1 overflow-hidden"
            >
              <Link href={'#contact'}>
              Contact
              </Link>
              </motion.div>
     


      </div>
    </>
  );
}
