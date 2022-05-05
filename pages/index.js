import React from "react";
import styles from "../styles/Home.module.css";
import Stack from "@mui/material/Stack";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { red } from "@mui/material/colors";
import Navbar from "./comps/Navbar";
import Button from "./comps/Button";
import Profile from "./comps/Profile";


const label = { inputProps: { "aria-label": "Checkbox demo" } };

var clicks = 0;

export function plus() {
  clicks++;
  // clicks = (clicks < 10) ? "0" + clicks : clicks;
  document.getElementById("clicks").innerHTML = clicks;
}

export function minus() {
  clicks--;
  clicks = (clicks <= 0) ? 0 : clicks;
  document.getElementById("clicks").innerHTML = clicks;
}

export function alert() {
  window.alert("Product");
}

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar></Navbar>
      <section className={styles.topleft}>
        <h2>Nike Dunk Low Retro Black White "Panda"</h2>
        <p>3600 Bath</p>
        <img
          className={styles.image}
          src="https://cf.shopee.co.th/file/5c3873d1189084ead783fc2851a7533d"
          alt="NikeDunkLow"
        />
        <article className={styles.btleft}>
        <textarea
          id="cm1"
          name="comment1"
          rows={5}
          cols={29}
          placeholder="Comment 1"
          defaultValue={""}
        />
        <div className={styles.space}></div>
        <textarea
          id="cm2"
          name="comment2"
          rows={5}
          cols={29}
          placeholder="Comment 2"
          defaultValue={""}
        />
      </article>
      </section>
      <aside className={styles.right}>
        <div className={styles.profile1}>
        <Profile></Profile>
        </div>
        <div className={styles.des}>
          <p className={styles.description}>Description</p>
          <hr className={styles.linedes}></hr>
          <p className={styles.desbox}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            omnis distinctio delectus ea. Molestias cupiditate quos impedit
            quidem dolores quae repudiandae facere hic natus magni laborum sunt
            molestiae dolor, beatae sit sint accusantium corporis nulla aut,
            reiciendis rerum aliquam enim quas illum? Voluptate molestiae
            recusandae voluptatibus nihil reiciendis libero velit totam, officia
            quam, nesciunt quos inventore illo exercitationem numquam!
            Necessitatibus quibusdam, iusto earum ad impedit ratione hic atque
            cumque sint at quisquam quas rem quaerat corrupti nulla nemo alias
            ea esse. Provident maxime asperiores ut libero totam dolores rerum
            minus quos omnis fugit et, tempore assumenda nihil eaque iste sint?
          </p>
          <hr className={styles.linedes}></hr>
          <div className={styles.button}>
            <Stack direction="row" spacing={1}>
              <button className={styles.sub} type="button" onClick={minus}>
                -
              </button>
              <a className={styles.val} id="clicks">
                0
              </a>
              <button className={styles.add} type="button" onClick={plus}>
                +
              </button>
              <div></div>
              <Button>Add 2 cart</Button>
              {/* <button className={styles.add2cart} type="button" onClick={alert}>
              Add to Cart
            </button> */}
              <Checkbox
                {...label}
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite />}
                sx={{
                  color: red[800],
                  "&.Mui-checked": {
                    color: red[600],
                  },
                }}
              />
            </Stack>
          </div>
        </div>
      </aside>
    </main>
  );
}
