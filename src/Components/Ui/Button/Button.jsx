import style from "./Button.module.scss";
import PropTypes from 'prop-types';
import Icon from "@Icons/Icon.jsx";

/**
 * Кнопка с различными вариантами оформления.
 *
 * @param {object} props - Свойства компонента.
 * @param {string} [props.type] - Тип.
 * @param {string} [props.variant] - Вариант оформления.
 * @param {string} [props.size] - Размер.
 * @param {boolean} [props.aspect] - Соотношение сторон 1:1.
 * @param {string} [props.className] - Кастомный класс.
 * @param {boolean} [props.disabled] - Блокирует доступ.
 * @param {string} [props.endIcon] - Иконка справа от контента.
 * @param {string} [props.startIcon] - Иконка справа от контента.
 * @param {function} [props.onClick] - Обработка клика.
 * @param {string} [props.children] - Содержимое кнопки.
 * @param {string} [props.props] - Другие кастомные атрибуты.
 */
export default function Button({
        type = "button",
        variant = "primary",
        size = "",
        aspect = false,
        className,
        disabled = false,
        endIcon = "",
        startIcon = "",
        onClick = null,
        children = "",
        ...props
    }) {
    const variantStyle = {
        "default": null,
        "primary": style["primary"],
        "primary-outline": style["primary-outline"],
        "secondary": style["secondary"],
        "secondary-outline": style["secondary-outline"],
        "link": style["link"],
        "success": style["success"],
        "warning": style["warning"],
        "error": style["error"]
    };

    const sizeStyle = {
        "xs": style["xs"],
        "sm": style["sm"],
        "md": style["md"],
        "lg": style["lg"],
        "xl": style["xl"],
        "xxl": style["xxl"]
    };

    const handleClick = (event) => {
        if (disabled) {
            if (disabled === false) {
                if (onClick) onClick(event);
            }
        } else {
            if (onClick) onClick(event);
        }
    };

    return (
        <button
            type={type}
            className={`${style['G-button']} ${aspect ? style['aspect'] : ''} ${variantStyle[variant]} ${sizeStyle[size]} ${className}`}
            disabled={disabled}
            onClick={handleClick}
            {...props}
        >
            {startIcon && <Icon variant={startIcon}/>}
            {children}
            {endIcon && <Icon variant={endIcon}/>}
        </button>
    );
}

Button.propTypes = {
    type: PropTypes.oneOf(['button', 'submit']),
    variant: PropTypes.oneOf(['default', 'primary', 'primary-outline', 'secondary', 'secondary-outline', 'link', 'success', 'warning', 'error']),
    size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', 'xxl']),
    aspect: PropTypes.bool,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    endIcon: PropTypes.string,
    startIcon: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.node
};