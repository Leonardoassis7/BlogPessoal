import React, { useEffect } from "react";
import './Home.css';
import {Typography, Grid, Button} from '@material-ui/core';
import {Box, Modal} from '@mui/material';
import TabPostagem from "../../components/postagens/tabpostagem/TabPostagem";
import ModalPostagem from "../../components/postagens/modalPostagem/ModalPostagem";
import { Navigate, useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";
import { TokenState } from "../../store/tokens/tokensReducer";
import {Link} from 'react-router-dom';
import { toast } from "react-toastify";

function Home() {
    let history = useNavigate();
    const token = useSelector<TokenState, TokenState["token"]>(
        (state) => state.token
        );
    
    useEffect(() => {
        if (token == "") {
            toast('Você precisa estar logado!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
            history("/login")
}},[token]);
      
      
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className="caixa">
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className="titulo">Seja bem vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo">expresse aqui os seus pensamentos e opiniões!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                
                            <ModalPostagem/>
                        </Box>
                        <Link to='/posts' className="text-decorator-nome">
                            <Button variant="outlined" className="botao">Ver Postagens</Button>
                        </Link>
                    </Box>
                </Grid>
                <Grid item xs={5} >
                    <img src="https://i.pinimg.com/564x/2d/c3/47/2dc347272e0c6d3f1b38de1f9643dc18.jpg" alt="" width="350px" height="500px" />
                </Grid>
                <Grid xs={12} className='postagens'>
                    <TabPostagem />
                </Grid>
            </Grid>
        </>
    );
}

export default Home;