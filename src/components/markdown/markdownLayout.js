import { MDXProvider } from "@mdx-js/react";
import { CodeBlock, InlineVideo } from "./";
import "../../styles/markdown.scss";

const components = {
  pre: (props) => (
    <pre {...props} className="markdown__code-block shadow-light my-4" />
  ),
  code: ({ children, className }) => {
    return className ? (
      <CodeBlock className={className}>{children}</CodeBlock>
    ) : (
      <code className="markdown__inline-code">{children}</code>
    );
  },
  InlineVideo: (props) => <InlineVideo {...props}/>
};

const MarkdownLayout = ({ children }) => (
  <div className="markdown mx-auto">
    <MDXProvider components={components}>{children}</MDXProvider>
  </div>
);

export default MarkdownLayout;
