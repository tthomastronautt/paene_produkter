import styles from "./button.module.css";

const Button = ({ title, className, onClick }) => {
    return (
        <button onClick={onClick} className={`${styles.button} ${className}`}>
            {title}
        </button>
    );
};

export default Button;