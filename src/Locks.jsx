import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Footer from './Footer';
import Navbar from './NavBar';
import ReadMoreButton from './ReadMoreButton';
import { BackgroundImage, Center, Title, Box, Text, Grid, GridCol, Card, Image, Group, SimpleGrid, Stack, Paper} from '@mantine/core';
import './styles/ModernBalconyRailings.css';

function Locks() {
    return (
        <div className="App">
      <Navbar />
      <header className="App-header" style={{ marginTop: '100px' }}>
      <h1 className='head'> Locks - Latches </h1>
    
      <Center>
      <Text className='text-secondary'fz={20} maw={800} style={{ marginTop: 5, marginBottom:0 }}>We offer a wide selection of gate hardware and supplies for all your driveway gates, garden
gates, fences, or pool railings. L.A. Ornamental & Rack Corp offers gate hardware and
supplies like guide roller, latches, hinges, gate timers, magnetic latches,v-groove wheels,
and more.</Text>
     </Center>
     
     <h2 className='head'>Browse through our selection of hardware or supplies for all
your fence needs</h2>
     
    <SimpleGrid cols={2} spacing="xl" verticalSpacing="lg" mx={{ base: 10, sm: 100, lg: 280 }}>
     
     <Paper shadow="xs" p={0} radius="md">
     <Group h="100%" justify="center" mx="20px" grow>    
        <Image
          src="/locks1.png"
          height={200}
          alt="Balcony"
        />
      <Stack justify='center' gap="xs" my="lg" >
      <h4 className='headish'>Zinc Plated Gravety Gate
Latch
</h4>
      <Text className='text-secondary' style={{ marginTop: 0, marginBottom:0 }} fz={20}>
      For use on gates and doors
where a self-latching
action is desired.
      </Text>
      </Stack>
      </Group>
    </Paper>
    
    <Paper shadow="xs" p={0} radius="md">
     <Group h="100%" justify="center" mx="20px"  grow>    
        <Image
          src="/locks2.png"
          height={200}
          alt="Balcony"
        />
      <Stack justify='center' gap="xs" my="lg" >
      <h4 className='headish'>White or Black Gravety Gate
Latch Regular Steel Powder
Coated</h4>
      <Text className='text-secondary' style={{ marginTop: 0, marginBottom:0 }} fz={20}>
      For use on gates and doors
where a self-latching action
is desired. 
      </Text>
      </Stack>
      </Group>
    </Paper>
    
    <Paper shadow="xs" p={0} radius="md">
     <Group h="100%" justify="center" mx="20px"  grow>    
        <Image
          src="/locks3.png"
          height={200}
          alt="Balcony"
        />
      <Stack justify='center' gap="xs" my="lg" >
      <h4 className='headish'>Stainless Steel Gravety
Pool Gate Latch, Auto Gate
Latch</h4>
      <Text className='text-secondary' style={{ marginTop: 0, marginBottom:0 }} fz={20}>
      For use on gates and doors
where a self-latching
action is desired.   
      </Text>
      </Stack>
      </Group>
    </Paper> 

    <Paper shadow="xs" p={0} radius="md">
     <Group h="100%" justify="center" mx="20px"  grow>    
        <Image
          src="/locks4.png"
          height={200}
          alt="Balcony"
        />
      <Stack justify='center' gap="xs" my="lg" >
      <h4 className='headish'>Steel Slide Bolt Latch with
Screws</h4>
      <Text className='text-secondary' style={{ marginTop: 0, marginBottom:0 }} fz={20}>
      Easy operating, handle
serves as a pull. Latches
right or left. May be
padlocked.  
      </Text>
      </Stack>
      </Group>
    </Paper> 

    <Paper shadow="xs" p={0} radius="md">
     <Group h="100%" justify="center" mx="20px"  grow>    
        <Image
          src="/locks5.png"
          height={200}
          alt="Balcony"
        />
      <Stack justify='center' gap="xs" my="lg" >
      <h4 className='headish'>Pool Code Gate Magnetic
Latch Safety Long Pull</h4>
      <Text className='text-secondary' style={{ marginTop: 0, marginBottom:0 }} fz={20}>
      Magnetic Latch for safety
gate latches are a
revolutionary breakthrough
in latching security for
most gates around
swimming pools, homes
and other child safety
areas (childcare centers).
      </Text>
      </Stack>
      </Group>
    </Paper> 

    <Paper shadow="xs" p={0} radius="md">
     <Group h="100%" justify="center" mx="20px"  grow>    
        <Image
          src="/locks6.png"
          height={200}
          alt="Balcony"
        />
      <Stack justify='center' gap="xs" my="lg" >
      <h4 className='headish'>Pool Code Gate Magnetic
Safety Latch -- Short</h4>
      <Text className='text-secondary' style={{ marginTop: 0, marginBottom:0 }} fz={20}>
      All latches adapt readily to
most new or existing gates
of any material metal, wood
or vinyl. 
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

export default Locks