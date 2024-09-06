import { useRouter } from "next/navigation";
import React, { useState } from "react";
import styles from './SearchBarComponent.module.css';

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
            placeholder="Search for a recipe"
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles.searchInput}
          />
        </div>
        <div className={styles.inputWrapper}>
          <button
            title={searchTerm.length === 0 ? "Enter some text to enable search" : "Search for a recipe"}
            aria-label={searchTerm.length === 0 ? "Enter some text to enable search" : "Search for a recipe"}
            type="submit"
            disabled={searchTerm.length === 0}
          >
            🔎
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBarComponent;
