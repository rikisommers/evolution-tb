import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import { RichTextOptions } from "../rich-text/rich-text";
import ContentfulImage from "../image/contentful-image";

export const BlockArticle = ({ article }) => {
  return (
    <article className="grid grid-cols-12 gap-3" id={article.title}>

      <div className="col-start-1 col-span-12 md:col-start-1 md:col-span-4">
        {article.title && <h2 className="text-3xl mb-10 text-pink-400">{article.title}</h2>}
      </div>

      <div className="col-start-1 col-span-12 md:col-start-5 md:col-span-6">
        
        {article.content && (
          <p className="text-base mb-8 text-white">{article.content.content}</p>
        )}

        {article.contentRich && (
          <div className="text-white rich-text">
            {documentToReactComponents(
              article.contentRich.json,
              RichTextOptions
            )}
          </div>
        )}

      </div>

      {article.img &&
        article.img.map((img) => {
          return (
            <ContentfulImage
              key={img.title}
              width={2000}
              height={1000}
              alt={`Cover Image for ${img.title}`}
              src={img.url}
            />
          );
        })
      }

    </article>
  );
};

export default BlockArticle;
