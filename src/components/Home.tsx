import React from 'react'
import SearchBar from './SearchBar';
import AddImg from './AddImg';
import Delete from './DeleteImg';
import { connect, RootStateOrAny } from 'react-redux';
import { createImageList, deleteImages } from '../actions/index';
import ImageCard from './ImageCard';
import SelectAll from './SelectAll';
import DropDown from './Dropdown';

type StateType = {
  images: any[];
  selected_images: string[]
}
class Home extends React.Component<Props> {
  state: StateType = { 'images': [], 'selected_images': [] };
  onSearchSubmit = async (text: string) => {
    if (text) {
      this.setState({ images: this.props.images.filter(image => image.title === text) });
    }
    else {
      this.setState({ images: this.props.images });
    }
    this.setState({ selected_images: [] });
  }
  async componentDidMount() {
    if (this.props.images.length === 0) {
      await this.props.createImageList();
    }
    this.setState({ 'images': this.props.images });
  }
  storeSelectedImageToList = (e: any) => {
    if (this.state.selected_images.includes(e.target.id)) {
      this.setState({ selected_images: this.state.selected_images.filter(item => item !== e.target.id) });
    }
    else {
      this.setState({ selected_images: [...this.state.selected_images, e.target.id] });
    }
  }
  onDeleteClick = async () => {
    if (this.state.selected_images.length === 0) return;
    await this.props.deleteImages(this.state.selected_images);
    this.setState({ images: this.props.images });
    this.setState({ selected_images: [] })
  }
  imageList = () => {
    const images = this.state.images.map((image) => {
      if (this.state.selected_images.includes(image.id)) {
        return <ImageCard key={image.id} image={image} selected={true} onClickEvent={this.storeSelectedImageToList} />;
      }
      return <ImageCard key={image.id} image={image} selected={false} onClickEvent={this.storeSelectedImageToList} />;
    })
    return <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10px">{images}</div>;
  }

  selectAll = () => {
    let result = this.state.images.map(item => item.id);
    this.setState({ 'selected_images': result });
  }
  sort = (e: any) => {
    switch (e.target.value) {
      case '1':
        this.setState({ 'images': (this.state.images.sort((i1, i2) => (i1.title >= i2.title ? 1 : -1))) });
        break;
      case '2':
        this.setState({ 'images': (this.state.images.sort((i1, i2) => (i1.created_at > i2.created_at ? 1 : -1))) });
        break;
      case '3':
        this.setState({ 'images': (this.state.images.sort((i1, i2) => ((i1.height * i1.width) > (i2.height * i2.width) ? 1 : -1))) });
        break;
      default:
        return null;
    }
  }

  render() {
    let items = [{ name: 'Title', value: 1 }, { name: 'Date', value: 2 }, { name: 'Size', value: 3 }];
    return (
      <div style={{ marginTop: '10px' }}>
        <h1 className="pl-5 pt-3 pb-1 text-4xl">Media Library</h1>
        <SearchBar runOnSubmit={this.onSearchSubmit} />
        <div className='flex flex-row pl-4 m-3 items-center'>
          <AddImg />
          <Delete status={this.state.selected_images.length > 0} onDeleteClick={this.onDeleteClick} />
          <SelectAll selectAll={this.selectAll} />
          <DropDown onChangeEvent={this.sort} items={items} />
        </div>
        {this.imageList()}
        {/* <ImageList images={this.state.images?this.state.images:[]} onClickEvent={this.storeSelectedImageToList} /> */}
      </div>
    );
  }
}
const mapStateToProps = (state: RootStateOrAny) => {
  return { images: state.Images };
}
const mapDispatchToProps = {
  createImageList,
  deleteImages
}
type statePorps = {
  images: any[];
}
type dispatchProps = {
  createImageList: () => void;
  deleteImages: (selectedIds: string[]) => void;
}
type Props = statePorps & dispatchProps;
export default connect<statePorps, dispatchProps>(mapStateToProps, mapDispatchToProps)(Home)
