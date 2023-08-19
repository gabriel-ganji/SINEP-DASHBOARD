import { useContext, useState } from "react";
import { DarkModeContext } from "../context/DarkModeContext";

const SidebarNav = () => { 
  
  const {darkMode} = useContext(DarkModeContext);
  
  return [
  {
    link: '/dashboard',
    section: 'dashboard',
    icon: <i className="bx bx-home-alt"></i>,
    text: 'Início',
  },
  {
    link: '/dashboard/notificacoes',
    section: 'notificacoes',
    icon: <i className="bx bx-bell"></i>,
    text: 'Notificações',
  },
  {
    link: '/dashboard/vender',
    section: 'vender',
    icon: <i className="bx bx-money"></i>,
    text: 'Vender',
  },
  {
    link: '/dashboard/registrar',
    section: 'registrar',
    icon: <i className="bx bxs-file-plus"></i>,
    text: 'Registrar Produto',
  },
  {
    link: '/dashboard/estoque',
    section: 'estoque',
    icon: <i className="bx bx-list-ol"></i>,
    text: 'Estoque de Produtos',
  },
  {
    link: '/dashboard/atualizar',
    section: 'atualizar',
    icon: <i className="bx bx-refresh"></i>,
    text: 'Atualizar Produto',
  },
  {
    link: '/dashboard/deletar',
    section: 'deletar',
    icon: <i className="bx bx-x"></i>,
    text: 'Deletar Produto',
  },
  {
    link: '/dashboard/fale-conosco',
    section: 'fale-conosco',
    icon: <i className="bx bx-chat"></i>,
    text: 'Fale Conosco',
  },
  {
    darkMode: true,
    icon: <i className="bx bx-moon" style={{backgroundColor: "#454545", borderRadius: "30px"}} ></i>,
    text: (darkMode ? "Modo Claro" : "Modo Escuro"),
    action: 'darkMode',
  }
]
}

export default SidebarNav;