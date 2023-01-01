import { Div,ButtonLoad} from "./Button.styled"

export const Button = ({loadMoreImg}) => {
    return (

        <Div>
        <ButtonLoad type="button" onClick={loadMoreImg}>
            Load More
        </ButtonLoad>
        </Div>

    )
}