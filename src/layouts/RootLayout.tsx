import { ConfigProvider } from 'antd'

const RootLayout: React.FC = ({ children }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#10b3a3',
          colorSuccess: '#3cb179',
          colorError: '#f2555a',
        },
      }}
    >
      {children}
    </ConfigProvider>
  )
}

export default RootLayout
