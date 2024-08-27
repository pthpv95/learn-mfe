import { mount } from "marketing/MarketingApp";
import React from "react";
import { useHistory } from "react-router-dom";

export default () => {
  let ref = React.useRef(null);
  let history = useHistory();

  React.useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      onNavigate: ({ pathname: nextPath }) => {
        if (nextPath && nextPath !== history.location.pathname) {
          history.push(nextPath);
        }
      },
    });

    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref} />;
};
