import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { ShoppingCartIcon } from "@heroicons/react/24/solid"
import { ShoppingCartContext } from "../../Context"


const Navbar = () => {
	const context = useContext(ShoppingCartContext)
	const activeStyle = "underline underline-offset-4"


	return (
		<nav className="fixed top-0 z-10 flex items-center justify-between w-full px-8 py-5 text-sm font-light">
			<ul className="flex gap-3 items center">
				<li className="text-lg font-semibold">
					<NavLink
						to='/'>
						Shopi
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/'
						onClick={() => context.setSearchByCategory()}
						className={({ isActive }) =>
							isActive ? activeStyle : undefined

						}>
						All
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/clothes'
						onClick={() => context.setSearchByCategory('clothes')}
						className={({ isActive }) =>
							isActive ? activeStyle : undefined

						}>
						Clothes
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/electronics'
						onClick={() => context.setSearchByCategory('electronics')}
						className={({ isActive }) =>
							isActive ? activeStyle : undefined

						}>
						Electronics
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/fornitures'
						onClick={() => context.setSearchByCategory('fornitures')}
						className={({ isActive }) =>
							isActive ? activeStyle : undefined

						}>
						Fornitures
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/toys'
						onClick={() => context.setSearchByCategory('toys')}
						className={({ isActive }) =>
							isActive ? activeStyle : undefined

						}>
						Toys
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/others'
						onClick={() => context.setSearchByCategory('others')}
						className={({ isActive }) =>
							isActive ? activeStyle : undefined

						}>
						Others
					</NavLink>
				</li>
			</ul>
			<ul className="flex gap-3 items center">
				<li className="text-black/60">
					mary@example.com
				</li>
				<li>
					<NavLink
						to='/my-order'
						className={({ isActive }) =>
							isActive ? activeStyle : undefined

						}>
						My Order
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/my-orders'
						className={({ isActive }) =>
							isActive ? activeStyle : undefined

						}>
						My Orders
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/my-accornt'
						className={({ isActive }) =>
							isActive ? activeStyle : undefined

						}>
						My Acoount
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/sign-in'
						className={({ isActive }) =>
							isActive ? activeStyle : undefined

						}>
						Sign In
					</NavLink>
				</li>
				<li className="flex items-center">
					<ShoppingCartIcon className="w-6 h-6 text-black "></ShoppingCartIcon>
					<div>{context.cartProducts.length}</div>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar