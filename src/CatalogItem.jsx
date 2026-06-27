import React, { useState } from "react";

import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { FaThumbsUp, FaRegThumbsUp } from "react-icons/fa";

function CatalogItem(props) {
  const { book } = props;

  const [bookmark, setBookmark] = useState(false);

  const [liked, setLiked] = useState(false);

  const [likes, setLikes] = useState(Math.floor(Math.random() * 11));

  const checkBookmark = () => {
    setBookmark(!bookmark);
  };

  const checkLike = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }

    setLiked(!liked);
  };

  return (
    <div className="card">
      <h3>{book.title}</h3>

      <p>
        <strong>Penulis :</strong> {book.author}
      </p>

      <p>
        <strong>Tahun :</strong> {book.year}
      </p>

      <hr />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div onClick={checkBookmark} style={{ cursor: "pointer" }}>
          {bookmark ? (
            <>
              <FaBookmark />
              <span> Bookmark!</span>
            </>
          ) : (
            <>
              <FaRegBookmark />
              <span> Bookmark</span>
            </>
          )}
        </div>

        <div onClick={checkLike} style={{ cursor: "pointer" }}>
          {liked ? (
            <>
              <FaThumbsUp />
              <span> Like ({likes})</span>
            </>
          ) : (
            <>
              <FaRegThumbsUp />
              <span> Like ({likes})</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default CatalogItem;
