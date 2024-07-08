import React from 'react';
import { Box, AppBar, Toolbar, styled, Stack, IconButton, Badge, Button } from '@mui/material';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Logo from '../shared/logo/Logo';

// components
import { IconBellRinging, IconMenu } from '@tabler/icons';

const HeaderLoggedOut = (props) => {
  // const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));
  // const lgDown = useMediaQuery((theme) => theme.breakpoints.down('lg'));

  const AppBarStyled = styled(AppBar)(({ theme }) => ({
    boxShadow: 'none',
    background: theme.palette.background.paper,
    justifyContent: 'center',
    backdropFilter: 'blur(4px)',
    [theme.breakpoints.up('lg')]: {
      minHeight: '70px',
    },
  }));
  const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
    width: '100%',
    color: theme.palette.text.secondary,
  }));

  return (
    <AppBarStyled position="sticky" color="default">
      <ToolbarStyled>
        {/* <IconButton
          color="inherit"
          aria-label="menu"
          onClick={props.toggleMobileSidebar}
          sx={{
            display: {
              lg: 'none',
              xs: 'inline',
            },
          }}
        >
          <IconMenu width="20" height="20" />
        </IconButton> */}
        <Logo authenticated={false}/>


        {/* <IconButton
          size="large"
          aria-label="show 11 new notifications"
          color="inherit"
          aria-controls="msgs-menu"
          aria-haspopup="true"
          sx={{
            ...(typeof anchorEl2 === 'object' && {
              color: 'primary.main',
            }),
          }}
        >
          <Badge variant="dot" color="primary">
            <IconBellRinging size="21" stroke="1.5" />
          </Badge>

        </IconButton> */}
        <Box flexGrow={1} />
        <Stack spacing={1} direction="row" alignItems="center">
        <Button color="inherit" component={Link} to="/auth/login">
          Log In
        </Button>
        <Button color="inherit" component={Link} to="/auth/register">
          Register
        </Button>
        </Stack>
      </ToolbarStyled>
    </AppBarStyled>
  );
};

HeaderLoggedOut.propTypes = {
  sx: PropTypes.object,
};

export default HeaderLoggedOut;
