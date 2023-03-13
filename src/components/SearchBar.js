import styles from "@/styles/SearchBar.module.css";

export default function searchBar() {
  return <input className={styles.searchInput} placeholder="Otsi..." />;
}
