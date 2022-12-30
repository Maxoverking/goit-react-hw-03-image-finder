import { Component } from 'react';
import { ToastContainer} from 'react-toastify';
import { requestHTTP } from './Servises/Servises'

import { Searchbar } from './Searchbar/Searchbar';
import {ImageGallery} from './ImageGallery/ImageGallery'
import {ImageGalleryItem} from './ImageGalleryItem/ImageGalleryItem'
import {Button} from './Button/Button'
export class App extends Component {
  state = {
    page : false,
    imageName:'',
    imageArray: [],
    isLoading : false
  }

  handleForm = async (imageName) => {
    try {
    const data = await requestHTTP(imageName);

    console.log("🚀  data", data.hits);
      this.setState({
      page: 2,
      imageName,
      imageArray: data.hits,
    })
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

  
  // async componentDidUpdate() {
  //   const { imageName} = this.state;
    
  //   // this.setState({imageArray:data.hits})
     
  //    
  // }
  render() {
    const { imageArray, page } = this.state;
      return (
    <div>
          <Searchbar getImageName={this.handleForm} />
          <ImageGallery>
            {imageArray === null ?
              '' : <ImageGalleryItem images={imageArray}/>}           
          </ImageGallery>
          {page && <Button loadMoreImg={this.loadMoreImg} />}
          
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
