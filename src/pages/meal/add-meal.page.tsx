import { Button, Form, Input, InputNumber, Tag, theme } from 'antd'
import type { InputRef } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { useEffect } from 'react'

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 },
}

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
}
/* eslint-enable no-template-curly-in-string */

const onFinish = (values: any) => {
  console.log(values)
}

const AddMeal: React.FC = () => {
  const { token } = theme.useToken()
  const [tags, setTags] = useState<string[]>([])
  const [inputVisible, setInputVisible] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const inputRef = useRef<InputRef>(null)

  useEffect(() => {
    if (inputVisible) {
      inputRef.current?.focus()
    }
  }, [inputVisible])

  const handleClose = (removedTag: string) => {
    const newTags = tags.filter((tag) => tag !== removedTag)
    console.log(newTags)
    setTags(newTags)
  }

  const showInput = () => {
    setInputVisible(true)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleInputConfirm = () => {
    if (inputValue && tags.indexOf(inputValue) === -1) {
      setTags([...tags, inputValue])
    }
    setInputVisible(false)
    setInputValue('')
  }

  const forMap = (tag: string) => {
    const tagElem = (
      <Tag
        closable
        onClose={(e) => {
          e.preventDefault()
          handleClose(tag)
        }}
      >
        {tag}
      </Tag>
    )
    return (
      <span key={tag} style={{ display: 'inline-block' }}>
        {tagElem}
      </span>
    )
  }

  const tagChild = tags.map(forMap)

  const tagPlusStyle = {
    background: token.colorBgContainer,
    borderStyle: 'dashed',
  }

  return (
    <>
      <Form
        {...layout}
        name='nest-messages'
        onFinish={onFinish}
        style={{ maxWidth: 600 }}
        validateMessages={validateMessages}
      >
        <Form.Item
          name={['user', 'name']}
          label='Name'
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={['user', 'email']}
          label='Email'
          rules={[{ type: 'email' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={['user', 'age']}
          label='Age'
          rules={[{ type: 'number', min: 0, max: 99 }]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item name={['user', 'website']} label='Website'>
          <Input />
        </Form.Item>
        <Form.Item name={['user', 'introduction']} label='Introduction'>
          <Input.TextArea />
        </Form.Item>
        <div style={{ marginBottom: 16 }}>{tagChild}</div>
        {inputVisible ? (
          <Input
            ref={inputRef}
            type='text'
            size='small'
            style={{ width: 78 }}
            value={inputValue}
            onChange={handleInputChange}
            onBlur={handleInputConfirm}
            onPressEnter={handleInputConfirm}
          />
        ) : (
          <Tag onClick={showInput} style={tagPlusStyle}>
            <PlusOutlined /> New Tag
          </Tag>
        )}
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}

export default AddMeal
