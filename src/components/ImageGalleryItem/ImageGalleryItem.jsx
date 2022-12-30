import { Li ,Img} from "./ImageGalleryItem.styled"

export const ImageGalleryItem = ({images}) => {
    return (
    <>
        {images.map(img =>
             <Li key={img.id}>
                <Img src={img.webformatURL} alt={img.tags} />
            </Li>
        )}
    </>
    )
}