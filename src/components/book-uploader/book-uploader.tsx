import { ChangeEvent } from 'react';
import './book-uploader.css';

type BookUploaderProps = {
  uploadCover: (base64: string) => void;
};

const BookUploader = ({
  uploadCover
}: BookUploaderProps) => {
  const getBase64 = (file: Blob) => {
    return new Promise((resolve) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        console.log(error);
      };
    });
  };

  const onLoadCover = async (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) {
      return;
    }

    const file = event.target.files[0];
    const base64 = await getBase64(file);

    if (base64) {
      uploadCover(base64 as string);
    }
  };

  return (
    <div className="book-uploader">
      <p className="book-uploader__text">Выберите изображение для загрузки</p>
      <input
        type="file"
        onChange={onLoadCover}
      />
    </div>
  );
};

export default BookUploader;
