import React, { useEffect, useState }  from 'react';
import './styles/Header.css';
import Logo from '../assets/imgs/logo.png';
import { IoSearchOutline } from "react-icons/io5";
import { LuUser } from "react-icons/lu";
import { FiExternalLink } from "react-icons/fi";
import { MdExpandMore } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";


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

    //alterar texto do botao
    const [larguraJanela, setLarguraJanela] = useState(window.innerWidth);
    const [textoBotao, setTextoBotao] = useState('Só um instante...');

    useEffect(() => {
        const resizeWindow = () => {
            setLarguraJanela(window.innerWidth);
        };

        window.addEventListener('resize', resizeWindow);

        return () => {
            window.removeEventListener('resize', resizeWindow);
        }
    }, []);

    useEffect(() => {
        if (larguraJanela <= 768) {
            setTextoBotao('GRAND THEFT AUTO VI <br> VER 1° TRAILER AGORA');
        } else {
            setTextoBotao('VEJA O 1º TRAILER DE GRAND THEFT AUTO VI AGORA')
        }
    })

    return (
        <header className='container-fluid contHeader'>
            <div className='row row_btnGta m-0'>
                <div className='col colBtn'>
                    <button className='btnGta' id='btnGta' dangerouslySetInnerHTML={{ __html: textoBotao }}></button>
                </div>
            </div>

            <div className='row m-0 row_btnHeader d-flex alingn-items-center justify-content-around'>
                <div className='col colMenuHamb align-items-center'>
                    <IoMdMenu color='white' size={35} />
                </div>

                <div className='col colLogo'>
                    <img src={Logo} className='logoHeader'/>
                </div>

                <div className='col justify-content-center align-items-center drop-menu colItemsMenu'>
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

                <div className='col d-flex flex-row'>
                    <div className='col justify-content-center align-items-center drop-menu'>
                        <a href='#' className='linkLauncher'>OBTER LAUNCHER</a>
                    </div>
                    <div className='col col-3 justify-content-center align-items-center drop-menu'>
                        <IoSearchOutline size={30} color='white' />
                    </div>
                        
                    <div className='col d-flex justify-content-end align-items-center'>
                        <div className='circuloUser'>
                            <LuUser size={20} color='white' />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}