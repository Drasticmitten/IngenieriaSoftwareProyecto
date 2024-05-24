import { Center, Image, Paper, SimpleGrid, Stack, Text } from '@mantine/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Footer from './Footer';
import Navbar from './NavBar';
import './styles/ModernBalconyRailings.css';

function Remote() {
    return (
        <div className="App">
      <Navbar />
      <header className="App-header" style={{ marginTop: '100px' }}>
      <h1 className='head'> Remote Control  <br/> Multi - Code </h1>
      
      <Center>
      <Text className='text-secondary'fz={20} maw={800} style={{ marginTop: 5, marginBottom:0 }}>MULTI-CODE Controls are specifically designed to remotely control a garage door or
gate and to give years of dependable service without adjustment</Text>
     </Center>
     
     <h2 className='head'>The available models are</h2>

     <SimpleGrid cols={1} spacing="xl" verticalSpacing="lg" mx={{ base: 10, sm: 150, lg: 480 }} my="lg" >

     <Paper shadow="xs" p={0} radius="md">
     <Stack justify="center" mx="20px" h={450}>    
        <Image
          src="/multi1.png"
          h={290}
          w="auto"
          fit="contain"
          alt="Balcony"
        />
      
      <Text style={{ marginTop: 0, marginBottom:0 }} fz={20} fw="bold">Multi-Code - Stanley 1050
      </Text>
      </Stack>
    </Paper>
      </SimpleGrid>

    <SimpleGrid cols={2} spacing="xl" verticalSpacing="lg" mx={{ base: 10, sm: 100, lg: 280 }}>
     <Paper shadow="xs" p={0} radius="md">
     <Stack justify="center" mx="20px" h={450}>    
        <Image
          src="/multi2.png"
          h={290}
          w="auto"
          fit="contain"
          alt="Balcony"
        />
      
      <Text style={{ marginTop: 0, marginBottom:0 }} fz={20} fw="bold">Multi-Code model 3060 mini remote M
      </Text>
      </Stack>
    </Paper>

    <Paper shadow="xs" p={0} radius="md">
     <Stack justify="center" mx="20px" h={450}>    
        <Image
          src="/multi3.png"
          h={290}
          w="auto"
          fit="contain"
          alt="Balcony"
        />
      
      <Text style={{ marginTop: 0, marginBottom:0 }} fz={20} fw="bold">Multi-Code 3083 transmitters long
life
      </Text>
      </Stack>
    </Paper>

    <Paper shadow="xs" p={0} radius="md">
     <Stack justify="center" mx="20px" h={450}>    
        <Image
          src="/multi4.png"
          h={290}
          w="auto"
          fit="contain"
          alt="Balcony"
        />
      
      <Text style={{ marginTop: 0, marginBottom:0 }} fz={20} fw="bold">Multi Code Remote Controls
1094-10
      </Text>
      </Stack>
    </Paper>

    <Paper shadow="xs" p={0} radius="md">
     <Stack justify="center" mx="20px" h={450}>    
        <Image
          src="/multi5.png"
          h={290}
          w="auto"
          fit="contain"
          alt="Balcony"
        />
      
      <Text style={{ marginTop: 0, marginBottom:0 }} fz={20} fw="bold">MultiCode Openers Remote
Controls 109710

      </Text>
      </Stack>
    </Paper>

    <Paper shadow="xs" p={0} radius="md">
     <Stack justify="center" mx="20px" h={450}>    
        <Image
          src="/multi6.png"
          h={290}
          w="auto"
          fit="contain"
          alt="Balcony"
        />
      
      <Text style={{ marginTop: 0, marginBottom:0 }} fz={20} fw="bold">	
MultiCode 307010
      </Text>
      </Stack>
    </Paper>

    <Paper shadow="xs" p={0} radius="md">
     <Stack justify="center" mx="20px" h={450}>    
        <Image
          src="/multi7.png"
          h={290}
          w="auto"
          fit="contain"
          alt="Balcony"
        />
      
      <Text style={{ marginTop: 0, marginBottom:0 }} fz={20} fw="bold">	
      MulitCode 108210
      </Text>
      </Stack>
    </Paper>
    
    
    
 </SimpleGrid>

 <SimpleGrid cols={3} spacing="xl" verticalSpacing="lg" mx={{ base: 10, sm: 60, lg: 140 }} my="lg">
     <Paper shadow="xs" p={0} radius="md">
     <Stack justify="center" mx="20px" h={450}>    
        <Image
          src="/multi8.png"
          h={290}
          w="auto"
          fit="contain"
          alt="Balcony"
        />
      
      <Text style={{ marginTop: 0, marginBottom:0 }} fz={20} fw="bold">Multi-Code 308911 or 3089-11
      </Text>
      </Stack>
    </Paper>

    <Paper shadow="xs" p={0} radius="md">
     <Stack justify="center" mx="20px" h={450}>    
        <Image
          src="/multi9.png"
          h={290}
          w="auto"
          fit="contain"
          alt="Balcony"
        />
      
      <Text style={{ marginTop: 0, marginBottom:0 }} fz={20} fw="bold">Mutli-Code 412001 or 412001
      </Text>
      </Stack>
    </Paper>

    <Paper shadow="xs" p={0} radius="md">
     <Stack justify="center" mx="20px" h={450}>    
        <Image
          src="/multi10.png"
          h={290}
          w="auto"
          fit="contain"
          alt="Balcony"
        />
      
      <Text style={{ marginTop: 0, marginBottom:0 }} fz={20} fw="bold">Multi-Code 414001 or 4140-01
      </Text>
      </Stack>
    </Paper>

 </SimpleGrid>

      </header>
      <Footer />
    </div>

    );
}

export default Remote