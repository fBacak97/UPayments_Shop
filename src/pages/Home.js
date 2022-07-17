import { DeleteOutlined, InfoCircleOutlined } from "@ant-design/icons"
import { Card, List, Modal, Row, Select } from "antd"
import { useEffect, useState } from "react"
import { useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom"
import { deleteProduct, getProducts } from "../api/api"

const Home = () => {
  const navigate = useNavigate()
  const categories = useSelector(state => state.categories)
  const [products, setProducts] = useState([])
  const [categoryFilter, setCategoryFilter] = useState(undefined)
  const [filteredProducts, setFilteredProducts] = useState([])

  useEffect(() => {
    getProducts().then(({data: products}) => {
      setProducts(products)
    })
  }, [])

  useEffect(() => {
    if(categoryFilter){
      setFilteredProducts(products.filter((elem) => elem.category === categoryFilter))
    }else{
      setFilteredProducts(products)
    }
  }, [categoryFilter, products])

  const deleteAttempt = (productId) => {
    Modal.confirm({
      title: "Warning",
      content: "Are you sure you want to delete this product?",
      maskClosable: true,
      onOk: () => {
        deleteProduct(productId).then((data) => {
          setProducts(products.filter((elem) => elem.id !== productId))
        }).catch((err) => {
          Modal.error({
            title: "Error",
            content: "Encountered an error while deleting the product.",
            maskClosable: true
          })
        })
      }
    })
  }

  return (
    <div className="container">
      <Row>
        <Select
          allowClear
          onClear={() => {setCategoryFilter(undefined)}}
          onSelect={setCategoryFilter}
          placeholder={'Category'}
          options={categories.map(elem => {return {label: elem.name, value: elem.name}})}
        />
      </Row>
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 3,
          lg: 4,
          xl: 5,
          xxl: 5,
        }}
        dataSource={filteredProducts}
        style={{paddingTop: '10px'}}
        renderItem={(elem) => (        
          <List.Item>
            <Card
              key={elem.id}
              hoverable
              cover={<img style={{padding: '2px', maxHeight:'250px'}} src={elem.avatar} alt='Product Image'></img>}
              actions={[
                <InfoCircleOutlined key="description" onClick={() => {navigate(`product/${elem.id}`, {state: {product: elem}})}}/>,
                <DeleteOutlined key="delete" onClick={() => {deleteAttempt(elem.id)}}/>,
              ]}
            >
              <Card.Meta title={elem.name} description={elem.price + '$'}/>
            </Card>
          </List.Item>
        )}
      />
    </div>
  )
}

export default Home