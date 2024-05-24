import { Center, Image, Paper, SimpleGrid, Stack, Text } from '@mantine/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Footer from './Footer';
import Navbar from './NavBar';
import './styles/ModernBalconyRailings.css';

function Loop() {
    return (
      <div className="App">
      <Navbar />
      <header className="App-header" style={{ marginTop: '100px' }}>
      <h1 className='head'> Doorking Loop Detectors </h1>
    
      <Center>
      <Text className='text-secondary'fz={20} maw={800} style={{ marginTop: 5, marginBottom:0 }}>These devices are used in vehicle access control and security systems in automatic doors,
especially in industrial and commercial applications</Text>
     </Center>
     <br /><br />

     <SimpleGrid cols={2} spacing="xl" verticalSpacing="lg" mx={{ base: 10, sm: 100, lg: 200 }}>
     <Paper shadow="xs" p={0} radius="md">
     <Stack justify="center" mx="20px" h={450}>
     <h4 className='head'>Elite Loop Detector </h4>   
        <Image
          src="/loop1.png"
          h={200}
          w="auto"
          fit="contain"
          alt="Balcony"
        />
      
      <Text style={{ marginTop: 0, marginBottom:0 }} fz={20} fw="bold">Elite A-ELD Plug-In Loop
Detector
      </Text>
      </Stack>
    </Paper>

    <Paper shadow="xs" p={0} radius="md">
     <Stack justify="center" mx="20px" h={450}>    
     <h4 className='head'>Doorking Loop Detectors </h4>   
        <Image
          src="/loop2.png"
          h={200}
          w="auto"
          fit="contain"
          alt="Balcony"
        />
      
      <Text style={{ marginTop: 0, marginBottom:0 }} fz={20} fw="bold">DKS Single & Two-Channel
Loop Detectors
      </Text>
      </Stack>
    </Paper>

 </SimpleGrid>
    
 <h2 className='head'>Ramset Loop Detector </h2>
 <SimpleGrid cols={1} spacing="xl" verticalSpacing="lg" mx={{ base: 10, sm: 80, lg: 200 }} my="lg">
 <Paper shadow="xs" p={0} radius="md">
     <Stack justify="center" mx="20px" h={450}>    
        <Image
          src="/loop3.png"
          h={250}
          w="auto"
          fit="contain"
          alt="Balcony"
        />
      
      <Text style={{ marginTop: 0, marginBottom:0 }} fz={20} fw="bold">Ramset ILD-24 intelligate
plug-in loop
      </Text>
      </Stack>
    </Paper>
</SimpleGrid>

<h2 className='head'>Ramset Loop Detector </h2>
 <SimpleGrid cols={2} spacing="xl" verticalSpacing="lg" mx={{ base: 10, sm: 100, lg: 280 }}>
     <Paper shadow="xs" p={0} radius="md">
     <Stack justify="center" mx="20px" h={450}>    
        <Image
          src="/loop4.png"
          h={250}
          w="auto"
          fit="contain"
          alt="Balcony"
        />
      
      <Text style={{ marginTop: 0, marginBottom:0 }} fz={20} fw="bold">Reno Model AX Single
Channel
      </Text>
      </Stack>
    </Paper>

    <Paper shadow="xs" p={0} radius="md">
     <Stack justify="center" mx="20px" h={450}>    
        <Image
          src="/loop5.png"
          h={250}
          w="auto"
          fit="contain"
          alt="Balcony"
        />
      
      <Text style={{ marginTop: 0, marginBottom:0 }} fz={20} fw="bold">Reno A&E Model AX2 &
AX2-DL
      </Text>
      </Stack>
    </Paper>

    <Paper shadow="xs" p={0} radius="md">
     <Stack justify="center" mx="20px" h={450}>    
        <Image
          src="/loop6.png"
          h={250}
          w="auto"
          fit="contain"
          alt="Balcony"
        />
      
      <Text style={{ marginTop: 0, marginBottom:0 }} fz={20} fw="bold">Reno B Single Channel
Inductive Loop
      </Text>
      </Stack>
    </Paper>

    <Paper shadow="xs" p={0} radius="md">
     <Stack justify="center" mx="20px" h={450}>    
        <Image
          src="/loop7.png"
          h={250}
          w="auto"
          fit="contain"
          alt="Balcony"
        />
      
      <Text style={{ marginTop: 0, marginBottom:0 }} fz={20} fw="bold">Reno BX-LP Low Power
      </Text>
      </Stack>
    </Paper>

 </SimpleGrid>
 <SimpleGrid cols={3} spacing="xl" verticalSpacing="lg" mx={{ base: 10, sm: 60, lg: 140 }} my="lg">
     <Paper shadow="xs" p={0} radius="md">
     <Stack justify="center" mx="20px" h={450}>    
        <Image
          src="/loop8.png"
          h={250}
          w="auto"
          fit="contain"
          alt="Balcony"
        />
      
      <Text style={{ marginTop: 0, marginBottom:0 }} fz={20} fw="bold">Diablo DSP-7
      </Text>
      </Stack>
    </Paper>

    <Paper shadow="xs" p={0} radius="md">
     <Stack justify="center" mx="20px" h={450}>    
        <Image
          src="/loop9.png"
          h={250}
          w="auto"
          fit="contain"
          alt="Balcony"
        />
      
      <Text style={{ marginTop: 0, marginBottom:0 }} fz={20} fw="bold">Diablo DSP 10
      </Text>
      </Stack>
    </Paper>

    <Paper shadow="xs" p={0} radius="md">
     <Stack justify="center" mx="20px" h={450}>    
        <Image
          src="/loop10.png"
          h={250}
          w="auto"
          fit="contain"
          alt="Balcony"
        />
      
      <Text style={{ marginTop: 0, marginBottom:0 }} fz={20} fw="bold">Diablo DSP-15
      </Text>
      </Stack>
    </Paper>

    <Paper shadow="xs" p={0} radius="md">
     <Stack justify="center" mx="20px" h={450}>    
        <Image
          src="/loop11.png"
          h={250}
          w="auto"
          fit="contain"
          alt="Balcony"
        />
      
      <Text style={{ marginTop: 0, marginBottom:0 }} fz={20} fw="bold">Diablo DSP-50
      </Text>
      </Stack>
    </Paper>

    <Paper shadow="xs" p={0} radius="md">
     <Stack justify="center" mx="20px" h={450}>    
        <Image
          src="/loop12.png"
          h={250}
          w="auto"
          fit="contain"
          alt="Balcony"
        />
      
      <Text style={{ marginTop: 0, marginBottom:0 }} fz={20} fw="bold">Diablo Controls DSP-22-1 
      </Text>
      </Stack>
    </Paper>

    <Paper shadow="xs" p={0} radius="md">
     <Stack justify="center" mx="20px" h={450}>    
        <Image
          src="/loop13.png"
          h={250}
          w="auto"
          fit="contain"
          alt="Balcony"
        />
      
      <Text style={{ marginTop: 0, marginBottom:0 }} fz={20} fw="bold">Diablo DSP-22-2 
      </Text>
      </Stack>
    </Paper>

    <Paper shadow="xs" p={0} radius="md">
     <Stack justify="center" mx="20px" h={450}>    
        <Image
          src="/loop14.png"
          h={250}
          w="auto"
          fit="contain"
          alt="Balcony"
        />
      
      <Text style={{ marginTop: 0, marginBottom:0 }} fz={20} fw="bold">Diablo DSP-40S
      </Text>
      </Stack>
    </Paper>

    <Paper shadow="xs" p={0} radius="md">
     <Stack justify="center" mx="20px" h={450}>    
        <Image
          src="/loop15.png"
          h={250}
          w="auto"
          fit="contain"
          alt="Balcony"
        />
      
      <Text style={{ marginTop: 0, marginBottom:0 }} fz={20} fw="bold">Diablo DSP-6LP
      </Text>
      </Stack>
    </Paper>

    <Paper shadow="xs" p={0} radius="md">
     <Stack justify="center" mx="20px" h={450}>    
        <Image
          src="/loop16.png"
          h={250}
          w="auto"
          fit="contain"
          alt="Balcony"
        />
      
      <Text style={{ marginTop: 0, marginBottom:0 }} fz={20} fw="bold">Diablo DML-9LP Kit 
      </Text>
      </Stack>
    </Paper>
    

 </SimpleGrid>

 <h2 className='head'>EDI Vehicle Detector -- Eberle Design Inc. </h2>
 <SimpleGrid cols={3} spacing="xl" verticalSpacing="lg" mx={{ base: 10, sm: 60, lg: 140 }} my="lg">
     <Paper shadow="xs" p={0} radius="md">
     <Stack justify="center" mx="20px" h={450}>    
        <Image
          src="/loop17.png"
          h={250}
          w="auto"
          fit="contain"
          alt="Balcony"
        />
      
      <Text style={{ marginTop: 0, marginBottom:0 }} fz={20} fw="bold">EDI LMA-100
      </Text>
      </Stack>
    </Paper>

    <Paper shadow="xs" p={0} radius="md">
     <Stack justify="center" mx="20px" h={450}>    
        <Image
          src="/loop18.png"
          h={250}
          w="auto"
          fit="contain"
          alt="Balcony"
        />
      
      <Text style={{ marginTop: 0, marginBottom:0 }} fz={20} fw="bold">EDI LMA-200
      </Text>
      </Stack>
    </Paper>

    <Paper shadow="xs" p={0} radius="md">
     <Stack justify="center" mx="20px" h={450}>    
        <Image
          src="/loop19.png"
          h={250}
          w="auto"
          fit="contain"
          alt="Balcony"
        />
      
      <Text style={{ marginTop: 0, marginBottom:0 }} fz={20} fw="bold">EDI LMA-1150
      </Text>
      </Stack>
    </Paper>

    <Paper shadow="xs" p={0} radius="md">
     <Stack justify="center" mx="20px" h={450}>    
        <Image
          src="/loop20.png"
          h={250}
          w="auto"
          fit="contain"
          alt="Balcony"
        />
      
      <Text style={{ marginTop: 0, marginBottom:0 }} fz={20} fw="bold">EDI LMA-1250
      </Text>
      </Stack>
    </Paper>

    <Paper shadow="xs" p={0} radius="md">
     <Stack justify="center" mx="20px" h={450}>    
        <Image
          src="/loop21.png"
          h={250}
          w="auto"
          fit="contain"
          alt="Balcony"
        />
      
      <Text style={{ marginTop: 0, marginBottom:0 }} fz={20} fw="bold">EDI LMA-1250 LP  
      </Text>
      </Stack>
    </Paper>

    <Paper shadow="xs" p={0} radius="md">
     <Stack justify="center" mx="20px" h={450}>    
        <Image
          src="/loop22.png"
          h={250}
          w="auto"
          fit="contain"
          alt="Balcony"
        />
      
      <Text style={{ marginTop: 0, marginBottom:0 }} fz={20} fw="bold">EDI LMA-1400  
      </Text>
      </Stack>
    </Paper>

    <Paper shadow="xs" p={0} radius="md">
     <Stack justify="center" mx="20px" h={450}>    
        <Image
          src="/loop23.png"
          h={250}
          w="auto"
          fit="contain"
          alt="Balcony"
        />
      
      <Text style={{ marginTop: 0, marginBottom:0 }} fz={20} fw="bold">EDI LMA-1500
      </Text>
      </Stack>
    </Paper>

    <Paper shadow="xs" p={0} radius="md">
     <Stack justify="center" mx="20px" h={450}>    
        <Image
          src="/loop24.png"
          h={250}
          w="auto"
          fit="contain"
          alt="Balcony"
        />
      
      <Text style={{ marginTop: 0, marginBottom:0 }} fz={20} fw="bold">EDI LMA-1800
      </Text>
      </Stack>
    </Paper>

    <Paper shadow="xs" p={0} radius="md">
     <Stack justify="center" mx="20px" h={450}>    
        <Image
          src="/loop25.png"
          h={250}
          w="auto"
          fit="contain"
          alt="Balcony"
        />
      
      <Text style={{ marginTop: 0, marginBottom:0 }} fz={20} fw="bold">EDI LMA-1800 LP 
      </Text>
      </Stack>
    </Paper>
    

 </SimpleGrid>
 
 <h2 className='head'>EDI Vehicle Detector -- Eberle Design Inc. </h2>
 <SimpleGrid cols={3} spacing="xl" verticalSpacing="lg" mx={{ base: 10, sm: 60, lg: 140 }} my="lg">
     <Paper shadow="xs" p={0} radius="md">
     <Stack justify="center" mx="20px" h={450}>    
        <Image
          src="/loop26.png"
          h={250}
          w="auto"
          fit="contain"
          alt="Balcony"
        />
      
      <Text style={{ marginTop: 0, marginBottom:0 }} fz={20} fw="bold">EMX ULTRA II Motherboard
      </Text>
      </Stack>
    </Paper>

    <Paper shadow="xs" p={0} radius="md">
     <Stack justify="center" mx="20px" h={450}>    
        <Image
          src="/loop27.png"
          h={250}
          w="auto"
          fit="contain"
          alt="Balcony"
        />
      
      <Text style={{ marginTop: 0, marginBottom:0 }} fz={20} fw="bold">EMX Loop Detector, D-Tek
Box
      </Text>
      </Stack>
    </Paper>

    <Paper shadow="xs" p={0} radius="md">
     <Stack justify="center" mx="20px" h={450}>    
        <Image
          src="/loop28.png"
          h={250}
          w="auto"
          fit="contain"
          alt="Balcony"
        />
      
      <Text style={{ marginTop: 0, marginBottom:0 }} fz={20} fw="bold">EMX HAR-11 Loop Detector
Harness
      </Text>
      </Stack>
    </Paper>

    <Paper shadow="xs" p={0} radius="md">
     <Stack justify="center" mx="20px" h={450}>    
        <Image
          src="/loop29.png"
          h={250}
          w="auto"
          fit="contain"
          alt="Balcony"
        />
      
      <Text style={{ marginTop: 0, marginBottom:0 }} fz={20} fw="bold">EMX Loop Detectors DTEK-LM Board Type Vehicle
Loop Detector
      </Text>
      </Stack>
    </Paper>

    <Paper shadow="xs" p={0} radius="md">
     <Stack justify="center" mx="20px" h={450}>    
        <Image
          src="/loop30.png"
          h={250}
          w="auto"
          fit="contain"
          alt="Balcony"
        />
      
      <Text style={{ marginTop: 0, marginBottom:0 }} fz={20} fw="bold">EMX VMD AC/DC Outdoor
Buried Vehicle
Motion
Detector with Sensing
Probe
      </Text>
      </Stack>
    </Paper>

    <Paper shadow="xs" p={0} radius="md">
     <Stack justify="center" mx="20px" h={450}>    
        <Image
          src="/loop31.png"
          h={250}
          w="auto"
          fit="contain"
          alt="Balcony"
        />
      
      <Text style={{ marginTop: 0, marginBottom:0 }} fz={20} fw="bold">EMX Loop Detector D-TEK
ULTRA
Plug-in Style,
Vehicle Loop Detector
      </Text>
      </Stack>
    </Paper>

    <Paper shadow="xs" p={0} radius="md">
     <Stack justify="center" mx="20px" h={450}>    
        <Image
          src="/loop32.png"
          h={250}
          w="auto"
          fit="contain"
          alt="Balcony"
        />
      
      <Text style={{ marginTop: 0, marginBottom:0 }} fz={20} fw="bold">EMX Loop Detectors, D-TEK
MVP Multi
Voltage Power,
Universal Loop Detector
      </Text>
      </Stack>
    </Paper>

    <Paper shadow="xs" p={0} radius="md">
     <Stack justify="center" mx="20px" h={450}>    
        <Image
          src="/loop33.png"
          h={250}
          w="auto"
          fit="contain"
          alt="Balcony"
        />
      
      <Text style={{ marginTop: 0, marginBottom:0 }} fz={20} fw="bold">EMX Loop Detector, LP DTEK
Low Power Loop
Detector
      </Text>
      </Stack>
    </Paper>

    <Paper shadow="xs" p={0} radius="md">
     <Stack justify="center" mx="20px" h={450}>    
        <Image
          src="/loop34.png"
          h={250}
          w="auto"
          fit="contain"
          alt="Balcony"
        />
      
      <Text style={{ marginTop: 0, marginBottom:0 }} fz={20} fw="bold">EMX Loop Detector

Accessories LD-11, LD-11B 
      </Text>
      </Stack>
    </Paper>
    

 </SimpleGrid>
      </header>
      <Footer />
    </div>

    );
}

export default Loop