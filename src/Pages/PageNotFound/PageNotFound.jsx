import style from "./PageNotFound.module.scss";

export default function PageNotFound() {
    return (
        <section className={style['section-page-not-found']}>
            <h2 className={style['title']}>404</h2>
        </section>
    );
}