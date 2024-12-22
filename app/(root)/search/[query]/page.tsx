import Navbar from "@components/Navbar"
import SearchResults from "@components/SearchResults";

interface SearchPageProps {
  params: {
    query: string;
  };
}

const SearchPage = async ({ params }: SearchPageProps) => {
  const query = params.query;
  return (
    <>
      <Navbar />
      <SearchResults query={query}/>
    </>
  );
}

export default SearchPage 