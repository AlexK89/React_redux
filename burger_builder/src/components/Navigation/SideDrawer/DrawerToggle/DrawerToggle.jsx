import React from 'react';
import styles from './DrawerToggle.scss';

const drawerToggle = (props) => {
    return (
      <div onClick={props.drawerToggle} className={styles.DrawerToggle}>
          <div></div>
          <div></div>
          <div></div>
      </div>
    )
};

export default drawerToggle;