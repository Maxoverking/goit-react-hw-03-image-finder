import axios from "axios";

export const requestHTTP = async (inputValue,page=1) => {
    const URL = 'https://pixabay.com/api/?key=31213238-ba438b7a093e03eb97bf90c50&';
    const OPTION = `q=${inputValue}&image_type=photo&orientation=horizontal&page=${page}&per_page=12`;
    try {
        const response = await axios.get(`${URL}${OPTION}`);
        return response.data;
    } catch (error) {
       return console.log(error); 
    }
}
