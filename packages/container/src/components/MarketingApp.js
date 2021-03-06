import { mount } from 'marketing/MarketingApp';
import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default () => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nextPathname}) => {
        //this where we figure out what url the marketing app navigated to
        //then use that to update the browser history in container
        const { pathname } = history.location;

        //checking if path name is different than last pathname
        if( pathname !== nextPathname) {
          history.push(nextPathname);
        } 
      },
    });

    history.listen(onParentNavigate);

  }, []);
    //the empty array as the second argument means only try to run this function
    //when our marketingApp component is first rendered to the screen
  return <div ref={ref} />;
};
