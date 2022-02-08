import ReactDOM from 'react-dom';
import { AiFillCloseCircle } from 'react-icons/ai';

const modalRoot = document.getElementById("modal") as HTMLElement;
const Modal = (props: any) => {
  return ReactDOM.createPortal(
    <div onClick={props.onDismiss}
      className='flex flex-col w-full h-full opacity-100 absolute leading-none justify-center items-center z-40 top-0 left-0 bg-black/[0.55]'>
      <div onClick={(e) => e.stopPropagation()} className='block absolute bg-white pl-4 pr-4 pb-4 z-50 w-10/12 rounded-md text-left'>
        <i className='relative left-full cursor-pointer' onClick={props.onDismiss}><AiFillCloseCircle /></i>
        <div className='font-semibold p-2 text-lg'>{props.title}</div>
        <hr />
        <div className='p-4'>
          {props.content}
        </div>
        <div className='inline-flex'>
          {props.actions}
        </div>
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;