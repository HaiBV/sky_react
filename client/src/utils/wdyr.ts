/** @jsxImportSource @welldone-software/why-did-you-render */
import React from "react";

// TODO: using wdyr to debug?
// if (process.env.NODE_ENV === "development") {
if (true) {
	console.log('wdyr')
  const whyDidYouRender = require("@welldone-software/why-did-you-render");
  whyDidYouRender(React, {
    trackAllPureComponents: true,
  });
}
