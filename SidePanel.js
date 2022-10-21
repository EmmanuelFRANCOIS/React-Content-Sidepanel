import { useState, useEffect } from "react";

const SidePanel = ({ side = 'right', width = 240, openedInit = false, togglerMode = 'arrows', shadow = false, children }) => {

  // Check arguments
  side        = side === 'left' ? side : 'right';
  width       = typeof width === 'number' && width > 200 && width < 100vw ? width : 240;
  openedInit  = typeof openedInit === 'boolean' ? openedInit : false;
  togglerMode = ['arrows', 'context', 'info'].includes(togglerMode) ? togglerMode : 'arrows';
  shadow      = typeof shadow === 'boolean' ? shadow : false;

  // Sidepanel state : opened or not
  const [opened, setOpened] = useState( openedInit );

  // Toggler button icon
  const togglerLeft  = <svg height="20" viewBox="0 0 24 24" style={{fill: '#ffffffcc'}} xmlns="http://www.w3.org/2000/svg"><path d="M 5.0000004,12.000001 16.333334,24 19,21.176471 10.333334,12.000001 19,2.8235296 16.333334,1.75e-7 Z" /></svg>;
  const togglerRight = <svg height="20" viewBox="0 0 24 24" style={{fill: '#ffffffcc'}} xmlns="http://www.w3.org/2000/svg"><path d="M 19,11.999999 7.6666663,2.9375e-7 5.0000003,2.8235293 13.666666,11.999999 5.0000003,21.176471 7.6666663,24 Z" /></svg>;
  const togglerMenu  = <svg height="20" viewBox="0 0 24 24" style={{fill: '#ffffffcc'}} xmlns="http://www.w3.org/2000/svg"><path d="m 9.7851565,-0.00195313 c -0.4345437,0 -0.7851563,0.41597003 -0.7851563,0.93359377 V 5.0625001 c 0,0.5176237 0.3506126,0.9355469 0.7851563,0.9355469 H 14.214844 C 14.649388,5.998047 15,5.5801238 15,5.0625001 V 0.93164064 C 15,0.4140169 14.649388,-0.00195313 14.214844,-0.00195313 Z m 0,9.00195333 c -0.4345437,0 -0.7851563,0.41597 -0.7851563,0.9335938 v 4.132813 C 9.0000002,14.58403 9.3506128,15 9.7851565,15 H 14.214844 C 14.649388,15 15,14.58403 15,14.066407 V 9.933594 C 15,9.4159702 14.649388,9.0000002 14.214844,9.0000002 Z m -0.048828,9.0019538 c -0.4345436,0 -0.7851562,0.417923 -0.7851562,0.935546 v 4.13086 c 0,0.517624 0.3506126,0.933594 0.7851562,0.933594 h 4.4296875 c 0.434544,0 0.785156,-0.41597 0.785156,-0.933594 V 18.9375 c 0,-0.517623 -0.350612,-0.935546 -0.785156,-0.935546 z" /></svg>;
  const togglerInfo  = <svg height="20" viewBox="0 0 24 24" style={{fill: '#ffffffcc'}} xmlns="http://www.w3.org/2000/svg"><path d="M 11.177734,0 C 10.525922,0 10,0.36749371 10,0.82421875 V 14.175781 C 10,14.632508 10.525922,15 11.177734,15 h 3.648438 C 15.477985,15 16,14.632508 16,14.175781 V 0.82421875 C 16,0.36749371 15.477985,0 14.826172,0 Z m 0,18 C 10.525922,18 10,18.623956 10,19.400391 v 3.199218 C 10,23.376044 10.525922,24 11.177734,24 h 3.648438 C 15.477985,24 16,23.376044 16,22.599609 V 19.400391 C 16,18.623956 15.477985,18 14.826172,18 Z" /></svg>;
  const togglerClose = <svg height="16" viewBox="0 0 24 24" style={{fill: '#ffffff7f'}} xmlns="http://www.w3.org/2000/svg"><path d="M 3.2109375,0.00195316 C 2.511451,0.0245128 2.1682465,0.76513949 1.6647878,1.1613841 c -0.52912,0.5848661 -1.19118778,1.071568 -1.62432951,1.727687 -0.18929213,0.8485263 0.72327639,1.2941768 1.18229011,1.859068 2.417938,2.4179379 4.8358756,4.8358755 7.2538138,7.2538139 -2.7588483,2.773816 -5.5488915,5.518952 -8.28823593,8.3107 -0.52058779,0.646529 0.14042313,1.230734 0.59287915,1.646287 0.66036968,0.643028 1.28796418,1.32297 1.96920188,1.942495 0.8348375,0.400912 1.3628893,-0.555934 1.9056167,-1.02035 2.4499456,-2.449945 4.8998901,-4.89989 7.349835,-7.349835 2.772518,2.757543 5.516343,5.546293 8.306794,8.28433 0.646529,0.520588 1.230734,-0.140423 1.646287,-0.592879 0.643028,-0.66037 1.322969,-1.287964 1.942494,-1.969202 C 24.302347,20.418661 23.345501,19.89061 22.881085,19.347882 20.432442,16.899239 17.983799,14.450596 15.535157,12.001953 18.292699,9.2294359 21.081449,6.48561 23.819486,3.6951595 24.340074,3.0486309 23.679063,2.4644247 23.226607,2.0488726 22.566237,1.405845 21.938643,0.72590219 21.257405,0.10637816 20.422568,-0.29453449 19.894516,0.66231078 19.351789,1.1267269 16.903145,3.5753699 14.454503,6.0240134 12.005859,8.4726562 9.2320775,5.7138421 6.4869753,2.9238309 3.6952617,0.1845224 3.5530642,0.08373341 3.3851495,0.01714883 3.2109375,0.00195316 Z" /></svg>;
  const togglers = {
    left: {
      opened: { arrows: togglerLeft,  context: togglerClose, info: togglerClose },
      closed: { arrows: togglerRight, context: togglerMenu,  info: togglerInfo  }
    },
    right: {
      opened: { arrows: togglerRight, context: togglerClose, info: togglerClose },
      closed: { arrows: togglerLeft,  context: togglerMenu,  info: togglerInfo  }
    }
  }
  // Toggler
  const getToggler = () => {
    return togglers[side][opened ? 'opened' : 'closed'][togglerMode];
  }
  const [toggler, setToggler] = useState( getToggler() );

  // Get correct styles depending on [side] and [opened] states
  const getStyles = () => {
    let styles;
    if ( side === 'left' ) {
      styles = {
        panel:   { left : opened ? 0 : - width,     width : width  },
        toggler: { left : opened ? width + 10 : 10, height: '24px' }
      }
    } else {
      styles = {
        panel:   { right : opened ? 0 : - width,     width : width  },
        toggler: { right : opened ? width + 10 : 20, height: '24px' }
      }
    }
    return styles;
  }
  const [styles, setStyles] = useState( getStyles() );
  
  // Toggle Sidepanel
  const toggleSidePanel = () => {
    setOpened( !opened );
    setToggler( getToggler() );
    setStyles( getStyles() );
  };

  // Initialize Sidepanel
  useEffect(() => {
    setOpened( !opened );
    setToggler( getToggler() );
    setStyles( getStyles() );
  }, []);

  return (
    <div className={ `sidePanel ${side} ${opened ? 'opened' : 'closed'} ${shadow ? 'shadowed' : ''}` } style={styles.panel}>
      <button onClick={ () => toggleSidePanel() } className="toggler" style={styles.toggler}>
        { toggler }
      </button>
      <div className="children">{children}</div>
    </div>
  );

};

export default SidePanel;