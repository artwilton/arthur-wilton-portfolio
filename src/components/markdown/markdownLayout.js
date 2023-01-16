import { MDXProvider } from "@mdx-js/react";
import { CodeBlock, InlineVideo } from "./";
import "../../styles/markdown.scss";

const components = {
  pre: (props) => (
    <pre {...props} className="markdown__code-block shadow-light" />
  ),
  code: ({ children, className }) => {
    return className ? (
      <CodeBlock className={className}>{children}</CodeBlock>
    ) : (
      <code className="markdown__inline-code">{children}</code>
    );
  },
  p: (props) => <p {...props} className="markdown__paragraph" />,
  InlineVideo: (props) => <InlineVideo {...props} className="my-3 my-md-4"/>
};

const MarkdownLayout = ({ children }) => (
  <MDXProvider components={components}>{children}</MDXProvider>
);

export default MarkdownLayout;
