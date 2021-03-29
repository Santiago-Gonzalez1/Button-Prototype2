import React from "react";

const Typography = ({ element: Text = "p", ...props }) => <Text {...props} />;

Typography.displayName = "Typography";

export default Typography;
