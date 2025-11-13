import style from "./SectionName.module.scss";

export default function SectionName({children, className = ""}) {
    return (
        <h2 className={`${style['heading']} ${className}`}>{children}</h2>
    );
}