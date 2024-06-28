import { forwardRef } from "react"
import Button from "../button/Button"

const Modal = forwardRef (function Modal({ email }, ref) {
    return (
        <dialog ref={ref}>
            <h2>Thanks for subscribing to our newsletter</h2>
            <form method="dialog">
                <Button>Close</Button>
            </form>
        </dialog>
    )
})

export default Modal