const React = require("react");

const HtmlAttributes = {
  className: "h-100"
};

const BodyAttributes = {
    className: "h-100 bg--dark"
};

exports.onRenderBody = (
  { setHtmlAttributes, setBodyAttributes }
) => {
  setHtmlAttributes(HtmlAttributes);
  setBodyAttributes(BodyAttributes);
};