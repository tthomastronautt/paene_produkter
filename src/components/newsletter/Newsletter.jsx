import styles from './newsletter.module.css';
import { useEffect, useRef, useState } from 'react';
import Button from "../button/Button"
import Modal from '../modal/Modal';

const Newsletter = () => {
    const [inputValue, setInputValue] = useState("");

    const inputRef = useRef();
    const dialog = useRef(null);

    const handleInputChange = (event) => {
        setInputValue(event.target.value)
    };

    const handleSubmit = (event) => {
        event.preventDefault()
        dialog.current.showModal();
    };

    useEffect(() => {
        inputRef.current.focus()
    }, []);

    return (
        <section>
            <Modal />
            <form className={styles.form} onSubmit={handleSubmit}>
                <label>Your email: </label>
                <input required type="email" value={inputValue} ref={inputRef} onChange={handleInputChange} />
                <Button type="submit" title="Subscribe" />
            </form>
        </section>
    );
};

export default Newsletter;