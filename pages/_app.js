import "../styles/index.scss";
import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router'; // Import useRouter from next/router
import { AnimatePresence } from "framer-motion";
import { MousePosProvider } from "../components/mousePosContext";
import { ScrollPositionProvider } from "../components/scrollPosContext";
import { RouteProvider } from "../components/routeContext";
import Navigation from "../components/navigation/primary-navigation";
 import Preloader from "./preloader";
 import { getAllImages } from "../lib/api";
function MyApp({ Component, pageProps, router }) {


  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    const handleRouteChangeStart = (url) => {
      // Add a class to the body when the route change starts (page exit)
      document.body.classList.add('prevent-scroll');
    };

    const handleRouteChangeComplete = (url) => {
      // Remove the class when the route change is complete (new page entered)
      document.body.classList.remove('prevent-scroll');
    };

    // Subscribe to the router events
    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeComplete);

    // Remove event listeners when the component unmounts
    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
    };
  }, [router.events]); // Re-run the effect when the router events change




  useEffect(() => {
    window.addEventListener("load", () => {
      setIsLoading(false);
    });
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [isLoading]);





  const [allImages, setAllImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const images = await getAllImages();
        setAllImages(images || []);
        console.error("Got it:", allImages);

      } catch (error) {
        console.error("Error fetching images:", error);
        setAllImages([]); // Set an empty array or handle the error as needed
      }
    };

    fetchImages();
  }, []);


  return (
    <RouteProvider>
    <ScrollPositionProvider>
    <MousePosProvider>


        <>        
        <Navigation className="50"/>
        <AnimatePresence mode="wait">
        <Component {...pageProps} key={router.asPath} />
        </AnimatePresence>
        </>

        
 
    </MousePosProvider>
    </ScrollPositionProvider>
    </RouteProvider>
  );
}

export default MyApp;
