import React from "react";
import PropTypes from "prop-types";

type HTMLProps = {
  htmlAttributes: object;
  headComponents: Array<any>;
  bodyAttributes: object;
  preBodyComponents: Array<any>;
  body: string;
  postBodyComponents: Array<any>;
};

export default function HTML({
  htmlAttributes,
  headComponents,
  bodyAttributes,
  preBodyComponents,
  body,
  postBodyComponents,
}: HTMLProps) {
  return (
    <html {...htmlAttributes} lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=1, user-scalable=no"
        />
        <meta
          name="Description"
          content="Personal website of Niclas Lövdahl."
        ></meta>
        <title>Niclas Lövdahl</title>
        <script defer src="/js/p5.min.js" />
        {headComponents}
      </head>
      <body {...bodyAttributes}>
        {preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <script src="/js/sketch.js" />
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: body }}
        />
        {postBodyComponents}
      </body>
    </html>
  );
}
