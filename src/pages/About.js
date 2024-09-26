import React from "react";
import Footer from "../components/Footer";
import Layout from "../components/Layout";

const text = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia cum ea
  cupiditate! Perspiciatis numquam enim nam quaerat repudiandae laboriosam
  tempora quis distinctio praesentium vitae veritatis accusamus dolores, eum
  voluptas! Veritatis. Cupiditate voluptate temporibus in consectetur et odio
  dolorum, repudiandae libero sequi aperiam officiis nostrum vero quod cumque.
  Asperiores maxime dolor soluta vel nisi sunt vitae impedit ipsum, nemo
  accusantium distinctio! Tempora veniam ipsa commodi ducimus consectetur,
  repudiandae voluptatibus! Sed alias eius, fugit maiores debitis laborum eos ex
  dicta provident fuga nihil accusantium assumenda, esse, ullam facere deleniti
  commodi reiciendis eaque? Est nihil blanditiis corporis recusandae repudiandae
  quas atque soluta at distinctio labore, maxime minus ipsam quia voluptate
  veniam vitae omnis iure quis? Nulla ex amet nobis dolorem. Error, odit
  aperiam. Adipisci numquam excepturi unde ipsum voluptatem non, repudiandae
  aspernatur id, veniam quasi quo! Debitis cumque modi minima ullam, quibusdam
  ipsum fuga obcaecati veniam reprehenderit et. Amet pariatur deserunt sequi
  quasi. Perspiciatis rem facere veniam fugit obcaecati, in impedit distinctio
  placeat, natus corporis, omnis iusto sapiente rerum. A repellendus numquam,
  inventore ut illo pariatur, non eius quod aperiam placeat eligendi
  necessitatibus? Libero enim facere deserunt unde maiores, ullam cupiditate
  alias non dolores! Optio alias nostrum atque doloremque, molestiae velit, hic
  iusto ratione fugit veritatis delectus distinctio ipsam accusamus? Dolorem,
  facilis sed! Nesciunt tempora excepturi corporis molestiae quo voluptate
  impedit, natus placeat eveniet ea reiciendis sit in ipsam repudiandae, quidem
  dicta vero commodi reprehenderit alias, velit similique! Sunt architecto
  voluptas doloribus pariatur? Ipsam non consectetur molestias quae earum fugit
  illum voluptatum eius, itaque enim, excepturi blanditiis aspernatur libero,
  maxime ratione magni temporibus eos sit quisquam molestiae vero atque. Facilis
  ad reprehenderit placeat. Quia, asperiores unde quasi magni cupiditate quam!
  Illo rem fugiat placeat, labore obcaecati maxime. Aspernatur deserunt eligendi
  distinctio sunt! Quidem repudiandae facere amet ex sequi, et cumque culpa
  eaque. Fugiat! Ipsum, distinctio placeat voluptatum cupiditate, dolor ipsa,
  voluptates beatae ex quibusdam commodi quas nihil molestiae dignissimos
  ducimus temporibus ullam quaerat maiores corporis nemo suscipit? Numquam
  voluptatibus suscipit ullam saepe animi. Maxime ipsum reprehenderit eaque
  harum incidunt vel saepe, modi expedita quam placeat mollitia dolor
  accusantium natus consequuntur veritatis voluptates ducimus iusto aliquam
  quisquam eius magnam doloremque asperiores in qui! Cum! Eum, nostrum!
  Doloribus laudantium sint hic suscipit dolore, modi assumenda debitis minus a
  ut, unde ipsam quaerat ad sequi nam? Ea quae fugit ipsa aperiam dolor in
  deserunt nihil quod? Repellat corporis itaque voluptates quia maxime, quasi
  sunt delectus quod natus porro necessitatibus nemo possimus rem quae nam quam
  magnam ea, blanditiis ad non magni asperiores! Cum, fuga quisquam. Nobis.
  Voluptatem ullam labore minus aliquam eos ab corporis quibusdam impedit!
  Repudiandae, fugit! Quis atque inventore delectus doloremque enim, unde quasi
  fugit eligendi ipsum vel consectetur nemo. Reiciendis fuga est illum. Rerum
  ratione est labore aperiam. Nam fuga exercitationem omnis odio, illo
  dignissimos vel repellat commodi dicta velit perspiciatis praesentium
  accusantium suscipit voluptatibus eius molestiae corrupti, nisi ratione,
  asperiores magnam maiores. Quas impedit magnam pariatur consequuntur
  recusandae voluptate nemo minus, voluptates facere ea ratione odit cupiditate
  nulla eius nobis eos. Ut voluptate ipsum officiis in laboriosam temporibus,
  excepturi aut quisquam delectus! Necessitatibus repudiandae praesentium atque
  assumenda. Quia perspiciatis amet tempora magnam repellendus suscipit quidem
  corporis vero beatae a distinctio earum aliquam neque nostrum omnis, fugit
  rem, similique esse, excepturi facilis impedit. Deserunt fugiat officia
  repellendus totam placeat explicabo sunt ullam enim ipsa aliquam ducimus
  voluptatem unde quaerat dolores, blanditiis vitae atque voluptatum veniam
  mollitia molestias! Culpa, iure voluptatibus. Aliquam, vero aliquid! Ducimus
  harum assumenda quidem eius ipsum soluta illum maiores blanditiis mollitia
  qui, perferendis iste cupiditate voluptas cum esse dolore omnis asperiores,
  eaque, nemo inventore. Ducimus officiis atque amet molestias eum!`;

const About = () => {
  return (
    <div>
      <Layout />
      <h1>About this website</h1>
      <p> {text} </p>
      {/* On appelle le composant footer pour couvrir le pied de page */}
      <Footer />
    </div>
  );
};

export default About;
