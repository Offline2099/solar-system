import { useState } from 'react';
import { CelestialEntityType } from '../../constants/celestial-entity-type';
import { ENTITY_TYPE_NAME } from '../../constants/entity-type-name';
import { entityImageURL, iconURL } from '../../utils/url';
import './ImageContainer.scss';

interface EntityImageData {
  type: CelestialEntityType;
  name: string;
}

const ImageContainer = ({ type, name }: EntityImageData) => {
  const [isLoading, setLoading] = useState(true);
  const entityImage = entityImageURL(type, name);
  return (
    <div className={`entity-image ${ENTITY_TYPE_NAME[type]}`}>
      {isLoading && <img className="spinner" src={iconURL('spinner')} alt="" />}
      <img
        className={`image ${isLoading ? 'loading' : ''}`.trim()}
        src={entityImage}
        alt={name}
        onLoad={() => setLoading(false)}
      />
    </div>
  );
};

export default ImageContainer;
