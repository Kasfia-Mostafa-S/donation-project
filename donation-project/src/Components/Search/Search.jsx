const Search = () => {
  return (
    <div className="flex justify-center items-center h-[70vh]">
      <div>
      <h2 className="font-bold text-6xl text-black mb-10">I Grow By Helping People In Need</h2>
      <div className="flex justify-center items-center">
      <input className="w-96 h-10 rounded-l-lg p-4 border-2" type="text" placeholder="Search here...." name="search" />
      <button className="w-20 h-10 rounded-r-lg bg-red-500 text-white">Search</button>
      </div>
    </div>
    </div>
  );
};

export default Search;