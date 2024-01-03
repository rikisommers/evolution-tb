import { motion, cubicBezier } from "framer-motion";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { RichTextOptions } from "./rich-text/rich-text";
import CoverImage from "./image/cover-image";
import FadeInWhenVisible from "./utils/fade-in-visible";
import TextAnimation from "./utils/text-animation";

export default function PageHeader({
  title,
  img,
  subtitle,
  content,
}) {

  return (
    <motion.div
    className="pt-32 px-8 md:px-16 lg:px-32"
    exit={{
      opacity: 0,
    }}
    transition={{
      easing: cubicBezier(0.35, 0.17, 0.3, 0.86),
      duration: 0.3,
      delay: 0,
    }}
  >
          <FadeInWhenVisible>


<div className="relative grid grid-cols-12 h-full items-end py-32  z-50">

  <div className="col-span-12 md:col-span-6 flex flex-col gap-6">

    
    <TextAnimation content={title && title} color={'text-white'}/>

    <h2 className="text-slate-400 font-light col-span-6 md:col-span-6 text-2xl text-left  text-balance">
    {subtitle}
    </h2>
  
  </div>

  <div className="gap-1 col-span-12 md:col-span-4 md:col-start-9 flex flex-col gap-6 text-sm font-bold text-pink-600">
        {content && (
        <>{documentToReactComponents(content.json, RichTextOptions)}</>
        )}
  </div>


</div>

</FadeInWhenVisible>

      <div className="h-vhh rounded-xl overflow-hidden bg-slate-900" >
        <CoverImage
          
          title={img && img.title}
          url={img && img.url}
          layout="landscape"
        />
      </div>
    </motion.div>
  );
}
