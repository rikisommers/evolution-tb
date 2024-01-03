import React from "react";

import { INLINES, BLOCKS, MARKS } from "@contentful/rich-text-types";

export const RichTextOptions = {
  renderMark: {
    [MARKS.BOLD]: (text) => <strong>{text}</strong>,
  },
  renderNode: {
    [INLINES.HYPERLINK]: (node, children) => {
      const { uri } = node.data;
      return (
        <a href={uri} className="text-sky-500 underline">
          {children}
        </a>
      );
    },
    [BLOCKS.HEADING_2]: (node, children) => {
      return <h2 className="text-2xl font-semibold mb-2">{children}</h2>;
    },
    [BLOCKS.HEADING_3]: (node, children) => {
      return <h3 className="text-xl font-semibold	mb-2">{children}</h3>;
    },
    [BLOCKS.HEADING_4]: (node, children) => {
      return <h4 className="text-lg font-semibold	mb-2">{children}</h4>;
    },
    [BLOCKS.HEADING_5]: (node, children) => {
      return <h5 className="text-lg font-semibold mb-2">{children}</h5>;
    },
    [BLOCKS.HEADING_6]: (node, children) => {
      return <small className="text-xs font-normal text-slate-200 mb-2">{children}</small>;
    },
    [BLOCKS.PARAGRAPH]: (node, children) => {
      return <p className="text-lg leading-loose font-medium mb-4">{children}</p>;
    },
    // [BLOCKS.UL_LIST]: (node, children) => {
    //   return <div className="text-slate-200">{children}</div>;
    // },
    // [BLOCKS.EMBEDDED_ASSET]: (node) => {
    //   const { gatsbyImageData, description } = node.data.target;
    //   return (
      
    //     <ContentfulImage
    //     key={img.title}
    //     width={2000}
    //     height={1000}
    //     alt={`Cover Image for ${img.title}`}
    //     src={img.url}
    //   />
    //   );
    // },
  },
  renderText: (text) => {
    return text.split("\n").reduce((children, textSegment, index) => {
      return [...children, index > 0 && <br key={index} />, textSegment];
    }, []);
  },
};
