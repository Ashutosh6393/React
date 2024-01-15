import React from "react";
import styles from "./Form.module.css";
import sideImage from "../../assets/contact.jpg";
import PrimaryButton from "../Buttons/PrimaryButton";
import { FaPhone } from "react-icons/fa6";
import { MdMarkUnreadChatAlt, MdOutlineChat } from "react-icons/md";
import SecondaryButton from "../Buttons/SecondaryButton";

const Form = () => {
    const formSubmitHandler = (event)=>{
        event.preventDefault();
      
    }

  return (
    <section>
      <div className={styles.form}>
        <div className={styles.contactButtons}>
          <PrimaryButton
            icon={<MdMarkUnreadChatAlt />}
            text={"Via Support Chat"}
          />
          <PrimaryButton icon={<FaPhone />} text={"Via Support Call"} />
        </div>
        <SecondaryButton icon={<MdOutlineChat />} text={"Via Email Form"} />
        <div className={styles.mainForm}>
          <form onSubmit={formSubmitHandler}>
            <div className={styles.inputFields}>
              <label htmlFor="name" required>
                Name
              </label>
              <input type="text" />
            </div>
            <div className={styles.inputFields}>
              <label htmlFor="email">E-Mail</label>
              <input type="email" required />
            </div>
            <div className={styles.inputFields}>
              <label htmlFor="name">Text</label>
              <textarea rows={5} required />
            </div>
            <PrimaryButton text={'Submit'} />
          </form>
        </div>
      </div>
      <div className={styles.sideImage}>
        <img src={sideImage} alt="contact-image" />
      </div>
    </section>
  );
};

export default Form;
