import { XMarkIcon } from "@heroicons/react/24/solid"
import PropTypes from 'prop-types'



const OrderCard = props => {
    const { id, title, imageUrl, price, handleDelete } = props
    OrderCard.propTypes = {
        id: PropTypes.node.isRequired,
        title: PropTypes.node.isRequired,
        imageUrl: PropTypes.node.isRequired,
        price: PropTypes.node.isRequired,
        handleDelete: PropTypes.node.isRequired,

    }
    let renderXMarkIcon
    if (handleDelete) {
        renderXMarkIcon = <XMarkIcon onClick={() => handleDelete(id)} className="w-6 h-6 text-black cursor-pointer"></XMarkIcon>
    }
    return (
        <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-2">
                <figure className="w-20 h-20">
                    <img className="w-full h-full rounded-lg object-cover" src={imageUrl} alt={title} />
                </figure>
                <p className="text-sm font-light">{title}</p>
            </div>
            <div className="flex items-center gap-2">
                <p className="text-lg font-medium">${price}</p>
                {renderXMarkIcon}
            </div>

        </div>

    )


}
export default OrderCard

