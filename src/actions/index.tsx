import unsplash from '../components/unsplash'
import { ImageObject } from '../responseType';

export const createImageList = () => async (dispatch: (arg0: { type: string; payload: ImageObject[]; }) => void) => {
  const res = await unsplash.get('/photos', {
    params: { per_page: 20 }
  });
  let data: ImageObject[] = res.data;
  data = data.map((item: ImageObject) => {
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

export const addImage = (image: ImageObject) => async (dispatch: (arg0: { type: string; payload: ImageObject; }) => void) => {
  if (image.description) {
    const desc: string[] = image.description.split(" ");
    if (desc[0].length > 128) {
      image.title = desc[0].substring(0, 128);
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

export const deleteImages = (selectedIds: string[]) => async (dispatch: (arg0: { type: string; payload: string[]; }) => void) => {

  dispatch({ type: 'DELETE_IMAGES', payload: selectedIds })
}
