import Highlight, { defaultProps } from "prism-react-renderer";
import theme from 'prism-react-renderer/themes/vsDark';

// Referenced from:
// https://prince.dev/prism-react-renderer
// https://paulie.dev/posts/2022/08/syntax-highlighting-with-gatsby-mdx-and-prism-react-renderer/

const CodeBlock = ({ children, className }) => {
  const language = className.replace(/language-/gm, "");

  return (
    <Highlight {...defaultProps}
    code={children}
    language={language}
    theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <code className={className} style={style}>
          {tokens.slice(0, -1).map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </code>
      )}
    </Highlight>
  );
};

export default CodeBlock;