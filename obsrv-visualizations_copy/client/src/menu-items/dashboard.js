// assets
import { FileSearchOutlined } from '@ant-design/icons';

// constant
const icons = { FileSearchOutlined };

const dashboard = {
  id: 'report',
  title: 'Report',
  type: 'group',
  children: [
    {
      id: '',
      title: 'Report',
      type: 'item',
      url: '/',
      icon: icons.FileSearchOutlined,
      breadcrumbs: false,
    }
  ]
};

export default dashboard;
