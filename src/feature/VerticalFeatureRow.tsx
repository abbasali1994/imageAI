import { useState } from 'react';

import className from 'classnames';

import { Button } from '../button/Button';
import TextInput from '../textInput';
import ImageUpload from '../uploadImage';

type IVerticalFeatureRowProps = {
  title: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
};

const VerticalFeatureRow = (props: IVerticalFeatureRowProps) => {
  const verticalFeatureClass = className(
    'mt-20',
    'flex',
    'flex-wrap',
    'items-center'
  );
  const [image, setImage] = useState<File | undefined>();
  const [styleText, setStyleText] = useState<string>('');
  const [iterations, setIterations] = useState<number>(50);
  const [uploading, setUploading] = useState(false);

  const handleUpload = async () => {
    if (!image) {
      return;
    }

    setUploading(true);

    const formData = new FormData();
    const imageObject = JSON.stringify({ image });
    formData.append('input', imageObject);
    formData.append(
      'version',
      'f2d6b24e6002f25f77ae89c2b0a5987daa6d0bf751b858b94b8416e8542434d1'
    );
    try {
      const response = await fetch('https://api.replicate.com/v1/predictions', {
        method: 'POST',
        body: formData,
        headers: {
          Authorization: 'Token b1fe99c198d070971f543d24b85b475461f597f3',
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    } finally {
      setUploading(false);
    }
  };
  return (
    <div className={verticalFeatureClass}>
      <div className="w-full sm:w-1/2 text-center sm:px-6">
        <h3 className="text-3xl text-gray-900 font-semibold">{props.title}</h3>
        <ImageUpload setImage={setImage} image={image} />
        <TextInput
          type="text"
          label={'text for styling'}
          value={styleText}
          setValue={setStyleText}
        />
        <TextInput
          type="number"
          label={'iterations'}
          value={iterations}
          setValue={setIterations}
        />
        <button onClick={handleUpload} disabled={uploading}>
          <Button>Generate</Button>
        </button>
      </div>
    </div>
  );
};

export { VerticalFeatureRow };
