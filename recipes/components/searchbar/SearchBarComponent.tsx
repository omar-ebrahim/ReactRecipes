import { useRouter } from "next/navigation";
import React, { useState } from "react";
import styles from './SearchBarComponent.module.css';
import { GoSearch } from "react-icons/go";

const getButtonTitle = (length: number) => length === 0 ? "Enter some text to enable search" : "Search for a recipe name";

const SearchBarComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    router.push(`/recipes?searchTerm=${searchTerm}`);
  }

  return (
    <div className={styles.searchBar}>
      <form
        onSubmit={handleSubmit}
        className={styles.searchBarForm}
      >
        <div className={styles.inputWrapper}>
          <input
            value={searchTerm}
            placeholder="Search for a recipe name"
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles.searchInput}
          />
        </div>
        <div className={styles.inputWrapper}>
          <button
            title={getButtonTitle(searchTerm.length)}
            aria-label={getButtonTitle(searchTerm.length)}
            type="submit"
            disabled={searchTerm.length === 0}
          >
            <GoSearch />
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBarComponent;
