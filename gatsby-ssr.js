const React = require("react");

const BodyAttributes = {
    className: "bg--light"
};

exports.onRenderBody = (
  { setBodyAttributes }
) => {
  setBodyAttributes(BodyAttributes);
};