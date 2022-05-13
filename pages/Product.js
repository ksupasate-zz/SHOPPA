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
import {useRouter} from "next/router";

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
  const router = useRouter()
  const { id } = router.query //fetch from url
  const [data, setdata] = React.useState({});
  React.useEffect(() => {
    if(!id)return
    console.log(id)
    fetch('/api/ProductList/'+id)//ProductList+(id=P...)
      .then((res) => res.json())
      .then((result) => {
        setdata(result)
        console.log(result)
      })
  }, [id])
  return (
    <main className={styles.main}>
      <Navbar></Navbar>
      <section className={styles.topleft}>
        <h2>{(data.result)?data.result[0].Product_Name:''}</h2>
        <h5>{(data.result)?data.result[0].Product_Price:''} ฿</h5>
        <img
          className={styles.image}
          src={(data.result)?data.result[0].Product_Image:''}
          alt="NikeDunkLow"
        />
        <div className={styles.cm}>
        <p className={styles.cm1}>Comment 1</p>
        <p>Comment 2</p>
        </div>
        <br></br>
        <article className={styles.btleft}>
        <textarea className={styles.textarea}
          id="cm1"
          name="comment1"
          rows={4}
          cols={29}
          value={(data.result2 && data.result2.length>0)?data.result2[0].Review_Comment:''}
          defaultValue={""}
        />
        <div className={styles.space}></div>
        <textarea className={styles.textarea}
          id="cm2"
          name="comment2"
          rows={4}
          cols={29}
          value={(data.result2 && data.result2.length>1)?data.result2[1].Review_Comment:''}
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
          {(data.result)?data.result[0].Product_Detail:''}
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
          <br></br><h4>Quantity : {(data.result)?data.result[0].Product_Quantity:''} </h4>
        </div>
      </aside>
    </main>
  );
}