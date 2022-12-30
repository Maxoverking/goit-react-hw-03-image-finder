import { Div } from "./Button.styled"

export const Button = ({loadMoreImg}) => {
    return (
        <Div>
        <button type="button" onClick={loadMoreImg}>
            Load More
            </button>
        </Div>
    )
}