import { Center, Group, Image, Paper, SimpleGrid, Stack, Text } from '@mantine/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Footer from './Footer';
import Navbar from './NavBar';
import './styles/ModernBalconyRailings.css';

function Allstar() {
    return (
      <div className="App">
      <Navbar />
      <header className="App-header" style={{ marginTop: '100px' }}>
      <h1 className='head'> Allstar / OSCO: The new Linear </h1>
    
      <Center>
      <Text className='text-secondary'fz={20} maw={800} >Linear is the new unified brand for the trusted products you know and love from Allstar Gate
Openers and OSCO. This exciting merger brings together a legacy of quality, performance,
and affordability under one name.</Text>
     </Center>
     
     <h2 className='headish'>Purchasing</h2>
     <Center>
      <Text className='text-secondary'fz={20} maw={800} style={{ marginTop: 0}}>You can expect that purchasing Linear products will be as easy as contacting us we'll be happy to assist
you. </Text>
     </Center>
    
    <SimpleGrid cols={2} spacing="xl" verticalSpacing="lg" mx={{ base: 10, sm: 80, lg: 200 }} my="lg">
     
     <Paper shadow="xs" p={0} radius="md">
     <Group h="100%" justify="center" mx="20px" grow>    
        <Image
          src="/allstar1.png"
          height={300}
          alt="Balcony"
        />
      <Stack justify='center' gap="xs" my="lg" >
      <h4 className='headish'>Allstar GSX1000</h4>
      <Text className='text-secondary' style={{ marginTop: 0, marginBottom:0 }} fz={20}>
      The Allstar Gate Star
GSX1000 Vehicular Gate
Operator or Openers will
provide convenience
and assurance to the
ultimate users for many
years.
      </Text>
      </Stack>
      </Group>
    </Paper>
    
    <Paper shadow="xs" p={0} radius="md">
     <Group h="100%" justify="center" mx="20px"  grow>    
        <Image
          src="/allstar2.png"
          height={300}
          alt="Balcony"
        />
      <Stack justify='center' gap="xs" my="lg" >
      <h4 className='headish'>Allstar GS 1000HS</h4>
      <Text className='text-secondary' style={{ marginTop: 0, marginBottom:0 }} fz={20}>
      The Allstar Gate Star
GSX1000 is designed for
operating a vehicular slide
gate at a residential home
with a maximum of four
single families, or at a
garage or parking area
associated with such a
home.
      </Text>
      </Stack>
      </Group>
    </Paper>
    
    <Paper shadow="xs" p={0} radius="md">
     <Group h="100%" justify="center" mx="20px"  grow>    
        <Image
          src="/allstar3.png"
          height={300}
          alt="Balcony"
        />
      <Stack justify='center' gap="xs" my="lg" >
      <h4 className='headish'>Allstar GS6000</h4>
      <Text className='text-secondary' style={{ marginTop: 0, marginBottom:0 }} fz={20}>
      The Allstar GS6000
Vehicular Swing Gate
Opener is designed to
start and move gates
weighing as much as 1100
pounds, the GS6000 is
capable of producing high
levels of force. 
      </Text>
      </Stack>
      </Group>
    </Paper> 

    <Paper shadow="xs" p={0} radius="md">
     <Group h="100%" justify="center" mx="20px"  grow>    
        <Image
          src="/allstar4.png"
          height={300}
          alt="Balcony"
        />
      <Stack justify='center' gap="xs" my="lg" >
      <h4 className='headish'>Allstar LPX Leader Plus 2</h4>
      <Text className='text-secondary' style={{ marginTop: 0, marginBottom:0 }} fz={20}>
      Allstar Leader Plus LPX1000
slide gate operator s
designed to start and move
gates weighing as much as
1300 pounds, or more.   
      </Text>
      </Stack>
      </Group>
    </Paper> 

    <Paper shadow="xs" p={0} radius="md">
     <Group h="100%" justify="center" mx="20px"  grow>    
        <Image
          src="/allstar5.png"
          height={300}
          alt="Balcony"
        />
      <Stack justify='center' gap="xs" my="lg" >
      <h4 className='headish'>Allstar Sliding Gate
Openers Tower Plus V
Tower</h4>
      <Text className='text-secondary' style={{ marginTop: 0, marginBottom:0 }} fz={20}>
      The RS1000 model
operator cycle usage is
rated at a maximum of 10
cycles per hour, 50 cycles
maximum per day. 
      </Text>
      </Stack>
      </Group>
    </Paper> 

    <Paper shadow="xs" p={0} radius="md">
     <Group h="100%" justify="center" mx="20px"  grow>    
        <Image
          src="/allstar6.png"
          height={300}
          alt="Balcony"
        />
      <Stack justify='center' gap="xs" my="lg" >
      <h4 className='headish'>Allstar Swing Gate Openers
Model RS (LR) 4000</h4>
      <Text className='text-secondary' style={{ marginTop: 0, marginBottom:0 }} fz={20}>
      The RS4000 is designed to
start and move gates
weighing as much as 300
pounds and 16 feet in
length.  
      </Text>
      </Stack>
      </Group>
    </Paper> 
 </SimpleGrid>

 <SimpleGrid cols={1} spacing="xl" verticalSpacing="lg" mx={{ base: 10, sm: 80, lg: 200 }} my="lg">
     
     <Paper shadow="xs" p={0} radius="md">
     <Group h="100%" justify="center" mx="20px" grow>    
        <Image
          src="/allstar7.png"
          height={300}
          alt="Balcony"
        />
      <Stack justify='center' gap="xs" my="lg" >
      <h4 className='headish'>Allstar GSX1000</h4>
      <Text className='text-secondary' style={{ marginTop: 0, marginBottom:0 }} fz={20}>
      The Allstar Gate Star
GSX1000 Vehicular Gate
Operator or Openers will
provide convenience
and assurance to the
ultimate users for many
years.
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

export default Allstar