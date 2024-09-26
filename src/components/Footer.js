import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footerInfo">
      <div className="aboutUs">
        <h2>About us : </h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet natus
          rem ratione at quaerat itaque sed, asperiores pariatur! Optio officia
          veniam rem accusantium labore porro dolore quibusdam qui rerum
          aliquid! Perspiciatis natus quasi earum. Assumenda consequatur,
          inventore quisquam maiores error quis quae aperiam enim sit iusto,
          iste dignissimos, possimus tempore est alias. Eveniet corrupti odit
          distinctio nihil culpa quae saepe?
        </p>
        <p>
          For more, take a look to <Link to={"/about"}>our story page</Link>.
        </p>
      </div>
      <h2>Follow us : </h2>

      <span className="social-links">
        <Link
          to={"https://instagram.com"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="images/instagram.jpeg"
            height={30}
            width={40}
            alt={"instagram"}
          />
        </Link>
        <Link
          to={"https://youtube.com"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="images/youtube.jpeg"
            height={30}
            width={40}
            alt={"YouTube"}
          />
        </Link>

        <Link to={"https://X.com"} target="_blank" rel="noopener noreferrer">
          <img src="images/X.jpeg" height={30} width={40} alt={"X"} />
        </Link>
      </span>

      <Link to={"/contact_us"} target="_blank" rel="noopener noreferrer">
        <img src="images/mail_Us.png" height={30} width={40} alt={"mail us"} />
        Contact us
      </Link>

      <div className="newsletter">
        <h2>Newsletter : </h2>
        <input type="email" name="" id="" placeholder="Email address" />
        <button type="submit">submit</button>
      </div>
      <h5>Copyrights all rights reserved</h5>
    </div>
  );
};

export default Footer;
