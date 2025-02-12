import Image from 'next/image';

interface ImageProps {
  type:
    | 'CharacterImages'
    | 'BackgroundImages'
    | 'ExampleCharacter'
    | 'ExampleBackground';
}

const ImageSource: React.FC<ImageProps> = ({ type }) => {
  const CharacterImages = ['001.png', '002.png', '003.png', '004.png'];
  const BackgroundImages = ['001.jpg', '002.jpg', '003.png', '004.jpg'];
  const ExampleCharacterImage = 'example.jpg';
  const ExampleBackgroundImage = 'example.jpg';

  return (
    <div className="flex gap-2 py-2">
      {type === 'CharacterImages' &&
        CharacterImages.map((image, index) =>
          index < 2 ? (
            <Image
              key={index}
              src={`/images/character/${image}`}
              alt={`Character ${index}`}
              width={290}
              height={200}
              loading="lazy"
            />
          ) : (
            index > 1 && (
              <Image
                key={index}
                src={`/images/character/${image}`}
                alt={`Character ${index}`}
                width={300}
                height={200}
                loading="lazy"
              />
            )
          )
        )}
      {type === 'BackgroundImages' &&
        BackgroundImages.map(
          (image, index) =>
            index < 4 && (
              <Image
                key={index}
                src={`/images/background/${image}`}
                alt={`Background ${index}`}
                width={200}
                height={200}
                loading="lazy"
              />
            )
        )}
      {type === 'ExampleCharacter' && (
        <Image
          src={`/images/character/${ExampleCharacterImage}`}
          alt={`Character ${ExampleCharacterImage}`}
          width={200}
          height={200}
          loading="lazy"
        />
      )}
      {type === 'ExampleBackground' && (
        <Image
          src={`/images/background/${ExampleBackgroundImage}`}
          alt={`Background ${ExampleBackgroundImage}`}
          width={200}
          height={200}
          loading="lazy"
        />
      )}
    </div>
  );
};

export default ImageSource;
