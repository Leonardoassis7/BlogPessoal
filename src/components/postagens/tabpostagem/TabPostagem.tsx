import React, { useState } from 'react';
import { AppBar, Tab, Tabs, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { TabContext, TabPanel } from '@material-ui/lab';
import ListaPostagem from '../listapostagem/ListaPostagem';



function TabPostagem(): JSX.Element {
  const [value, setValue] = useState<string>('1');

  function handleChange(event: React.ChangeEvent<{}>, newValue: string): void {
    setValue(newValue);
  }

  return (
    <>
      <TabContext value={value}>
        <AppBar position="static">
          <Tabs centered indicatorColor="secondary" onChange={handleChange}>
            <Tab label="Todas as postagens" value="1" />
            <Tab label="Sobre-nós" value="2" />
          </Tabs>
        </AppBar>
        <TabPanel value="1">
          <Box display="flex" flexWrap="wrap" justifyContent="center">
            <ListaPostagem />
          </Box>
        </TabPanel>
        <TabPanel value="2">
          <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo">
            Sobre-nós
          </Typography>
          <Typography variant="body1" gutterBottom color="textPrimary" align="justify">
            <Box className="content">
              <Box className="slides">
                <input type="radio" name="slide" id="slide1" checked />
                <input type="radio" name="slide" id="slide2" />
                <Box className="slide s1">
                  <img src="https://i.pinimg.com/564x/f5/6d/57/f56d5763b63511f43291f8df5ed54378.jpg" alt="familia" />
                </Box>
                <Box className="slide s2">
                  <img src="https://i.pinimg.com/564x/0f/5b/a5/0f5ba53578d8e3195712e02683fb8a02.jpg" alt="com meu pai" />
                </Box>
              </Box>
              <Box className="navigation">
                <label className="bar" htmlFor="slide1" />
                <label className="bar" htmlFor="slide2" />
              </Box>
            </Box>
          </Typography>
        </TabPanel>
      </TabContext>
    </>
  );
}

export default TabPostagem;