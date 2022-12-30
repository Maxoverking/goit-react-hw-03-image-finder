import { Component } from 'react'
import { ImSearch } from 'react-icons/im'
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { Header, } from './Searchbar.styled'



export class Searchbar extends Component {
    state={
    imageName:'',
    }
    
    handleChange = evt => {
        const value = evt.currentTarget.value;
        this.setState({ imageName: value.toLowerCase()});
    }

    transferimageNameToApp = evt => {
        evt.preventDefault();
        const { imageName } = this.state
        if (imageName.trim() === '') {
            toast.error(' Entry image name!');

            // alert('Пустая строка');
            return;
        }
        this.props.getImageName(imageName);
        this.cleanInput();
    }
    cleanInput = () => {
        this.setState({imageName:''})
    }
        
    render() {
        const {imageName}=this.state
        return (   
<Header >
    <form onSubmit={this.transferimageNameToApp} >
    <button type="submit" >
    <span><ImSearch/></span>
    </button>

    <input
    onChange={this.handleChange}
    value={imageName}
                        type="text"
                        name='name'
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
    </form>
</Header>
    )
}}