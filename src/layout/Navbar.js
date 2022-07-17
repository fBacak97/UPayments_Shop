import React from "react"
import { useNavigate } from "react-router-dom"
import { Layout, Menu } from "antd"
import { HomeOutlined, BookOutlined } from '@ant-design/icons'

const { Header } = Layout

const Navbar = () => {
  const navigate = useNavigate()

  const onClick = e => {
    switch (e.key) {
      case 'home':
        navigate('/')
        break
      case 'create':
        navigate('/create')
        break
      default:
        break
    }
  };

  const menuItems = [
    { label: 'Home', key: 'home', icon: <HomeOutlined/>},
    { label: 'Add New Product', key: 'create', icon: <BookOutlined/>},
  ]
   
  return (
    (<Header style={{padding: '0px', marginBottom: '15px'}}>
      <Menu 
        items={menuItems}
        onClick={onClick}
        selectable={false}
        theme="dark"
        mode="horizontal"
      />
    </Header>)
  )
}

export default Navbar