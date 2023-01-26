import React, {useEffect, useState} from 'react';
import InputMask from 'react-input-mask';
import {gsap} from "gsap";


type FormProps = {
    setIsSuccessWindowOpen: (arg:boolean) => void
}

const Form = ({setIsSuccessWindowOpen}:FormProps) => {



    const [name, setName] = useState<string>('')
    const [nameError, setNameError] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [emailError, setEmailError] = useState<string>('')
    const [phone, setPhone] = useState<string>('')
    const [phoneError, setPhoneError] = useState<string>('')
    const [message, setMessage] = useState<string>('')
    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(() => {
        if (!!isLoading) {
            gsap.to('.preloader', {duration: 0.5, opacity: 1, pointerEvents: 'auto'})
            return () => {
                gsap.to('.preloader', {duration: 0.5, opacity: 0, pointerEvents: 'none'})
            }
        }
    }, [isLoading])

    const postSend = () => {
        setIsSuccessWindowOpen(true)
        setTimeout(() => {setIsSuccessWindowOpen(false)}, 5000)
        setName('')
        setEmail('')
        setPhone('')
        setMessage('')
    }
    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault()
        setNameError('')
        setEmailError('')
        setPhoneError('')

        let errors = 0

        const phoneFormatError = 'Должен содержать 11 цифр',
            emailFormatError = 'Должен содержать " . " и "@"',
            requiredError = 'Поле необходимо заполнить'

        if (!name) {
            setNameError(requiredError)
            errors++
        }

        if (!email) {
            setEmailError(requiredError)
            errors++
        } else if (!email.includes('.') || !email.includes('@')) {
            setEmailError(emailFormatError)
            errors++
        }

        if (!phone) {
            setPhoneError(requiredError)
            errors++
        } else if (phone.includes('_')) {
            setPhoneError(phoneFormatError)
            errors++
        }

        if (!errors) {

            setIsLoading(true)

            // const body = {
            //     html: `
            //     <p><strong>Name</strong>: ${name}</p>
            //      <p><strong>Email</strong>: ${email}</p>
            //       <p><strong>Phone</strong>: ${phone}</p>
            //         ${!!message ? `<p> <strong> Message </strong>: ${message}</p>` : ''}`
            //     ,
            //     recipient: 'brajbas3@gmail.com',
            //     siteName: 'bart-group.com',
            // }
            //
            // fetch('https://mailer.testingplace.ru', {
            //     method: "POST",
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify(body)
            // }).then(() => {
            //     postSend()
            // }).finally(() => {
            //     setIsLoading(false)
            // })

            const formData = new FormData()

            formData.append('name', name)
            formData.append('email', email)
            formData.append('phone', phone)
            formData.append('comment', message)

            const xhr = new XMLHttpRequest();
            xhr.open('POST', '/send.php', true);
            xhr.send(formData);

            xhr.onload = function () {
                console.log(this)
                if (this.status == 200) {
                    postSend()
                } else {
                    console.log('Письмо не отправилось')
                }
                setIsLoading(false)
            };

        }
    }

    return (
        <form onSubmit={submitHandler} className={'mail__form form'}>

            <div className="form__preloader preloader">
                <div className="preloader__spinner">
                    <svg className={'preloader__icon'} viewBox={'-5 -5 50 50'} preserveAspectRatio="none">
                        <circle r={'20'} cy={'20'} cx={'20'} fill={'transparent'}>
                        </circle>
                    </svg>
                </div>

            </div>
            <div className="form__section">
                <label className={'form__label'} htmlFor="name">Введите ваше имя</label>
                <input value={name} onChange={e => setName(e.target.value)} placeholder={'Имя'} id={'name'} type="text"
                       className="text form__input"/>
                {!!nameError && <span className={' text form__error'}>{nameError}</span>}
            </div>
            <div className="form__section form__mail">
                <label className={'form__label'} htmlFor="email">Email</label>
                <input value={email} onChange={e => setEmail(e.target.value)} placeholder={'example@gmail.com'}
                       id={'email'} type="text" className="text form__input"/>
                {!!emailError && <span className={' text form__error'}>{emailError}</span>}
            </div>
            <div className="form__section form__phone">
                <label className={'form__label'} htmlFor="phone">Телефон</label>
                <InputMask value={phone} mask={'+ 7\\ (999) 999 99 99'} onChange={e => setPhone(e.target.value)}
                           placeholder={'+ 7 (999)-999-99-99'} id={'phone'} type="text"
                           className="text form__input"></InputMask>
                {!!phoneError && <span className={' text form__error'}>{phoneError}</span>}
            </div>
            <div className="form__section">
                <label className={'form__label'} htmlFor="message">Опишите ваш запрос</label>
                <textarea value={message} rows={5} onChange={e => setMessage(e.target.value)} placeholder={'Ваш запрос'}
                          id={'message'} className="text form__input form__textarea"/>
            </div>
            <button type={'submit'} className={'form__submit'}>Отправить</button>
        </form>
    );
};

export default Form;