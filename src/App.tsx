import { Button, Card, CardContent, Typography } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <Router>
    <>
    <Navbar />
    <div style={{ padding: '2rem' }}>
      <Typography variant="h3" color="primary" gutterBottom>
        🧥 Loja de Roupas
      </Typography>

      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography variant="h5">Jaqueta Jeans</Typography>
          <Typography variant="body2" color="text.secondary">
            Jaqueta em denim lavado, estilo clássico.
          </Typography>
          <Button 
            variant="contained" 
            startIcon={<ShoppingCart />}
            sx={{ mt: 2 }}
          >
            Comprar R$ 299
          </Button>
        </CardContent>
      </Card>
    </div>
    </>
    </Router>
  );
};

export default App;