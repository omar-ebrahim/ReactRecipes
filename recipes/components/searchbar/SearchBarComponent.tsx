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
            className="button border border-gray-500 bg-white hover:bg-slate-50 rounded-lg disabled:pointer-events-none disabled:bg-gray-200 disabled:text-gray-800 h-12 px-4"
          >
            🔎
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBarComponent;
