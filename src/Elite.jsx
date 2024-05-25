import { Center, Group, Image, Paper, SimpleGrid, Text } from '@mantine/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Footer from './Footer';
import Navbar from './NavBar';
import './styles/ModernBalconyRailings.css';

function Elite() {
    return (
      <div className="App">
      <Navbar />
      <header className="App-header" style={{ marginTop: '100px' }}>
      <h1 className='head'> Telephone Entry <br /> Elite </h1>
    
      <Center>
      <Text className='text-secondary'fz={20} maw={800} >Telephone entry system used in both residences and commercial environments to manage
and control access to buildings. This system is compatible with various configurations and
types of doors, gates or barriers, adapting to various security needs.</Text>
     </Center>
     
     <h2 className='headish'>Elite Model EL</h2>
    
    <SimpleGrid cols={2} spacing="xl" verticalSpacing="lg" mx={{ base: 10, sm: 80, lg: 200 }} my="lg">
     
     <Paper shadow="xs" p={0} radius="md">
     <Group h="100%" justify="center" mx="20px" grow>    
        <Image
          src="/elite1.png"
          height={300}
          alt="Balcony"
        />
      <Text className='text-secondary' style={{ marginTop: 0, marginBottom:0 }} fz={20}>
      Elite EL25 Residential
and Commercial
Telephone Entry
System with
Expanded Capacity
and
Enhanced
Versatility
      </Text>
      </Group>
    </Paper>
    
    <Paper shadow="xs" p={0} radius="md">
     <Group h="100%" justify="center" mx="20px"  grow>    
        <Image
          src="/elite2.png"
          height={300}
          alt="Balcony"
        />
      <Text className='text-secondary' style={{ marginTop: 0, marginBottom:0 }} fz={20}>
      Elite EL2000
Telephone Entry for
Commercial
Applications and
Gated
Communities
      </Text>
      </Group>
    </Paper>
    
    
 </SimpleGrid>
    <h2 className='headish'>Elite Model Dial</h2>
 <SimpleGrid cols={1} spacing="xl" verticalSpacing="lg" mx={{ base: 10, sm: 80, lg: 200 }} my="lg">
     
     <Paper shadow="xs" p={0} radius="md">
     <Group h="100%" justify="center" mx="20px" grow>    
        <Image
          src="/elite3.png"
          height={300}
          alt="Balcony"
        />
      <Text className='text-secondary' style={{ marginTop: 0, marginBottom:0 }} fz={20}>
      Elite Dial Code Telephone
Entry for Perimeter Control

      </Text>
  
      </Group>
    </Paper>
    
    
 </SimpleGrid>

 <h2 className='headish'>Elite Model Icon</h2>
 <SimpleGrid cols={1} spacing="xl" verticalSpacing="lg" mx={{ base: 10, sm: 80, lg: 180 }} my="lg">
     
     <Paper shadow="xs" p={0} radius="md">
     <Group h="100%" justify="center" mx="20px" >    
        <Image
          src="/elite4.png"
          height={300}
          alt="Balcony"
        />
      <Text className='text-secondary' style={{ marginTop: 0, marginBottom:0 }} fz={20}>
      Elite Icon 26 Advanced MultiTenant Access Control System

      </Text>
  
      </Group>
    </Paper>
    
    
 </SimpleGrid>

 <h2 className='headish'>Elite Model EXC</h2>
 <SimpleGrid cols={1} spacing="xl" verticalSpacing="lg" mx={{ base: 10, sm: 80, lg: 180 }} my="lg">
     
     <Paper shadow="xs" p={0} radius="md">
     <Group h="100%" justify="center" mx="20px" grow>    
        <Image
          src="/elite5.png"
          height={300}
          alt="Balcony"
        />
      <Text className='text-secondary' style={{ marginTop: 0, marginBottom:0 }} fz={20}>
      Sentex MINIkey SelfContained Keypad System for
Door and
Gated Entrances

      </Text>
  
      </Group>
    </Paper>
    
    
 </SimpleGrid>
      </header>
      <Footer />
    </div>

    );
}

export default Elite