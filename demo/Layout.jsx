import React from "react";
import PropTypes from "prop-types";

const Layout = ({ children }) => (
    <article style={{ margin: "1rem", maxWidth: "60rem" }}>{children}</article>
);

Layout.propTypes = {
    children: PropTypes.node,
};

export default Layout;
