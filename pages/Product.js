import React from "react";
import styles from "../styles/Home.module.css";
import Stack from "@mui/material/Stack";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { red } from "@mui/material/colors";
import Navbar from "../component/Navbar";
import Button from "../component/Button";
import Profile from "../component/Profile";
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
  const [data, setdata] = React.useState([]);
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
        <h2>{(data.length>0)?data[0].Product_Name:''}</h2>
        <h3>{(data.length>0)?data[0].Product_Price:''} ฿</h3>
        <img
          className={styles.image}
          src={(data.length>0)?data[0].Product_Image:''}
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
          {(data.length>0)?data[0].Product_Detail:''}
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
          <br></br><h4>Quantity : {(data.length>0)?data[0].Product_Quantity:''} </h4>
        </div>
      </aside>
    </main>
  );
}
