import unsplash from '../components/unsplash'
export const createImageList = () => async (dispatch: any) => {
  let { data } = await unsplash.get('/photos', {
    params: { per_page: 20 }
  });
  data = data.map((item: any) => {
    if (item.description) {
      const desc = item.description.split(" ");
      if (desc[0].length > 128) {
        item.title = desc[0].subString(0, 128);
      }
      else {
        item.title = desc[0];
      }
    }
    else {
      item.title = 'No-Name';
    }
    return item;
  })
  dispatch({ type: 'CREATE_LIST', payload: data });
};

export const addImage = (image: any) => async (dispatch: (arg0: { type: string; payload: any; }) => void) => {
  if (image.description) {
    const desc = image.description.split(" ");
    if (desc[0].length > 128) {
      image.title = desc[0].subString(0, 128);
    }
    else {
      image.title = desc[0];
    }
  }
  else {
    image.title = 'No-Name';
  }
  dispatch({ type: 'ADD_IMAGE', payload: image });
}

export const deleteImages = (selectedIds: string[]) => async (dispatch: (arg0: { type: string; payload: any; }) => void) => {

  dispatch({ type: 'DELETE_IMAGES', payload: selectedIds })
}
