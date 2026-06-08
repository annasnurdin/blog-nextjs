import React from "react"
import styles from "./card.module.css"
import Image from "next/image"
import Link from "next/link"

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <div className={styles.date}>11.11.2026</div>
          <div className={styles.category}>CULTURE</div>
        </div>
        <Link href="/">
          <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h1>
        </Link>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste in sed
          dolorum voluptas impedit. Rerum consequuntur velit, cupiditate hic
          accusantium tempora! Praesentium deserunt, repellendus rerum inventore
          odio aliquam velit voluptate.
        </p>
        <Link href="/" className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  )
}

export default Card
