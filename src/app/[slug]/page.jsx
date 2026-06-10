import Menu from "@/components/menu/Menu"
import styles from "./singlepage.module.css"
import Image from "next/image"

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Lorem Ipsum</h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>Annas Nurdin</span>
              <span className={styles.date}>12.12.2012</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
              repellat rerum inventore repellendus recusandae! Voluptatem sunt
              maxime minima. Cumque impedit maiores eveniet porro a, dignissimos
              vero voluptatem consectetur odio quas?
            </p>
            <h2>Lorem ipsum dolor sit amet</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
              repellat rerum inventore repellendus recusandae! Voluptatem sunt
              maxime minima. Cumque impedit maiores eveniet porro a, dignissimos
              vero voluptatem consectetur odio quas?
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
              repellat rerum inventore repellendus recusandae! Voluptatem sunt
              maxime minima. Cumque impedit maiores eveniet porro a, dignissimos
              vero voluptatem consectetur odio quas?
            </p>
          </div>
        </div>
        <Menu />
      </div>
    </div>
  )
}

export default SinglePage
