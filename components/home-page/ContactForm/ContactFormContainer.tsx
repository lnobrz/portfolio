import { FormEvent } from "react";
import ContactForm from "./ContactForm";

const ContactFormContainer = () => {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  return <ContactForm submitHandler={handleSubmit} />;
};

export default ContactFormContainer;
