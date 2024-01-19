import strings from "@/data/strings";
import { FormEvent } from "react";

type Props = {
  submitHandler: (event: FormEvent) => void;
};
const ContactForm = ({ submitHandler }: Props) => {
  return (
    <form onSubmit={submitHandler}>
      <div className="row controls">
        <div className="col-12">
          <div className="input-group-meta form-group mb-25">
            <input
              type="text"
              placeholder={strings.contactSection.form.nameLabel}
              name="name"
              required
              data-error="Name is required."
            />
            <div className="help-block with-errors" />
          </div>
        </div>
        <div className="col-12">
          <div className="input-group-meta form-group mb-50">
            <input
              type="email"
              placeholder={strings.contactSection.form.emailLabel}
              name="email"
              required
              data-error="Valid email is required."
            />
            <div className="help-block with-errors" />
          </div>
        </div>
        <div className="col-12">
          <div className="input-group-meta form-group mb-30">
            <textarea
              placeholder={strings.contactSection.form.messageLabel}
              name="message"
              required
              data-error="Please,leave us a message."
              defaultValue={""}
            />
            <div className="help-block with-errors" />
          </div>
        </div>
        <div className="col-12">
          <button
            type="submit"
            className="send-btn ripple-btn w-100 fw-500 tran3s text-uppercase text-white"
          >
            Send Message
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
