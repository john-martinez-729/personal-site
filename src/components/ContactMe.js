import React, { useState } from "react";
import { Modal, FormControl, Button } from "react-bootstrap";
import emailjs from "emailjs-com";
import { BannerAlert } from "./";

export default function ContactMe({ show, handleClose }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");

  const [showAlert, setShowAlert] = useState(false);
  const handleHideAlert = () => setShowAlert(false);

  const [msg, setMsg] = useState("");
  const [variant, setVariant] = useState("info");

  const serviceid = "service_s19buxb";
  const templateid = "template_ndwekxj";
  const userid = "user_ibq7UJowBlH97PiMX5u9q";

  const successMsg = "Your message has been sent. Thanks for reaching out! :)";
  const failMsg =
    "Your message failed to send. Please feel free to contact me directly using the email listed on my resume. :)";

  const templateParams = {
    from_name: name,
    to_name: "John",
    message: notes,
    reply_to: email,
  };

  function toggleAlert(msg, variant) {
    setShowAlert(true);
    setMsg(msg);
    setVariant(variant);
    setTimeout(() => {
      setShowAlert(false);
      setMsg("");
      setVariant("info");
    }, 3000);
  }

  function send() {
    emailjs.send(serviceid, templateid, templateParams, userid).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        toggleAlert(successMsg, "info");
      },
      (err) => {
        console.log("FAILED...", err);
        toggleAlert(failMsg, "warning");
      }
    );
  }

  const handleChangeName = (e) => setName(e.target.value);
  const handleChangeNotes = (e) => setNotes(e.target.value);
  const handleChangeEmail = (e) => setEmail(e.target.value);

  const disabled = !name || !notes || !email ? true : false;

  return (
    <Modal show={show} onHide={handleClose}>
      <BannerAlert
        show={showAlert}
        onClose={handleHideAlert}
        msg={msg}
        variant={variant}
      />
      <Modal.Header closeButton>
        <Modal.Title>Contact Me</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormControl
          className="contact-form"
          placeholder="Name..."
          onChange={handleChangeName}
        />
        <FormControl
          className="contact-form"
          placeholder="Email..."
          onChange={handleChangeEmail}
        />
        <FormControl
          className="contact-form"
          placeholder="Message..."
          as="textarea"
          onChange={handleChangeNotes}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button className="outline-btn" onClick={send} disabled={disabled}>
          Send
        </Button>
        <Button className="outline-btn" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
