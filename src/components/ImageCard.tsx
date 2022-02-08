import React from 'react';
type url = { regular: string };
type img = { description: string, urls: url, id: string, title: string };
interface IProps {
  image: img;
  onClickEvent: (e: any) => void;
  selected: boolean;
}

interface IState {
  spans: number;
}
class ImageCard extends React.Component<IProps, IState>{
  imageRef: React.RefObject<any>;
  constructor(props: IProps) {
    super(props);
    this.imageRef = React.createRef();
    this.state = { spans: 0 };
  }
  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans);
  }
  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10) + 1;
    this.setState({ spans });
  }
  onClick = (e: any) => {
    this.props.onClickEvent(e);
  }
  render() {
    const { description, urls, id, title } = this.props.image;
    return (
      <div>
        <img className="m-1 h-32 w-full border-2 border-none-700 rounded-lg" ref={this.imageRef} alt={description}
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