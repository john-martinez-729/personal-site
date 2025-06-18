import React from "react";
import { Alert } from "react-bootstrap";

export default function BannerAlert({ show, onClose, msg, variant }) {
  return (
    <Alert
      className="alert"
      dismissible
      transition
      show={show}
      onClose={onClose}
      variant={variant}
    >
      {msg}
    </Alert>
  );
}
