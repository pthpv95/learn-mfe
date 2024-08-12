import { mount } from "marketing/MarketingApp";
import React from "react";

export default () => {
  let ref = React.useRef(null);

  React.useEffect(() => {
    mount(ref.current);
  }, []);

  return <div ref={ref} />;
};
