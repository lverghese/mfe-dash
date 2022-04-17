import { mount } from 'dashboard/DashboardApp';
import React, { useRef, useEffect } from 'react';



export default () => {
  const ref = useRef(null);
 

  useEffect(() => {
    mount(ref.current);
  }, []);
  
    //the empty array as the second argument means only try to run this function
    //when our marketingApp component is first rendered to the screen
  return <div ref={ref} />;
};
  
