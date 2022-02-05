import React from 'react';
import ImageCard from './ImageCard';
type url = {regular:string};
type img = {description:string,urls:url,id:number}
interface IProps {
  images: img[];
}
const ImageList = (props:IProps)=>{
    const images = props.images.map((image)=>{
        return <ImageCard key={image.id} image={image}/>;
    })
    return <div className="grid grid-cols-4 gap-10px">{images}</div>;
}

export default ImageList;