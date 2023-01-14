import React from 'react';

import { useDrop } from 'react-dnd';

interface Props {
  setImage: Function;
  image: File | undefined;
}

const ImageUpload: React.FC<Props> = ({ setImage, image }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImage(e.target.files![0]);
  };
  const [, drop] = useDrop({
    accept: 'image/*',
    drop: (item: any) => {
      setImage(item.file);
    },
  });
  return (
    <div
      ref={drop}
      onDrop={(e) => {
        if (e.dataTransfer.files[0]?.type.includes('image/'))
          setImage(e.dataTransfer.files![0]);
      }}
      className="relative p-6 border-2 border-dashed rounded-lg flex flex-col items-center"
    >
      <label className="bg-white cursor-pointer">
        <input
          type="file"
          className="hidden"
          onChange={handleChange}
          ref={drop}
          accept="image/*"
        />
        <span className="text-gray-600 font-medium">
          Drag and drop an image or click to browse
        </span>
      </label>

      <div className="text-center py-2">
        {image && (
          <img
            className="h-64 w-64 rounded-lg object-cover"
            src={URL.createObjectURL(image)}
            alt={image.name}
          />
        )}
      </div>
    </div>
  );
};

export default ImageUpload;
