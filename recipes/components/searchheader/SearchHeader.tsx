import SearchBar from "../searchbar/SearchBar";
import Food from "../../images/food.jpg";
import Image from "next/image";

const SearchHeader = () => {
  return (
    <div className="relative">
      <div className="absolute z-30 w-full h-full">
        <SearchBar />
      </div>
      <Image
        src={Food.src}
        width={4350}
        height={2900}
        alt="pizza"
        className="w-full h-[180px] md:h-[300px] object-cover object-center"
      />
    </div>
  );
};

export default SearchHeader;
