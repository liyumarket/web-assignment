import { useEffect, useState } from 'react'
import ImageSlider from './components/ImageSlider'
import ImageWithTitle from './components/ImageWithTitle'
import ProductCard from './components/ProductCard'
import axios from 'axios'
import Header from './components/Header'


function App() {
  const [count, setCount] = useState(0)
  const images = [
    'https://en.wikipedia.org/wiki/File:Image_created_with_a_mobile_phone.png',

    'https://en.wikipedia.org/wiki/File:Image_created_with_a_mobile_phone.png',
    'https://en.wikipedia.org/wiki/File:Image_created_with_a_mobile_phone.png',
    // Add more image URLs as needed
  ];

  const [data, setData] = useState(null);
  const [shortcuts, setShortcut] = useState(null);
  const [products, setProducts] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchData = async () => {

    try {
      const response = await axios.get('https://api.testvalley.kr/main-banner/all');
      console.log(response)

      setData(response.data);
    } catch (error) {
      console.log(error)

      setError(error);
    } finally {
      setLoading(false);
    }
  }
  const fetchShortcut = async () => {
    console.log("called")

    try {
      const response = await axios.get('https://api.testvalley.kr/main-shortcut/all');
      console.log(response)

      setShortcut(response.data);
    } catch (error) {
      console.log(error)

      setError(error);
    } finally {
      setLoading(false);
    }
  }
  const fetchProduct = async () => {
    console.log("called")

    try {
      const response = await axios.get('https://api.testvalley.kr/collections?prearrangedDiscount?type=SINGLE&viewType=TILE');
      console.log("products")
      console.log(response.data.items)

      setProducts(response.data.items);
    } catch (error) {
      console.log(error)

      setError(error);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchData();
    fetchShortcut();
    fetchProduct()
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }
  return (
    <>
    <Header/>
      {data&&<ImageSlider banners={data} />}
      <div className="mt-2 grid grid-cols-6 gap-1">
        <div className=""></div>
        <div className=" col-span-4" >
          {shortcuts && <ImageWithTitle shortcuts={shortcuts} />}
          <div className="m-2">  {products && <ProductCard title="test" subtitle="test sub" products={[products[0]]} />}</div>
          <div className="m-2">  {products && <ProductCard title="test" subtitle="test sub" products={products} />}</div>

        </div>
        <div ></div>
      </div>

    </>
  )
}

export default App
