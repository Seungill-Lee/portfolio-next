import Image from 'next/image';
import scss from "./contact_us.module.scss";

export default function ContactUs() {
    return(
        <section id={scss.contact_us}>
            <h2>Contact Us</h2>
            <form className={scss.sendmail_form}>
                <input type="hidden" name="contact_number" />
                <fieldset>
                    <legend>이메일 문의 폼</legend>
                    <div className={`${scss.field} ${scss.username}`}>
                        <label htmlFor="sf_username">이름</label>
                        <input type="text" id="sf_username" name="sf_username" required />
                    </div>
                    <div className={`${scss.field} ${scss.email}`}>
                        <label htmlFor="sf_email">이메일주소</label>
                        <input type="email" id="sf_email" name="sf_email" required />
                    </div>
                    <div className={`${scss.field} ${scss.subject}`}>
                        <label htmlFor="sf_subject">제목</label>
                        <input type="text" id="sf_subject" name="sf_subject" required />
                    </div>
                    <div className={`${scss.field} ${scss.message}`}>
                        <label htmlFor="sf_message">내용</label>
                        <textarea id="sf_message" name="sf_message" cols="30" rows="10" required></textarea>
                    </div>
                    <div className={scss.btn_send}>
                        <button type="submit">Send</button>
                    </div>
                </fieldset>
            </form>
            <div className={scss.sendmail_result}>
                <div className={`${scss.sr_message} ${scss.ok}`}>
                    <div className={scss.ico}>
                        <Image src="/images/ico_sendmail_ok.svg" alt="" width={150} height={150} />
                    </div>
                    <p className={scss.message}>
                        메시지를 성공적으로 전송하였습니다. <br />
                        검토 후 빠른 시일내에 답변드리겠습니다.
                    </p>
                    <div className={scss.btn_set}>
                        <button type="button" className={scss.ok}>OK</button>
                    </div>
                </div>
                <div className={`${scss.sr_message} ${scss.error}`}>
                    <div className={scss.ico}>
                        <Image src="/images/ico_sendmail_error.svg" alt="" width={150} height={150} />
                    </div>
                    <p className={scss.message}>
                        메시지 전송에 오류가 발생하였습니다. <br />
                        다시 시도해주시기 바랍니다.
                    </p>
                    <div className={scss.btn_set}>
                        <button type="button" className={scss.return}>Return</button>
                    </div>
                </div>
            </div>
        </section>
    )
}