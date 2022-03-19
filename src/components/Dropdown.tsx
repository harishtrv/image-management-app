import React from 'react';

type Item = {
  name: string;
  value: number;
}
type Props = {
  items: Item[];
  onChangeEvent: (e: any) => void;
}
class DropDown extends React.Component<Props> {
  getList = () => {
    let result: JSX.Element[] = this.props.items.map(item => (<option key={item.value} value={item.value}>{item.name}</option>));
    return result;
  }
  render() {
    return (
      <select className="m-2 px-1 py-1 md:py-2 md:px-4 cursor-pointer" onChange={(e) => this.props.onChangeEvent(e)}>
        <option key='' value="">Sort By</option>
        {this.getList()}
      </select>
    );
  }
}

export default DropDown;