import { useSelector } from 'react-redux'
import { Form, Input, Button, Row, Col, Select, Modal } from "antd"
import { createNewProduct } from "../api/api"

const NewProduct = (props) => {
  const [createForm] = Form.useForm()
  const categories = useSelector(state => state.categories)

  const createProduct = ({name, description, imageUrl, category, price}) => {
    createNewProduct(name, description, imageUrl, category, price).then(({data}) => {
      Modal.success({
        title: "Success",
        content: "Successfully created the new product.",
        maskClosable: true,
        onOk: () => {
          createForm.resetFields()
        }
      })
    }).catch((err) => {
      Modal.error({
        title: "Error",
        content: "Encountered an error while creating the product.",
        maskClosable: true,
      })
    })
  }

  return (
    <Row style={{height: '50%'}} justify='center' align='middle'>
      <Col span={10}>
        <div style={{padding: '25px', textAlign: 'center'}}>
          <h1>
            <b>Create Product</b>
          </h1>
        </div>
        <Form
          form={createForm}
          requiredMark={false}
          align='right'
          name="basic"
          labelCol={{
            span: 6,
          }}
          wrapperCol={{
            span: 18,
          }}
          autoComplete='on'
          onFinish={createProduct}
          onFinishFailed={() => {}}
        >
          <Form.Item
            wrapperCol={{
              offset: 3,
              span: 18,
            }}
            name="name"
            rules={[
              {
                required: true,
                message: 'Please enter the product name!',
              },
            ]}
          >
            <Input placeholder="Product Name"/>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 3,
              span: 18,
            }}
            name="description"
            rules={[
              {
                required: true,
                message: 'Please enter a product description!',
              },
            ]}
          >
            <Input.TextArea placeholder='Description' rows={4} />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 3,
              span: 18,
            }}
            name="imageUrl"
            rules={[
              {
                required: true,
                message: 'Please enter an image URL!',
              },
            ]}
          >
            <Input placeholder="Image URL"/>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 3,
              span: 18,
            }}
            name="category"
            rules={[
              {
                required: true,
                message: 'Please select a product category!',
              },
            ]}
          >
            <Select align='left' options={categories.map(elem => {return {label: elem.name, value: elem.name}})} placeholder="Category"/>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 3,
              span: 18,
            }}
            name="price"
            rules={[
              {
                required: true,
                message: 'Please enter a product price!',
              },
            ]}
          >
            <Input type={'number'} placeholder="Price in Dollars"/>
          </Form.Item>
          
          <Form.Item
            wrapperCol={{
              offset: 15,
              span: 6,
            }}
          >
            <Button type="primary" htmlType="submit" shape='round'>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  )
}

export default NewProduct