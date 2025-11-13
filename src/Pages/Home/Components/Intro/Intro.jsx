import style from './Intro.module.scss';
import imgIntro from '@Img/intro-bc.png';

export default function Intro() {
    return (
        <section className={style['section-intro']} style={{backgroundImage: `url(${imgIntro})`}}>
            <div className={`g-container ${style['container-wrapper']}`}>
                <h1 className={style['heading']}>Финансовые решения <br/>на высшем уровне</h1>
                <p className={style['hint']}>Консалтинговая компания с экcпертным опытом</p>
            </div>
        </section>
    );
}