import {
  Box,
  Button,
  Center,
  Container,
  Modal,
  Select,
  TextInput,
  Textarea
} from '@mantine/core';
import { useForm } from '@mantine/form';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Footer from './Footer';
import Navbar from './NavBar';
import './styles/ModernBalconyRailings.css';

const ContactForm = () => {
    const [opened, setOpened] = useState(false);
    const form = useForm({
      initialValues: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        reason: '',
        customReason: '',
        inquiry: '',
      },
      validate: {
        firstName: (value) => (value.length < 2 ? 'First name must have at least 2 characters' : null),
        lastName: (value) => (value.length < 2 ? 'Last name must have at least 2 characters' : null),
        email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
        phone: (value) => (/^\d{10}$/.test(value) ? null : 'Phone number must be 10 digits'),
        reason: (value) => (value ? null : 'Please select a reason or write your own'),
        inquiry: (value) => (value.length > 0 ? null : 'Inquiry cannot be empty'),
      },
    });
  
    const handleSubmit = (values) => {
      // Simulate form submission
      console.log('Form Submitted:', values);
      setOpened(true);
    };
  
    return (
    <div className="App">
      <Navbar />
      <header className="App-header" style={{ marginTop: '20px' }}>
    
              <h1 className="headish test">Contact-Us</h1>
        <Center>
        <Container size="xl">
          <Box sx={{ width: '100%' }}>
            <form onSubmit={form.onSubmit(handleSubmit)}>
              <TextInput
                label="First Name"
                placeholder="Your first name"
                withAsterisk
                {...form.getInputProps('firstName')}
              />
              <TextInput
                label="Last Name"
                placeholder="Your last name"
                withAsterisk
                mt="md"
                {...form.getInputProps('lastName')}
              />
              <TextInput
                label="Email"
                placeholder="your.email@example.com"
                withAsterisk
                mt="md"
                {...form.getInputProps('email')}
              />
              <TextInput
                label="Phone Number"
                placeholder="1234567890"
                withAsterisk
                mt="md"
                {...form.getInputProps('phone')}
              />
              <Select
                label="Reason for Contacting"
                placeholder="Select a reason"
                data={[
                  'Product Inquiry',
                  'Order Status',
                  'Technical Support',
                  'Other',
                ]}
                mt="md"
                {...form.getInputProps('reason')}
              />
              {form.values.reason === 'Other' && (
                <TextInput
                  label="Custom Reason"
                  placeholder="Please specify"
                  mt="md"
                  {...form.getInputProps('customReason')}
                />
              )}
              <Textarea
                label="Inquiry"
                placeholder="Write your inquiry here"
                withAsterisk
                autosize
                minRows={4}
                mt="md"
                {...form.getInputProps('inquiry')}
              />
              <Center mt="md">
                <Button type="submit">Submit</Button>
              </Center>
            </form>
  
            <Modal
              opened={opened}
              onClose={() => setOpened(false)}
              title="Thank you!"
              centered
            >
              <p>Your inquiry has been submitted successfully. We will get back to you shortly.</p>
            </Modal>
          </Box>
        </Container>
      </Center>
      </header>
      <Footer/>
      </div>
    );
  };
  

export default ContactForm;
