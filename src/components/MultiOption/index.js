import React from 'react';
import styles from './styles.module.scss';

const MultiOption = ({
    options,
    handleChange,
    activeIndex
}) => {

    const handleClick = (e, key) => {
        e.preventDefault();
        if(key !== activeIndex)
            handleChange(key);
    }

    return <div className={styles.container}>
        {
            options && options?.length > 0 &&
            options.map((option, key) => {
                return <div key={option.key} className={key === activeIndex ? styles.active : styles.option} onClick={(e) => handleClick(e, key)}>
                    {option.name}
                </div>;
            })
        }
    </div>
}

export default MultiOption;