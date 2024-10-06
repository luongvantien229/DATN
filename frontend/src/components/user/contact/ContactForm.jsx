
import { Link } from "react-router-dom";

export default function ContactMap() {
  return (
    <div className="row">
      <div className="col-xl-8 col-lg-10 ml-auto mr-auto">
        <div className="contact-from-area padding-20-row-col wow tmFadeInUp">
          <h3>Hãy hỏi chúng tôi bất cứ điều gì ở đây</h3>
          <form
            className="contact-form-style text-center"
            id="contact-form"
            action="https://rundemo.moveaddons.com/medizin/assets/mail-php/mail.php"
            method="post"
          >
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="input-style mb-20">
                  <input name="name" placeholder="Tên" type="text" />
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="input-style mb-20">
                  <input name="email" placeholder="Email của bạn" type="email" />
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="input-style mb-20">
                  <input name="telephone" placeholder="Số điện thoại của bạn" type="tel" />
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="input-style mb-20">
                  <input name="subject" placeholder="Chủ đề" type="text" />
                </div>
              </div>
              <div className="col-lg-12 col-md-12">
                <div className="textarea-style mb-30">
                  <textarea name="message" placeholder="Tin nhắn"></textarea>
                </div>
                <button className="submit submit-auto-width" type="submit">
                  Gửi tin nhắn
                </button>
              </div>
            </div>
          </form>
          <p className="form-messege"></p>
        </div>
      </div>
    </div>
  );
}

