import './ImageContainer.scss';
import { useState } from 'react';
import { CelestialEntityType } from '../../constants/data/celestial-entity-type.enum';
import { ENTITY_TYPE_NAME } from '../../constants/data/entity-type-name';
import { entityImageURL, iconURL } from '../../services/url';

interface EntityImageData {
  type: CelestialEntityType;
  name: string;
}

const ImageContainer: React.FC<EntityImageData> = ({ type, name }) => {
  const [isLoading, setLoading] = useState<boolean>(true);
  const spinner: string = iconURL('spinner');
  const entityImage: string = entityImageURL(type, name);
  return (
    <div className={`entity-image ${ENTITY_TYPE_NAME[type]}`}>
      {isLoading && <img className='spinner' src={spinner} alt='' />}
      <img 
        className={`image ${isLoading ? 'loading' : ''}`.trim()}
        src={entityImage}
        alt={name}
        onLoad={() => setLoading(false)}
      />
    </div>
  );
}

export default ImageContainer;