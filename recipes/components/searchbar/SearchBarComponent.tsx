import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SearchBarComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    router.push(`/recipes?searchTerm=${searchTerm}`);
  }

  return (
    <div className="w-full md:w-[600px] md:m-auto text-center h-full flex">
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-[1fr_auto] gap-2 md:p-10 p-5 backdrop-blur-md rounded-2xl my-auto w-full m-4"
      >
        <div className="p-1 rounded-xl">
          <input
            value={searchTerm}
            placeholder="Search for a recipe"
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-500 rounded-lg h-full w-full px-2 hover:bg-slate-50"
          />
        </div>
        <div className="p-1 rounded-xl">
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
