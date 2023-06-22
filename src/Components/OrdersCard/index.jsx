import { ChevronRightIcon } from '@heroicons/react/24/solid';
import PropTypes from 'prop-types'



const OrdersCard = props => {
    const { totalPrice, totalProducts } = props
    OrdersCard.propTypes = {
        totalPrice: PropTypes.node.isRequired,
        totalProducts: PropTypes.node.isRequired,

    };

    return (
        <div className="flex justify-between items-center border border-black rounded-lg p-4 w-80 mb-3">
            <div className="flex justify-between w-full">
                <p className="flex flex-col">
                    <span className="font-light">01.02.23</span>
                    <span className="font-light">{totalProducts} articles</span>
                </p>
                <p className='flex items-center gap-3'>
                    <span className="font-medium text-2xl">${totalPrice}</span>
                    <ChevronRightIcon className="w-6 h-6 text-black cursor-pointer"></ChevronRightIcon>
                </p>
            </div>

        </div>

    )


}
export default OrdersCard

