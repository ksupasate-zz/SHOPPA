import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.main}>
      <section className={styles.topleft}>
        <h2>Nike Dunk Low Retro Black White "Panda"</h2>
        <p>3600 Bath</p>
        <img
          className={styles.image}
          src="https://cf.shopee.co.th/file/5c3873d1189084ead783fc2851a7533d"
          alt="NikeDunkLow"
        />
      </section>
      <aside className={styles.right}>
        <div className={styles.profile}></div>
        <div>
          <p className={styles.description}>Description</p>
          <hr className={styles.linedes}></hr>
          <p className={styles.desbox}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci omnis distinctio delectus ea. Molestias cupiditate quos impedit quidem dolores quae repudiandae facere hic natus magni laborum sunt molestiae dolor, beatae sit sint accusantium corporis nulla aut, reiciendis rerum aliquam enim quas illum? Voluptate molestiae recusandae voluptatibus nihil reiciendis libero velit totam, officia quam, nesciunt quos inventore illo exercitationem numquam! Necessitatibus quibusdam, iusto earum ad impedit ratione hic atque cumque sint at quisquam quas rem quaerat corrupti nulla nemo alias ea esse. Provident maxime asperiores ut libero totam dolores rerum minus quos omnis fugit et, tempore assumenda nihil eaque iste sint?
          </p>
          <hr className={styles.linedes}></hr>
        </div>
      </aside>
      <article className={styles.btleft}>
        <textarea
          id="cm1"
          name="comment1"
          rows={7}
          cols={28}
          placeholder="Comment 1"
          defaultValue={""}
        />
        <div className={styles.space}></div>
        <textarea
          id="cm2"
          name="comment2"
          rows={7}
          cols={28}
          placeholder="Comment 2"
          defaultValue={""}
        />
      </article>
    </div>
  );
}
