import Icon from '@mui/material/Icon';
import List from '@mui/material/List';
import Avatar from '@mui/material/Avatar';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';

import { styled } from '@mui/material/styles';
import { indigo, lightBlue, pink } from '@mui/material/colors';

import pjson from '../package.json';

type Props = {
  drawerOpen: boolean;
  onToggleDrawer: () => void;
  onSort: (filter: Filter) => void;
};

// ドロワー内リストの幅をカスタマイズ
const DrawerList = styled('div')(() => ({
  width: 250,
}));

// ドロワーヘッダーのサイズ・色などをカスタマイズ
const DrawerHeader = styled('div')(() => ({
  height: 150,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '1em',
  backgroundColor: indigo[500],
  color: '#ffffff',
  fontFamily: '-apple-system, BlinkMacSystemFont, Roboto, sans-serif',
}));

// ヘッダー内に表示するアバターのカスタマイズ
const DrawerAvatar = styled(Avatar)(({ theme }) => ({
  backgroundColor: pink[500],
  width: theme.spacing(6),
  height: theme.spacing(6),
}));

export const SideBar = (props: Props) => {
  return (
    <Drawer
      variant="temporary"
      // 開閉状態のステートからの props
      open={props.drawerOpen}
      // 開閉トグルのための props
      onClose={props.onToggleDrawer}
    >
      <DrawerList role="presentation" onClick={props.onToggleDrawer}>
        {/* ヘッダーとアバター */}
        <DrawerHeader>
          <DrawerAvatar>
            <Icon>create</Icon>
          </DrawerAvatar>
          {/* バージョン表示 */}
          <p>TODO v{pjson.version}</p>
        </DrawerHeader>
        <List>
          <ListItem disablePadding>
            <ListItemButton
              aria-label="list-all"
              onClick={() => props.onSort('all')}
            >
              <ListItemIcon>
                <Icon>subject</Icon>
              </ListItemIcon>
              <ListItemText secondary="すべてのタスク" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              aria-label="list-unchecked"
              onClick={() => props.onSort('unchecked')}
            >
              <ListItemIcon>
                <Icon sx={{ color: lightBlue[500] }}>
                  radio_button_unchecked
                </Icon>
              </ListItemIcon>
              <ListItemText secondary="現在のタスク" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              aria-label="list-checked"
              onClick={() => props.onSort('checked')}
            >
              <ListItemIcon>
                <Icon sx={{ color: pink.A200 }}>check_circle_outline</Icon>
              </ListItemIcon>
              <ListItemText secondary="完了したタスク" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              aria-label="list-removed"
              onClick={() => props.onSort('removed')}
            >
              <ListItemIcon>
                <Icon>delete</Icon>
              </ListItemIcon>
              <ListItemText secondary="ごみ箱" />
            </ListItemButton>
          </ListItem>
          <Divider />
        </List>
      </DrawerList>
    </Drawer>
  );
};
