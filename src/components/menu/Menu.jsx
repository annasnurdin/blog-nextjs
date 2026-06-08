import React from "react"
import styles from "./menu.module.css"
import Link from "next/link"
import Image from "next/image"

const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>{"What's Hot"}</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <div className={styles.items}>
        <Link href="/" className={styles.item}>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.travel}`}>
              Travel
            </span>
            <h3 className={styles.postTitle}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit
            </h3>
            <div className={styles.detail}>
              <span className={styles.userName}>Annas Nurdin</span>
              <span className={styles.date}> - 1.1.2026</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.culture}`}>
              Culture
            </span>
            <h3 className={styles.postTitle}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit
            </h3>
            <div className={styles.detail}>
              <span className={styles.userName}>Annas Nurdin</span>
              <span className={styles.date}> - 1.1.2026</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.fashion}`}>
              Fashion
            </span>
            <h3 className={styles.postTitle}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit
            </h3>
            <div className={styles.detail}>
              <span className={styles.userName}>Annas Nurdin</span>
              <span className={styles.date}> - 1.1.2026</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.food}`}>Food</span>
            <h3 className={styles.postTitle}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit
            </h3>
            <div className={styles.detail}>
              <span className={styles.userName}>Annas Nurdin</span>
              <span className={styles.date}> - 1.1.2026</span>
            </div>
          </div>
        </Link>
      </div>
      {/* Editor's Pick */}
      <h2 className={styles.subtitle}>Choosen by The Editor</h2>
      <h1 className={styles.title}>Editor's Pick</h1>
      <div className={styles.items}>
        <Link href="/" className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.travel}`}>
              Travel
            </span>
            <h3 className={styles.postTitle}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit
            </h3>
            <div className={styles.detail}>
              <span className={styles.userName}>Annas Nurdin</span>
              <span className={styles.date}> - 1.1.2026</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.culture}`}>
              Culture
            </span>
            <h3 className={styles.postTitle}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit
            </h3>
            <div className={styles.detail}>
              <span className={styles.userName}>Annas Nurdin</span>
              <span className={styles.date}> - 1.1.2026</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.fashion}`}>
              Fashion
            </span>
            <h3 className={styles.postTitle}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit
            </h3>
            <div className={styles.detail}>
              <span className={styles.userName}>Annas Nurdin</span>
              <span className={styles.date}> - 1.1.2026</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.food}`}>Food</span>
            <h3 className={styles.postTitle}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit
            </h3>
            <div className={styles.detail}>
              <span className={styles.userName}>Annas Nurdin</span>
              <span className={styles.date}> - 1.1.2026</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Menu
