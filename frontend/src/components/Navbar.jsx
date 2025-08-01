import React, { useState, useContext } from "react";
import { assets } from "../assets/frontend_assets/assets.js";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ShopContext } from "../context/ShopContext.jsx";

const Navbar = () => {
  const [visible,setVisible] = useState(false);
  const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext);
  const location = useLocation(); // Hook para obter a localização atual

  const logout =() => {
    navigate('/login');
    localStorage.removeItem('token');
    setToken('');
    setCartItems({});
  }

  // Função para lidar com o clique no ícone de pesquisa
  const handleSearchIconClick = () => {
    // Se o usuário não estiver na página /collection, navega para ela
    if (!location.pathname.includes('/collection')) {
      navigate('/collection');
    }
    // Sempre mostra a barra de pesquisa
    setShowSearch(true);
  };

  return (
    <>
      <div className="flex items-center justify-between py-5 font-medium">
        <Link to='/'><img src={assets.logo} className="w-40" alt="" /></Link>

        <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
          <NavLink to="/" className="flex flex-col items-center gap-1">
            <p>HOME</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
          <NavLink
            to="/collection"
            className="flex flex-col items-center gap-1"
          >
            <p>PRODUTOS</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
          <NavLink to="/about" className="flex flex-col items-center gap-1">
            <p>SOBRE</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
          <NavLink to="/contact" className="flex flex-col items-center gap-1">
            <p>CONTATO</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
        </ul>

        <div className="flex items-center gap-6">
          <img onClick={handleSearchIconClick} src={assets.search_icon} className="w-5 cursor-pointer" alt="" />
          <div className="group relative">
            <img
                onClick={() => token ? null : navigate('/login')}
                src={assets.profile_icon}
                className="w-5 cursor-pointer"
                alt=""
            />
            {/* Menu do usuário*/}
            {token &&
            <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
              <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rouded">
                <p className="cursor-pointer hover:text-black">Meu perfil</p>
                <p onClick={()=>navigate('/orders')} className="cursor-pointer hover:text-black">Pedidos</p>
                <p onClick={logout} className="cursor-pointer hover:text-black">Sair</p>
              </div>
            </div>}
          </div>
          <Link to="/cart" className="relative">
            <img src={assets.cart_icon} className="w-5 min-w-5" alt="" />
            <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">{getCartCount()}</p>
          </Link>
          <img onClick={() => setVisible(true)} src={assets.menu_icon} className="w-5 cursor-pointer sm:hidden" alt=""/>
        </div>
        {/* sidebar para telas pequenas */}
        <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
          <div className='flex flex-col text-gray-600'>
            <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
              <img className='h-4 rotate-180' src={assets.dropdown_icon} alt="" />
              <p>Voltar</p>
            </div>
            <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/'>Home</NavLink>
            <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/collection'>Produtos</NavLink>
            <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/about'>Sobre</NavLink>
            <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/contact'>Contato</NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
