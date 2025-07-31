import { MdEmail } from "react-icons/md"
import "./Contact.css"
import { useForm, ValidationError } from '@formspree/react';
import 'animate.css';
import { useEffect, useRef } from "react";
import Swal from "sweetalert2";
import Lottie from "lottie-react";
import EmailAnimation from "../../animation/ContactUs.json"


const Contact = () => {
    const [state, handleSubmit] = useForm("mdkdzyyo");
    const formRef = useRef(null);
    const prevSubmitting = useRef(false);

    useEffect(() => {
        // لما نكون كنا بنبعت (submitting true) وبقينا مش بنبعت (false) ونجح الإرسال
        if (prevSubmitting.current && !state.submitting && state.succeeded) {
            Swal.fire({
                title: "Thanks for your message. I'll get back to you soon!",
                icon: "success",
                confirmButtonColor: "#7c3aed",
                background: "#1f1f1f",
                color: "#fff",
                showClass: {
                    popup: 'swal2-show animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'swal2-hide animate__animated animate__fadeOutUp'
                }
            }).then(() => {
                formRef.current?.reset();
            });
        }

        // دايمًا نحفظ الحالة القديمة
        prevSubmitting.current = state.submitting;
    }, [state.submitting, state.succeeded]);

    return (
        <section className="contact">
            <div className="header-section">
                <h1 className="flex title"> <span className="flex"><MdEmail /></span> Contact Us</h1>
                <p className="sub-title">Contact us for more information and Get notified when I publish something new.</p>
            </div>
            <div className="footer-section flex">
                <form onSubmit={handleSubmit} ref={formRef}>
                    <div className="flex">
                        <label htmlFor="email">Email Address: </label>
                        <input type="email" name="email" id="email" required placeholder="Email Address" autoComplete="off" />
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                        />
                    </div>
                    <div className="flex">
                        <label htmlFor="message">Your message: </label>
                        <textarea name="message" id="message" required placeholder="Message" ></textarea>
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                        />
                    </div>
                    <button className="submit" type="submit" disabled={state.submitting}>
                        {state.submitting ? "Submitting..." : "Submit"}
                    </button>
                    {/* {state.succeeded && (
                        <p style={{ fontSize: "18px", marginTop: "1.7rem", color: "var(--title" }}>Your message has been successfully 👌</p>
                    )} */}
                </form>
                <div className="contact-animiation flex">
                    <Lottie style={{ width: "55%" }} animationData={EmailAnimation} />
                </div>
            </div>
        </section>
    )
}

export default Contact