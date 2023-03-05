import { Link as GatsbyLink } from "gatsby";

// Allows for links to easily reference external websites if required, in a reusable component
// uses the example found at:
// https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-link/#reminder-use-link-only-for-internal-links

const AdaptiveLink = ({
  children,
  to,
  activeClassName,
  partiallyActive,
  ...other
}) => {
  // This assumes that any internal link (intended for Gatsby)
  // will start with exactly one slash and not contain a file extension. Anything else is considered external.
  const internal = /^\/(?!\/)/.test(to);
  const file = /\.[0-9a-z]+$/i.test(to);

  // Use Gatsby Link for internal links, and <a> for others
  if (internal && !file) {
    return (
      <GatsbyLink
        to={to}
        activeClassName={activeClassName}
        partiallyActive={partiallyActive}
        {...other}
      >
        {children}
      </GatsbyLink>
    );
  }
  return (
    <a href={to} target="_blank" rel="noopener noreferrer" {...other}>
      {children}
    </a>
  );
};

export default AdaptiveLink;