import React from 'react';

import styles from './avatar.styles.css';

const Avatar = ({
  src = 'https://img.icons8.com/color/64/000000/circled-user-male-skin-type-5.png',
}) => {
  return (
    <div className={styles.avatar} title="Avatar">
      <img src={src} alt="Avatar" />
    </div>
  );
};

export default Avatar;
