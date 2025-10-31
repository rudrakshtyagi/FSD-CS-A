import React from "react";
import "../styles/BookCard.css";

const BookCard = ({
  title,
  author,
  coverUrl,
  rating,
  description,
  onClick,
}) => {
  return (
    <div
      className="book-card"
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : -1}
    >
      <div className="book-cover">
        {coverUrl ? (
          // eslint-disable-next-line jsx-a11y/img-redundant-alt
          <img src={coverUrl} alt={title} />
        ) : (
          <div className="book-cover--placeholder">No image</div>
        )}
      </div>

      <div className="book-body">
        <div className="book-header">
          <h3 className="book-title">{title}</h3>
          {typeof rating !== "undefined" && (
            <div className="book-rating">{rating} ★</div>
          )}
        </div>

        <p className="book-author">{author}</p>
        {description && <p className="book-desc">{description}</p>}
      </div>
    </div>
  );
};

export default BookCard;
