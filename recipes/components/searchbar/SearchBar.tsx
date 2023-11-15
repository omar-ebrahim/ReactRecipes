import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    router.push(`/recipes?searchTerm=${searchTerm}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={searchTerm}
        placeholder="Search for a recipe"
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border rounded-lg p-2"
      />
      <button
        type="submit"
        disabled={searchTerm.length === 0}
        className="button border bg-slate-100 p-2 m-4 rounded-lg disabled:pointer-events-none disabled:text-gray-400"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
