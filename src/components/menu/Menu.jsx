import React from "react"
import styles from "./menu.module.css"
import MenuPost from "../menuPost/MenuPost"
import MenuCategories from "../menuCategories/MenuCategories"

const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>{"What's Hot"}</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <MenuPost withImage={false} />

      {/* Category List */}
      <h2 className={styles.subtitle}>Discover by Topics</h2>
      <h1 className={styles.title}>Categories</h1>
      <MenuCategories />

      {/* Editor's Pick */}
      <h2 className={styles.subtitle}>Choosen by The Editor</h2>
      <h1 className={styles.title}>Editor's Pick</h1>
      <MenuPost withImage={true} />
    </div>
  )
}

export default Menu
