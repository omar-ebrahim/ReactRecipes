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
    <div className="w-full text-center">
      <form onSubmit={handleSubmit} className="grid grid-cols-[1fr_auto] gap-2 p-4">
        <input
          value={searchTerm}
          placeholder="Search for a recipe"
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border rounded-lg h-12 p-2"
        />
        <button
          type="submit"
          disabled={searchTerm.length === 0}
          className="button border bg-slate-100 rounded-lg disabled:pointer-events-none disabled:text-gray-400 h-12 px-4"
        >
         🔎   
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
