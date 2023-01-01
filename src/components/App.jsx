import { Component } from 'react';
import { ToastContainer} from 'react-toastify';
import { requestHTTP } from './Servises/Servises';

import { Searchbar } from './Searchbar/Searchbar';
import {ImageGallery} from './ImageGallery/ImageGallery';
import {ImageGalleryItem} from './ImageGalleryItem/ImageGalleryItem';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { Loader } from './Loader/Loader';
export class App extends Component {
  state = {
    page : false,
    imageName:'',
    imageArray: null,
    isLoading: false,
    largeImageURL: false,
  }

  handleForm = async (imageName) => {
    this.setState({isLoading : true})
    try {
    const data = await requestHTTP(imageName);

    console.log("🚀  data", data.hits);
      this.setState({
      page: 2,
      imageName,
      imageArray: data.hits,
      })
      this.setState({isLoading : false})
    } catch (error) {
      console.log("🚀  error", error);
    }
  }

  loadMoreImg = async () => {
    this.setState(({ page }) => ({
      page: page + 1,
    }));
    const {page,imageName} = this.state;
    console.log("🚀  pageLOad", page);
    
    try {
      const data = await requestHTTP(imageName, page);
    if (data.hits.length < 10) {
      this.setState({ page: false });
    }

    console.log("🚀  dataload", data.hits);
    data.hits.map(objects => {
      return this.setState(({ imageArray }) => ({
      imageArray: [...imageArray,objects]
    	}))}) 
    } catch (error) {
      console.log("🚀  error", error);
    }
  }

  getlargeImage = (largeImageURL) => {
    this.setState({largeImageURL})
  }
  toggleModal = (evt) => {
    this.setState({ largeImageURL: false})
  }
  // addEventListener = (evt) => {
  //       // const target = evt.target
  //   if (evt.keycode === 'ESCAPE') {
  //     console.log('object');
  //         // this.setState({ largeImageURL: false })
  //   }
  // }
  // async componentDidUpdate() {
  //   const { imageName} = this.state;
    
  //   // this.setState({imageArray:data.hits})
     
  //    
  // }
  render() {
    const { imageArray,page,isLoading,largeImageURL} = this.state;
      return (
    <div>
          <Searchbar getImageName={this.handleForm} />
          {isLoading && <Loader/>}
          <ImageGallery>
            {imageArray === null ?
              '' : <ImageGalleryItem
                images={imageArray}
                getlargeImage={this.getlargeImage}
              />}           
          </ImageGallery>
          {page && <Button loadMoreImg={this.loadMoreImg} />}

          {largeImageURL &&
            <Modal
            addImg={largeImageURL}
            toggleModal={this.toggleModal} />}
          
          <ToastContainer 
          autoClose={2000}
hideProgressBar
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"/>
    </div>
  );
  }

};
// id - уникальный идентификатор
// webformatURL - ссылка на маленькое изображение для списка карточек
// largeImageURL - ссылка на большое изображение для модального окна
