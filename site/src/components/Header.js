import React, { useState }  from 'react';
import './styles/Header.css';
import Logo from '../assets/imgs/logo.png';
import { IoSearchOutline } from "react-icons/io5";
import { LuUser } from "react-icons/lu";
import { FiExternalLink } from "react-icons/fi";
import { MdExpandMore } from "react-icons/md";


export default function Header() {

    //rotacao do icone expandir do menu Jogos
    const[rotacao_Jogos, setRotacao_Jogos] = useState(1);

    const rotacionarIcone_Jogos = () => {
        setRotacao_Jogos(rotacao_Jogos + 1);
    }


    if(rotacao_Jogos % 2 === 0) {
        var rotJogos = 'rotate(180deg)';
    } else {
        var rotJogos = 'rotate(0deg)';
    }

    //rotacao do icone expandir do menu Mais
    const[rotacao_Mais, setRotacao_Mais] = useState(1);

    const rotacionarIcone_Mais = () => {
        setRotacao_Mais(rotacao_Mais + 1);
    }

    if (rotacao_Mais % 2 === 0) {
        var rotMais = 'rotate(180deg)';
    } else {
        var rotMais = 'rotate(0deg)';
    }
    

    return (
        <header className='container-fluid contHeader'>
            <div className='row row_btnGta m-0'>
                <div className='col colBtn'>
                    <button className='btnGta'>VEJA O 1º TRAILER DE GRAND THEFT AUTO VI AGORA</button>
                </div>
            </div>

            <div className='row m-0 row_btnHeader d-flex alingn-items-center'>
                    <div className='col col-1 colLogo d-flex align-items-center'>
                        <img src={Logo} className='logoHeader'/>
                    </div>

                    <div className='col d-flex justify-content-center align-items-center'>
                        <ul className='listaMenu d-flex justify-content-center align-items-center p-0'>
                            <li className='itemMenu' id='menuJogos-MOpen' onClick={rotacionarIcone_Jogos}> <div className='d-flex flex-row'>Jogos <MdExpandMore id='icon_menuDownload-MOpen' className='iconMenuExpand' size={20} color='white' style={{transform: rotJogos, transition: `ease 0.5s`}} /></div> </li>
                            <li className='itemMenu'>Boletim</li>
                            <li className='itemMenu'>Vídeos</li>
                            <li className='itemMenu'>Downloads</li>
                            <li className='itemMenu' id='menuMais' onClick={rotacionarIcone_Mais}> <div className='d-flex flex-row'>Mais <MdExpandMore className='iconMenuExpand' size={20} color='white' style={{transform: rotMais, transition: `ease 0.5s`}} /></div></li>
                            <li className='itemMenu' id='menuLoja'> <div className='d-flex flex-row'>Loja <FiExternalLink className='iconMenu_LinkAcess' size={15}/></div> </li>
                            <li className='itemMenu' id='menuSuporte'> <div className='d-flex flex-row'>Suporte <FiExternalLink className='iconMenu_LinkAcess' size={15}/></div> </li>
                        </ul>
                    </div>

                    <div className='col col-3 d-flex flex-row'>
                        <div className='col d-flex justify-content-center align-items-center'>
                            <a href='#' className='linkLauncher'>OBTER LAUNCHER</a>
                        </div>
                        <div className='col col-3 d-flex justify-content-center align-items-center'>
                            <IoSearchOutline size={30} color='white' />
                        </div>
                        <div className='col col-3  d-flex justify-content-center align-items-center'>
                            <div className='circuloUser'>
                                <LuUser size={20} color='white' />
                            </div>
                        </div>
                    </div>
                </div>
        </header>
    )
}