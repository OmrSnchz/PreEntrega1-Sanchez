import { ShoppingCartOutlined } from '@ant-design/icons';
import { Button, Flex, Tooltip } from 'antd';


const CartWidget = () => (
  <Flex gap="small" vertical>
    <Flex wrap gap="small">
      <Button type="primary" icon={<ShoppingCartOutlined />}>
        5
      </Button>
    </Flex>
  </Flex>
);
export default CartWidget;
