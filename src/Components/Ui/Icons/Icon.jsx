import style from "./Icon.module.scss";
import PropTypes from 'prop-types';

/**
 * Иконка с различными вариантами отображения.
 *
 * @param {object} props - Свойства иконки.
 * @param {string} [props.variant] - Вариант иконки.
 */
export default function Icon({variant = "", className = "", onClick = null, ...props}) {
    const handleClick = (event) => {
        if (onClick) onClick(event);
    };

    return (
        <i
            className={`${style['G-icon']} ${style[variant]} ${className}`}
            onClick={handleClick}
            {...props}
        ></i>
    );
}

Icon.propTypes = {
    className: PropTypes.string,
    variant: PropTypes.oneOf([
        'strategic-consulting',
        'risk-consulting',
        'financial-consulting',
    ])
};