import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function SongList(props) {
  if (props.isLoading) {
    return (
      <div className="inset-0 flex justify-center items-center">
        <FontAwesomeIcon icon={faSpinner} spin size="3x" />
      </div>
    );
  }

  if (!props.songs || props.songs.length === 0) {
    return <div>No songs found.</div>;
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
      {props.songs.map((song) => {
        if (!song) return null; 
        return (
          <a
            href={song.external_urls?.spotify}  
            target="_blank"
            rel="noopener noreferrer"
            className="flex-none cursor-pointer"
            key={song.id}
          >
            {song.album?.images[0]?.url ? (
              <img
                alt="thumbnail"
                src={song.album.images[0].url}
                className="mb-2 rounded"
              />
            ) : (
              <div className="w-full h-32 bg-gray-700 rounded mb-2 flex items-center justify-center">
                No Image
              </div>
            )}
            <h3 className="text-sm md:text-lg font-semibold">{song.name || "Unknown Song"}</h3>
            <p className="text-xs md:text-gray-400">{song.artists?.[0]?.name || "Unknown Artist"}</p>
          </a>
        );
      })}
    </div>
  );
}
