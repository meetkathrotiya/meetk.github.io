import { useEffect, useRef, useState } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

const useLocomotiveScroll = (props) => {
  const { ref, smooth } = props;
  const [locomotiveScrollRef, setRef] = useState(null);

  useEffect(() => {
    if (ref.current) {
      import('locomotive-scroll').then((locomotiveModule) => {
        const scroll = new locomotiveModule.default({
          el: ref.current,
          smooth,
          lerp: 5,
          smartphone: {
            smooth: true,
          },
          tablet: {
            smooth: true,
          },
        });

        setRef(scroll);
      });
    }

    return () => {
      locomotiveScrollRef?.destroy();
    };
  }, [ref]);

  return [locomotiveScrollRef];
};

export default useLocomotiveScroll;