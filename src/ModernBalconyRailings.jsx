import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Footer from './Footer';
import Navbar from './NavBar';
import ReadMoreButton from './ReadMoreButton';
import { BackgroundImage, Center, Title, Box, Text, Grid, GridCol, Card, Image, Group, SimpleGrid} from '@mantine/core';
import './styles/ModernBalconyRailings.css';

function ModernBalconyRailings() {
    return (
        <div className="App">
      <Navbar />
      <header className="App-header" style={{ marginTop: '100px' }}>
      <h1 className='head'> Modern Balcony Railings </h1>
    
      <Center>
      <Text className='text-secondary'fz={20} maw={800} >A Modern Wrought Iron or Aluminum Railings are an elegant solution for interior or exterior
handrails, handicap rails, walkways, balconies, patios, decks and any other indoor or
outdoor location that needs a handrail. We can even design and fabricate elegant custom
railings replacements for your existing handrail.</Text>
     </Center>
     
     <h2 className='head'>Modern Balcony, Porch, or Deck Railings</h2>
     
     <Center>
     <Text className='text-secondary'fz={20} maw={980} >L.A. Ornamental offers a stunning selection of wrought iron and aluminum railings, perfect for both interior
and exterior applications. Our railings add a touch of elegance and security to any space</Text>
    </Center>
    <br />
    <br />
    <Group justify="center" mx="lg" gap="xl">
    
     <Card shadow="xs" padding="xs" radius="md">
    <Card.Section>        
        <Image
          src="/balcony1.png"
          height={160}
          alt="Balcony"
        />
     </Card.Section>
 
      <Text className='text-secondary'fz={20}>
        Modern Set
      </Text>
      
    </Card>

    <Card shadow="xs" padding="xs" radius="md">
    <Card.Section>        
        <Image
          src="/balcony2.png"
          height={160}
          alt="Balcony"
        />
     </Card.Section>
 
      <Text className='text-secondary'fz={20}>
        Modern Edition
      </Text>
      
    </Card>
     </Group>

     <h2 className='head'>Metal, Aluminum, or Wrought Iron Railings</h2>
     
     <Center>
     <Text className='text-secondary'fz={20} maw={980} >Metal, Aluminum, Wrought Iron Railings are perfect for all indoor or outdoor applications, can be
used by itself, on wall side or as a stair railing, or as a secondary handrail attached to railing sections. These can be bent and shaped to fit your desired plans.</Text>
    </Center>
    <br />
    <br />

    <SimpleGrid cols={2} spacing="xl" verticalSpacing="lg" mx={{ base: 10, sm: 100, lg: 300 }}>
    
     <Card shadow="xs" padding="xs" radius="md">
    <Card.Section>        
        <Image
          src="/balcony3.png"
          height={160}
          alt="Balcony"
        />
     </Card.Section>
 
      <Text className='text-secondary'fz={20}>
        Plain Top Rail
      </Text>
      
    </Card>

    <Card shadow="xs" padding="xs" radius="md">
    <Card.Section>        
        <Image
          src="/balcony4.png"
          height={160}
          alt="Balcony"
        />
     </Card.Section>
 
      <Text className='text-secondary'fz={20}>
        Circle In Square
      </Text>
      
    </Card>
    
     <Card shadow="xs" padding="xs" radius="md">
    <Card.Section>        
        <Image
          src="/balcony5.png"
          height={160}
          width={200}
          alt="Balcony"
        />
     </Card.Section>
 
      <Text className='text-secondary'fz={20}>
        Modern Belly Design
      </Text>
      
    </Card>

    <Card shadow="xs" padding="xs" radius="md">
    <Card.Section>        
        <Image
          src="/balcony6.png"
          height={160}
          alt="Balcony"
        />
     </Card.Section>
 
      <Text className='text-secondary'fz={20}>
        Belly Special
      </Text>
      
    </Card>
 </SimpleGrid>

 <h2 className='head'>Indoor / Interior or Outdoor / Exterior Railings</h2>
     
     <Center>
     <Text className='text-secondary'fz={20} maw={980} >Indoor or outdoor railings don t just offer safety, but also give the impression of movement. Enhancing the
charm and appeal of an interior or exterior railing can result in a more dramatic or elegant appearance.</Text>
    </Center>
    <br />
    <br />

    <SimpleGrid cols={2} spacing="xl" verticalSpacing="lg" mx={{ base: 10, sm: 100, lg: 300 }}>
    
     <Card shadow="xs" padding="xs" radius="md">
    <Card.Section>        
        <Image
          src="/balcony7.png"
          height={160}
          alt="Balcony"
        />
     </Card.Section>
 
      <Text className='text-secondary'fz={20}>
        Island Comfort
      </Text>
      
    </Card>

    <Card shadow="xs" padding="xs" radius="md">
    <Card.Section>        
        <Image
          src="/balcony8.png"
          height={160}
          alt="Balcony"
        />
     </Card.Section>
 
      <Text className='text-secondary'fz={20}>
        Standard Picket
      </Text>
      
    </Card>
    
 </SimpleGrid>
      </header>
      <Footer />
    </div>

    );
}

export default ModernBalconyRailings