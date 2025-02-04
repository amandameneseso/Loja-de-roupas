import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Box,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const isMobile = useMediaQuery('(max-width:600px)');

  const pages = [
    { name: 'Novidades', path: '/new' },
    { name: 'Feminino', path: '/women' },
    { name: 'Masculino', path: '/men' },
    { name: 'Contato', path: '/contact' },
  ];

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="sticky" sx={{ bgcolor: 'background.paper' }}>
      <Toolbar>
        {/* Logo */}
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            flexGrow: 1,
            color: 'text.primary',
            textDecoration: 'none',
            fontFamily: 'monospace',
            fontWeight: 700,
          }}
        >
          FASHION STORE
        </Typography>

        {/* Menu Desktop */}
        {!isMobile && (
          <Box sx={{ display: 'flex', gap: 2 }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                component={Link}
                to={page.path}
                sx={{ color: 'text.primary', '&:hover': { color: 'primary.main' } }}
              >
                {page.name}
              </Button>
            ))}
          </Box>
        )}

        {/* Ícone do Carrinho */}
        <IconButton
          component={Link}
          to="/cart"
          sx={{ color: 'text.primary', mx: 2 }}
        >
          <ShoppingCartIcon />
        </IconButton>

        {/* Menu Mobile */}
        {isMobile && (
          <>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              onClick={handleMenuOpen}
            >
              <MenuIcon sx={{ color: 'text.primary' }} />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.name}
                  component={Link}
                  to={page.path}
                  onClick={handleMenuClose}
                >
                  {page.name}
                </MenuItem>
              ))}
            </Menu>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;