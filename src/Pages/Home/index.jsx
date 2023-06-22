import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import Layout from "../../Components/Layout"
import Card from "../../Components/Card"
import ProductDetail from "../../Components/ProductDetail"

function Home() {
  const context = useContext(ShoppingCartContext)

  const renderView = () => {
    if (context.filteredItems?.length > 0) {
      return (
        context.filteredItems?.map(item => (
          <Card key={item.id} data={item} />
        ))
      )
    } else {
      return (
        <div>We dont have anything</div>
      )

    }

  }

  return (

    <Layout>
      <div className="flex w-80 relative justify-center items-center mb-8">
        <h1 className="font-medium text-xl">Exclusive Products</h1>
      </div>
      <input
        type="text"
        placeholder="Search Products"
        className="rounded-lg border border-black w-80 p-4 mb-8 focus:outline-none"
        onChange={(event) => context.setSearchByTitle(event.target.value)} />
      <div className="grid w-full max-w-screen-lg grid-cols-4 gap-4">
        {renderView()}
      </div>
      <ProductDetail />

    </Layout>
  )
}

export default Home