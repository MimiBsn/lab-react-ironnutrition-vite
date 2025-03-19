export default function Search({ searchInput, setSearchInput }) {
  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
  };
  return (
    <>
      {/* <h2>Search</h2> */}
      <input
        icon="searc"
        type="text"
        placeholder="Search food"
        value={searchInput}
        onChange={(e) => {
          searchItems(e.target.value);
        }}
      />
    </>
  );
}
