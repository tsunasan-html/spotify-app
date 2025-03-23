import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../assets/style.css"

export function SearchInput(props) {
  return (
    <section className="mb-10">
      <input
        onChange={props.onInputChange}
        className="bg-gray-700 w-1/3 p-2 rounded-l-lg focus:outline-none searchInput"
        placeholder="探したい曲を入力してください"
      />
      <button onClick={props.onSubmit}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-lg searchButton">
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </section>
  );
}