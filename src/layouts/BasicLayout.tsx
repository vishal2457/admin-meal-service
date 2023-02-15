import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons'
import { Layout, Menu } from 'antd'

const BasicLayout = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Layout.Sider trigger={null} collapsible>
        <div className='logo' />
        <Menu
          mode='inline'
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'nav 1',
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'nav 2',
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'nav 3',
            },
          ]}
        />
      </Layout.Sider>
      <Layout>
        <Layout.Content style={{ margin: '24px 16px 0' }}>
          <div>content</div>
        </Layout.Content>
        <Layout.Footer style={{ textAlign: 'center' }}>
          Meal service
        </Layout.Footer>
      </Layout>
    </Layout>
  )
}

export default BasicLayout
