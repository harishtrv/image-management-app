import React from 'react';
import SearchBar from './SearchBar';
import unsplash from './unsplash';
import ImageCard from './ImageCard';
import Modal from './Modal';
import { useNavigate } from 'react-router-dom';
import { addImage } from '../actions/index';
import { connect } from 'react-redux';
import { ImageObject } from '../responseType';

interface stateType {
  images: ImageObject[],
  preview: boolean,
  newImage: ImageObject,
  showSucessMessage: boolean
}
class AddModal extends React.Component<Props> {
  initial: any = { description: '', urls: { regular: '' }, id: '1', title: '' }
  state: stateType = { images: [], preview: false, newImage: this.initial, showSucessMessage: false };

  onSearchSubmit = async (text: string) => {
    const response = await unsplash.get('search/photos', {
      params: { query: text },
    });
    this.setState({ 'images': response.data.results });
  }
  showImges = () => {
    const imagesList: JSX.Element[] = this.state.images.map((image: any) => {
      return (<ImageCard selected={false} key={image.id} image={image} onClickEvent={this.storeSelectedImageToList} />);
    });
    return (<div className="flex flex-col">
      <div className=""><SearchBar runOnSubmit={this.onSearchSubmit} /></div>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-10px">{imagesList}</div>
    </div>);
  }
  previewImage = () => {
    return (
      <div className='flex justify-center items-center'>
        <img className="m-1 h-80 border-2 border-none-700 rounded-lg"
          alt={this.state.newImage.description}
          src={this.state.newImage.urls.regular}
          id={this.state.newImage.id}
        />
      </div>
    );
  }
  storeSelectedImageToList = async (e: any) => {
    const tempImage = await this.state.images.filter((item: ImageObject) => item.id === e.target.id);
    this.setState({ 'newImage': tempImage[0] });
    this.setState({ 'preview': true });
  }
  addImage = () => {
    this.props.addImage(this.state.newImage);
    this.setState({ showSucessMessage: true });
    setTimeout(() => {
      this.props.navigate('/');
      this.setState({ showSucessMessage: false });
    }, 2000);
  }

  renderActions = () => {
    return (
      <div>
        {this.state.preview ? <button
          className="m-2 absolute bottom-0 right-0 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={this.addImage}
        >
          Submit
        </button> : ""}

      </div>);
  }
  render() {

    return (
      <div style={{ marginTop: '10px' }}>

        {this.state.showSucessMessage ?
          <Modal title="Confirm Message"
            content="Image Added SuccessFully!"
            actions=''
            onDismiss={() => { this.props.navigate('/') }} />
          :
          <Modal
            title={this.state.preview ? "Add Image" : "Select Image"}
            content={this.state.preview ? this.previewImage() : this.showImges()}
            actions={this.renderActions()}
            onDismiss={() => { this.props.navigate('/') }}
          />}
      </div>
    );
  }
}

function WithNavigate(props: dispatchProps) {
  let navigate = useNavigate();
  return <AddModal {...props} navigate={navigate} />
}

const mapDispatchToProps = {
  addImage
}
type dispatchProps = {
  addImage: (image: any) => void;
}
type Prop1 = {
  navigate: (path: string) => void;
}
type Props = Prop1 & dispatchProps;
export default connect<any, dispatchProps>(null, mapDispatchToProps)(WithNavigate);
