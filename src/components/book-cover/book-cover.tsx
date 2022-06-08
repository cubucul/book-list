import './book-cover.css';

type BookCoverProps = {
  src: string;
  alt: string;
};

const BookCover = ({
  src,
  alt
}: BookCoverProps) => {
  return (
    <img
      className="cover"
      src={src}
      width="145"
      height="205"
      alt={alt}
    />
  );
};

export default BookCover;
