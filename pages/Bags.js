import React from "react";
import styles from "../styles/Home.module.css";
import Navbar from "./comps/Navbar";
import { Card } from "antd";
import { useRouter } from "next/router";
import Link from "next/link";
import { height } from "@mui/system";

const { Meta } = Card;

export default function Home() {
  const router = useRouter();
  const { id } = router.query; //fetch from url
  console.log(id);
  const [data, setdata] = React.useState([]);
  React.useEffect(() => {
    console.log(id);
    fetch("/api/Image/CG0000004") //ProductList+(id=P...)
      .then((res) => res.json())
      .then((result) => {
        setdata(result);
        console.log(result);
      });
  },[]);
  return (
    <main className={styles.main}>
      <Navbar></Navbar>
      <div className={styles.catename}>
        <h1>Bags</h1>
      </div>
      {data.map((row, i) => (
        <div>
          <Link href={"/ProductCard?id=" + row.Product_ID}>
          <Card
            className={styles.card}
            hoverable
            style={{ width: 300, height: 400 }}
            cover={
              <img
                alt="example"
                src={row.Product_Image}
              />
            }
          >
            <Meta title={row.Product_Name} description={row.Product_Price + " ฿"} />
          </Card>
          </Link>
        </div>
      ))}
    </main>
  );
}