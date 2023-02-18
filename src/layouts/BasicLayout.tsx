import { PlusOutlined, TagOutlined } from '@ant-design/icons'
import { Layout, Menu, Space } from 'antd'
import { history } from '@vitjs/runtime'

const BasicLayout: React.FC = ({ children }) => {
  const handleMenuClick = (e: any) => {
    history.push(e.key)
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Layout.Sider trigger={null} collapsible theme='light'>
        <Space
          direction='vertical'
          style={{ display: 'block', justifyContent: 'center' }}
        >
          <div className='logo' />
          <Menu
            mode='inline'
            onClick={handleMenuClick}
            defaultSelectedKeys={['/add-meal']}
            items={[
              {
                key: '/add-meal',
                icon: <PlusOutlined />,
                label: 'Add Meal',
              },
              {
                key: '/tags',
                icon: <TagOutlined />,
                label: 'Tags',
              },
            ]}
          />
        </Space>
      </Layout.Sider>
      <Layout>
        <Layout.Content style={{ margin: '24px 16px 0' }}>
          {children}
        </Layout.Content>
        <Layout.Footer style={{ textAlign: 'center' }}>
          Meal service
        </Layout.Footer>
      </Layout>
    </Layout>
  )
}

export default BasicLayout
