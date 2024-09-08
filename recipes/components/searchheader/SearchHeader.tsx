import SearchBar from "../searchbar/SearchBar";
import Food from "../../images/food.jpg";
import Image from "next/image";
import styles from './SearchHeader.module.css'

const SearchHeader = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.searchBarContainer}>
        <SearchBar />
      </div>
      <Image
        src={Food.src}
        width={4350}
        height={2900}
        alt="pizza"
        className={styles.searchHeaderImage}
      />
    </div>
  );
};

export default SearchHeader;
