import React from "react";
import styles from "../styles/Home.module.css";
import Navbar from "./comps/Navbar";
import { Card } from "antd";

const { Meta } = Card;

export default function Home() {
    return (
        <main className={styles.main}>
            <Navbar></Navbar>
            <div className={styles.catename}>
                <h1>Shoes</h1>
            </div>
            <div>
            <Card className={styles.card}
            hoverable
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src="https://cf.shopee.co.th/file/9b44066d2ddd6db2a39d0a9c2248b634"
              />
            }
          >
            <Meta title="Product Name" description="3600 ฿" />
          </Card>
            <Card className={styles.card}
            hoverable
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src="https://cf.shopee.co.th/file/9b44066d2ddd6db2a39d0a9c2248b634"
              />
            }
          >
            <Meta title="Product Name" description="3600 ฿" />
          </Card>
          <Card className={styles.card}
            hoverable
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src="https://cf.shopee.co.th/file/9b44066d2ddd6db2a39d0a9c2248b634"
              />
            }
          >
            <Meta title="Product Name" description="3600 ฿" />
          </Card>
          <Card className={styles.card}
            hoverable
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src="https://cf.shopee.co.th/file/9b44066d2ddd6db2a39d0a9c2248b634"
              />
            }
          >
            <Meta title="Product Name" description="3600 ฿" />
          </Card>
          <Card className={styles.card}
            hoverable
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src="https://cf.shopee.co.th/file/9b44066d2ddd6db2a39d0a9c2248b634"
              />
            }
          >
            <Meta title="Product Name" description="3600 ฿" />
          </Card>
          <Card className={styles.card}
            hoverable
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src="https://cf.shopee.co.th/file/9b44066d2ddd6db2a39d0a9c2248b634"
              />
            }
          >
            <Meta title="Product Name" description="3600 ฿" />
          </Card>
          <Card className={styles.card}
            hoverable
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src="https://cf.shopee.co.th/file/9b44066d2ddd6db2a39d0a9c2248b634"
              />
            }
          >
            <Meta title="Product Name" description="3600 ฿" />
          </Card>
          <Card className={styles.card}
            hoverable
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src="https://cf.shopee.co.th/file/9b44066d2ddd6db2a39d0a9c2248b634"
              />
            }
          >
            <Meta title="Product Name" description="3600 ฿" />
          </Card>
          <Card className={styles.card}
            hoverable
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src="https://cf.shopee.co.th/file/9b44066d2ddd6db2a39d0a9c2248b634"
              />
            }
          >
            <Meta title="Product Name" description="3600 ฿" />
          </Card>
          <Card className={styles.card}
            hoverable
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src="https://cf.shopee.co.th/file/9b44066d2ddd6db2a39d0a9c2248b634"
              />
            }
          >
            <Meta title="Product Name" description="3600 ฿" />
          </Card>
          <Card className={styles.card}
            hoverable
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src="https://cf.shopee.co.th/file/9b44066d2ddd6db2a39d0a9c2248b634"
              />
            }
          >
            <Meta title="Product Name" description="3600 ฿" />
          </Card>
          <Card className={styles.card}
            hoverable
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src="https://cf.shopee.co.th/file/9b44066d2ddd6db2a39d0a9c2248b634"
              />
            }
          >
            <Meta title="Product Name" description="3600 ฿" />
          </Card>
            </div>
        </main>
    );
}