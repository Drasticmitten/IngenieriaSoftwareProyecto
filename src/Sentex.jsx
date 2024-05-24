import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Footer from './Footer';
import Navbar from './NavBar';
import ReadMoreButton from './ReadMoreButton';
import { BackgroundImage, Center, Title, Box, Text, Grid, GridCol, Card, Image, Group, SimpleGrid, Stack, Paper} from '@mantine/core';
import './styles/ModernBalconyRailings.css';

function Sentex() {
    return (
      <div className="App">
      <Navbar />
      <header className="App-header" style={{ marginTop: '100px' }}>
      <h1 className='head'> Telephone Entry <br /> Sentex </h1>
    
      <Center>
      <Text className='text-secondary'fz={20} maw={800} >These electronic devices are designed to receive remote control signals and execute
corresponding commands, such as opening or closing a door or gate. These receivers are an
essential part of the accessory automation system and work in conjunction with transmitters
(remotes) and other system components.</Text>
     </Center>
     
     <h2 className='headish'>Sentex Model Infinity</h2>
    
    <SimpleGrid cols={2} spacing="xl" verticalSpacing="lg" mx={{ base: 10, sm: 80, lg: 200 }} my="lg">
     
     <Paper shadow="xs" p={0} radius="md">
     <Group h="100%" justify="center" mx="20px" grow>    
        <Image
          src="/sentex1.png"
          height={300}
          alt="Balcony"
        />
      <Text className='text-secondary' style={{ marginTop: 0, marginBottom:0 }} fz={20}>
      Sentex Infinity L Office
Building or Gated
Residential Community
Telephone Entry System -
Large Display
      </Text>
      </Group>
    </Paper>
    
    <Paper shadow="xs" p={0} radius="md">
     <Group h="100%" justify="center" mx="20px"  grow>    
        <Image
          src="/sentex2.png"
          height={300}
          alt="Balcony"
        />
      <Text className='text-secondary' style={{ marginTop: 0, marginBottom:0 }} fz={20}>
      Sentex Infinity S Office
Building or Gated Res.
Community
Telephone
Entry System - 2-Line
Display of 16 Ch. Each
      </Text>
      </Group>
    </Paper>
    
    <Paper shadow="xs" p={0} radius="md">
     <Group h="100%" justify="center" mx="20px"  grow>    
        <Image
          src="/sentex3.png"
          height={300}
          alt="Balcony"
        />
      <Text className='text-secondary' style={{ marginTop: 0, marginBottom:0 }} fz={20}>
      Sentex Infinity M Office
Building or Gated Res.
Community
Telephone
Entry System - 2-Line
Display of 20 Ch. Each

      </Text>
      </Group>
    </Paper> 

    <Paper shadow="xs" p={0} radius="md">
     <Group h="100%" justify="center" mx="20px"  grow>    
        <Image
          src="/sentex4.png"
          height={300}
          alt="Balcony"
        />
      <Text className='text-secondary' style={{ marginTop: 0, marginBottom:0 }} fz={20}>
      Sentex Infinity B
Commercial or Industrial
Access Control
Unit
      </Text>
      </Group>
    </Paper> 
 </SimpleGrid>
    <h2 className='headish'>Sentex Model MINIkey</h2>
 <SimpleGrid cols={1} spacing="xl" verticalSpacing="lg" mx={{ base: 10, sm: 80, lg: 200 }} my="lg">
     
     <Paper shadow="xs" p={0} radius="md">
     <Group h="100%" justify="center" mx="20px" grow>    
        <Image
          src="/sentex5.png"
          height={300}
          alt="Balcony"
        />
      <Stack justify='center' gap="xs" my="lg" >
      <h4 className='headish'>Sentex MINIkey Self
Contained Keypad System for
Door and
Gated Entrances</h4>
      <Text className='text-secondary' style={{ marginTop: 0, marginBottom:0 }} fz={20}>
      The MINIkey is a self contained
keypad system for the control of door
and gated entrances.
      </Text>
      </Stack>
      </Group>
    </Paper>
    
    
 </SimpleGrid>

      </header>
      <Footer />
    </div>

    );
}

export default Sentex