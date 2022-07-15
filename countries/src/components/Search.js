const Search = ({search, handleSearch}) => {
    return (
      <>
        <input value={search} onChange={handleSearch} />
      </>
    )
  }

export default Search