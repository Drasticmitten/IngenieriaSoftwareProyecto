import { Center, Image, Paper, SimpleGrid, Stack, Text } from '@mantine/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Footer from './Footer';
import Navbar from './NavBar';
import './styles/ModernBalconyRailings.css';

function Osco() {
    return (
        <div className="App">
      <Navbar />
      <header className="App-header" style={{ marginTop: '100px' }}>
      <h1 className='head'> OSCO </h1>
    
      <Center>
      <Text className='text-secondary'fz={20} maw={800} >Linear Gate Openers, formally known as Nortek Osco, is devoted to delivering top-of-theline gate operators and replacement parts in stock, ready to ship worldwide. </Text>
     </Center>

     <Center>
      <Text className='text-secondary'fz={20} maw={800} >One of the nation's foremost manufacturers of commercial and residential gate and door
operating systems, OSCO provides quality automatic openers for the fencing, parking,
ornamental iron and garage door industries. </Text>
     </Center>
     
     <h2 className='head'>Our merchandise consists of</h2>
     
    <SimpleGrid cols={2} spacing="xl" verticalSpacing="lg" mx={{ base: 10, sm: 100, lg: 280 }}>
     <Paper shadow="xs" p={0} radius="md">
     <Stack justify="center" mx="20px" h={450}>    
        <Image
          src="/osco1.png"
          h={290}
          w="auto"
          fit="contain"
          alt="Balcony"
        />
      
      <Text style={{ marginTop: 0, marginBottom:0 }} fz={20} fw="bold">HSLG - Slide Operators
      </Text>
      </Stack>
    </Paper>

    <Paper shadow="xs" p={0} radius="md">
     <Stack justify="center" mx="20px" h={450}>    
        <Image
          src="/osco2.png"
          h={290}
          w="auto"
          fit="contain"
          alt="Balcony"
        />
      
      <Text style={{ marginTop: 0, marginBottom:0 }} fz={20} fw="bold">VS - GSLG SLIDE OPENERS
      </Text>
      </Stack>
    </Paper>

    <Paper shadow="xs" p={0} radius="md">
     <Stack justify="center" mx="20px" h={450}>    
        <Image
          src="/osco3.png"
          h={290}
          w="auto"
          fit="contain"
          alt="Balcony"
        />
      
      <Text style={{ marginTop: 0, marginBottom:0 }} fz={20} fw="bold">SLC Series – Slide Gate Opener
      </Text>
      </Stack>
    </Paper>

    <Paper shadow="xs" p={0} radius="md">
     <Stack justify="center" mx="20px" h={450}>    
        <Image
          src="/osco4.png"
          h={290}
          w="auto"
          fit="contain"
          alt="Balcony"
        />
      
      <Text style={{ marginTop: 0, marginBottom:0 }} fz={20} fw="bold">SW Series Swing Operators
      </Text>
      </Stack>
    </Paper>
    
    
    

 </SimpleGrid>

 <SimpleGrid cols={3} spacing="xl" verticalSpacing="lg" mx={{ base: 10, sm: 60, lg: 140 }} my="lg">
     <Paper shadow="xs" p={0} radius="md">
     <Stack justify="center" mx="20px" h={450}>    
        <Image
          src="/osco5.png"
          h={290}
          w="auto"
          fit="contain"
          alt="Balcony"
        />
      
      <Text style={{ marginTop: 0, marginBottom:0 }} fz={20} fw="bold">GSLG - A Slide Operators
      </Text>
      </Stack>
    </Paper>

    <Paper shadow="xs" p={0} radius="md">
     <Stack justify="center" mx="20px" h={450}>    
        <Image
          src="/osco6.png"
          h={290}
          w="auto"
          fit="contain"
          alt="Balcony"
        />
      
      <Text style={{ marginTop: 0, marginBottom:0 }} fz={20} fw="bold">VS - GSWG Swing Gate Openers
      </Text>
      </Stack>
    </Paper>

    <Paper shadow="xs" p={0} radius="md">
     <Stack justify="center" mx="20px" h={450}>    
        <Image
          src="/osco7.png"
          h={290}
          w="auto"
          fit="contain"
          alt="Balcony"
        />
      
      <Text style={{ marginTop: 0, marginBottom:0 }} fz={20} fw="bold">VS - GSLG Slide Openers
      </Text>
      </Stack>
    </Paper>

    <Paper shadow="xs" p={0} radius="md">
     <Stack justify="center" mx="20px" h={450}>    
        <Image
          src="/osco8.png"
          h={290}
          w="auto"
          fit="contain"
          alt="Balcony"
        />
      
      <Text style={{ marginTop: 0, marginBottom:0 }} fz={20} fw="bold">Arm Barrier Openers
      </Text>
      </Stack>
    </Paper>

    <Paper shadow="xs" p={0} radius="md">
     <Stack justify="center" mx="20px" h={450}>    
        <Image
          src="/osco9.png"
          h={290}
          w="auto"
          fit="contain"
          alt="Balcony"
        />
      
      <Text style={{ marginTop: 0, marginBottom:0 }} fz={20} fw="bold">Arm Barrier
      </Text>
      </Stack>
    </Paper>

    <Paper shadow="xs" p={0} radius="md">
     <Stack justify="center" mx="20px" h={450}>    
        <Image
          src="/osco10.png"
          h={290}
          w="auto"
          fit="contain"
          alt="Balcony"
        />
      
      <Text style={{ marginTop: 0, marginBottom:0 }} fz={20} fw="bold">Barrier Operator
      </Text>
      </Stack>
    </Paper>
    
    
    

 </SimpleGrid>

      </header>
      <Footer />
    </div>

    );
}

export default Osco