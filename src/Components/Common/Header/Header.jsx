import style from "./Header.module.scss";
import {Link} from "react-router-dom";
import Button from "@Components/Ui/Button/Button.jsx";
import { Dialog } from 'primereact/dialog';
import {useState} from "react";

export default function Header() {


    return (
        <>
            <header className={style['header']}>
                <div className="g-container">
                    <div className={style['header-container']}>
                        <Link to={`/`} className={style['logo']}>Akonsalt Finance</Link>
                        <nav className={style['nav']}>
                            <a href="#about" className={style['anchor-item']}>О компании</a>
                            <a href="#services" className={style['anchor-item']}>Услуги</a>
                            <a href="#contacts" className={style['anchor-item']}>Контакты</a>
                        </nav>
                        <div className={style['action-container']}>
                            <a href={`mailto: ${import.meta.env.VITE_EMAIL}`} className={style['btn-contact-us']}>Связаться с нами</a>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}