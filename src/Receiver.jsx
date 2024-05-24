import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Footer from './Footer';
import Navbar from './NavBar';
import ReadMoreButton from './ReadMoreButton';
import { BackgroundImage, Center, Title, Box, Text, Grid, GridCol, Card, Image, Group, SimpleGrid, Stack, Paper, List} from '@mantine/core';
import './styles/ModernBalconyRailings.css';

function Receiver() {
    return (
        <div className="App">
      <Navbar />
      <header className="App-header" style={{ marginTop: '100px' }}>
      <h1 className='head'> Receivers <br/> DKS - Dorking </h1>
    
      <Center>
      <Text className='text-secondary'fz={20} maw={800} style={{ marginTop: 5, marginBottom:0 }}>MicroPLUS RF controls provide you with the highest level of security available with RF
access controls. Our coding and encryption schemes are not shared with other
producers, resulting in transmitter codes that cannot be duplicated or copied. With
MicroPLUS controls, you are assured that only the original intended transmitter will
activate your access system.</Text>
     </Center>
 
     <h2 className='head'>Doorking 8054-081 Micro-Plus Receivers</h2>
     <Paper shadow="xs" p={0} radius="md">
     <Group justify="center" mx="20px" h={500}>    
        <Image
          src="/receiver1.png"
          h={450}
          w="auto"
          fit="contain"
          alt="Balcony"
        />
      
      <List className='text-secondary'ta="left" style={{ marginTop: 0, marginBottom:0 }} fz={20} maw={280} fw="bold">
       <List.Item>Stand-alone receiver</List.Item>
       <List.Item>Stores up to 1250
transmitter codes
2300 event transaction
buffer</List.Item>
      <List.Item>Output for serial printer.
10 programmable time
zones.</List.Item>
      <List.Item> Built-in clock / calendar.</List.Item>
      <List.Item>Programming keypad. </List.Item>
      <List.Item>Form C relay.</List.Item>
      <List.Item>12-24 volt, AC or DC.</List.Item>
      </List>
      </Group>
    </Paper>

    <h2 className='head'>Doorking 8057-081 Micro-Plus Receivers</h2>
     <Paper shadow="xs" p={0} radius="md">
     <Group justify="center" mx="20px" h={500}>    
        <Image
          src="/receiver2.png"
          h={450}
          w="auto"
          fit="contain"
          alt="Balcony"
        />
      
      <List className='text-secondary'ta="left" style={{ marginTop: 0, marginBottom:0 }} fz={20} maw={280} fw="bold">
       <List.Item>Designed for multi-user
stand-alone applications.</List.Item>
       <List.Item>Can store up to 16000
transmitter codes.</List.Item>
      <List.Item>Uses 8066-080, 8067-080
and 8068-080 transmitters, includes batteries,
318MHz.</List.Item>
      <List.Item>  Single Pole relay.</List.Item>
      <List.Item>Built-in programming keypad
for adding and deleting
individual codes.</List.Item>
  
      </List>
      </Group>
    </Paper>

      </header>
      <Footer />
    </div>

    );
}

export default Receiver