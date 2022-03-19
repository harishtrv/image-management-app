import React from 'react';
import {ImageObject, Urls} from '../responseType';

interface IProps {
  image: ImageObject;
  onClickEvent: (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => void;
  selected: boolean;
}

interface IState {
  spans: number;
}
interface ImgDetails {
  description?: any;
  urls: Urls;
  id: string;
  title?: string | undefined;
}
class ImageCard extends React.Component<IProps, IState>{
  onClick = (e:React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    this.props.onClickEvent(e);
  }
  render() {
    const { description, urls, id, title }: ImgDetails   = this.props.image;
    return (
      <div>
        <img className="m-1 h-32 w-full border-2 border-none-700 rounded-lg" alt={description}
          src={urls.regular}
          onClick={(e) => this.onClick(e)}
          style={{ borderColor: `${this.props.selected ? 'blue' : ''}` }}
          id={id}
        />
        <h1 className="m-1 w-full text-center">{title}</h1>
      </div>
    );
  }
}
export default ImageCard;