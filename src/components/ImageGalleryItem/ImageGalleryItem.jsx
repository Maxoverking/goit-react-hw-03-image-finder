import { Li ,Img} from "./ImageGalleryItem.styled"

export const ImageGalleryItem = ({images,getlargeImage}) => {
    return (
    <>
        {images.map(img =>
            <Li key={img.id} onClick={() => { getlargeImage(img.largeImageURL) }}>
                <Img src={img.webformatURL} alt={img.tags} />
            </Li>
        )}
    </>
    )
}