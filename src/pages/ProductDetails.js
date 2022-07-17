import { Row, Col, Divider } from "antd"
import { useLocation } from "react-router-dom"

const ProductDetails = (props) => {
  const location = useLocation()
  const product = location.state.product

  console.log(product)

  return (
    <Row style={{height: '90%'}} justify='center' align='top'>
      <Col span={16} style={{backgroundColor: "white", padding: '10px'}}>
        <Row>
          <Col span={6}>
            <img style={{width: '100%', objectFit: 'contain'}} src={product.avatar} alt='Product Image'></img>
          </Col>
          <Col span={18} style={{padding: '10px'}}>
            <Row style={{height: '50%'}}  align="top">
              <h1>
                <b>{product.name}</b>
              </h1>
            </Row>
            <Row style={{height: '50%'}} align="bottom">
              <h2>
                {product.price+'$'}
              </h2>
            </Row>
          </Col>
        </Row>
        <Divider/>
          <h2>
            <b>Description</b>
          </h2>
          <div>
            <p>
              {product.description}
            </p>
          </div>
      </Col>
    </Row>
  )
}

export default ProductDetails