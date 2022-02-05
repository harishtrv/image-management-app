import React from 'react';
type url = { regular: string };
type img = { description: string, urls: url }
interface IProps {
  image: img;
}

interface IState {
  spans: number;
  selected: boolean;
}
class ImageCard extends React.Component<IProps, IState>{
  imageRef: React.RefObject<any>;
  constructor(props: IProps) {
    super(props);
    this.imageRef = React.createRef();
    this.state = { spans: 0, selected: false };
  }
  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans);
  }
  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10) + 1;
    this.setState({ spans });
  }
  onClick = () => {
    this.setState({selected: !this.state.selected});
  }
  render() {
    const { description, urls } = this.props.image;
    return (
      <div className="w-full h-full" style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img className="m-1 object-scale-down h-48 w-full border-2 border-none-400 rounded-lg" ref={this.imageRef} alt={description}
          src={urls.regular}
          onClick={this.onClick}
          style={{borderColor: `${this.state.selected ? 'blue' : ''}`}}
        />
      </div>
    );
  }
}
export default ImageCard;