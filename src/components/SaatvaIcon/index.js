import React from 'react';
import MaterialIcon from 'material-icons-react';
import classnames from 'classnames';

import styles from './styles.module.css';

const SaatvaIcon = (props) => {
    const {
        name = 'dashboard',
        size = 36,
        className=null,
        badge = null
    } = props;

    return <div className={classnames(styles.saatvaIcon, className||"")}>
        {
            badge !==null && 
            <span className={styles.saatvaBage}>
                {badge}
            </span>
        }
        <MaterialIcon icon={name} size={size}/>
    </div>
}

export default SaatvaIcon;