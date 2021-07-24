import { Search } from "semantic-ui-react";
import { useState } from "react";

function SearchBar() {
  const [results, setResults] = useState("");

  return <Search />;
}

export default SearchBar;
