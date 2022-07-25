import React from "react";

const Form = ( { text, email, placeholder } ) => {
  return (
    <div>
      <form>
        <input type="text" placeholder="Full name" />
        <input type="text" placeholder="Business name" />
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Telephone" />
      </form>
    </div>
  );
};

export default Form;
