'use client';

import { useForm, SubmitHandler } from 'react-hook-form'
import { Grid, TextField, Paper, Stack, Typography, Button } from '@mui/material'
import { PersonInputs } from './types';
import { createPersonService } from './services';

export default function RegistrationPersonPage() {
  const { register, handleSubmit, formState: { errors }} = useForm<PersonInputs>()
  const onSubmit: SubmitHandler<PersonInputs> = (data: PersonInputs) => createPersonService(data)

  return (
    <main >
      <Paper sx={{ 
          display:'flex', 
          justifyContent:'center', 
          my:{
            sx: 2,
            md: 6
          },
          mx:{
            sx: 10,
            md: 20
          },
          p:{
            sx: 3,
            md: 6
          },
          borderRadius: 5,

        }}>
        <Stack component={'form'} onSubmit={handleSubmit(onSubmit)} spacing={4} sx={{ alignItems: 'center' }}>
          <Typography>
            Legal Entity Registration
          </Typography>
          <Grid container columnSpacing={2} rowSpacing={4}>
            <Grid item md={6}>
              <TextField
                {...register('firstName', { required: true })}
                id="first-name"
                type="name"
                label="First Name"
                autoComplete="first name"
                helperText="Petter"
                fullWidth
              />
            </Grid>
            <Grid item md={6}>
              <TextField
                {...register('lastName', { required: true })}
                id="last-name"
                type="last-name"
                label="Last Name"
                autoComplete="last name"
                helperText="Parker"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Typography>
                Adress 1
              </Typography>
              <TextField
                {...register('adress1.street', { required: true })}
                id="street1"
                type="street1"
                label="Street"
                autoComplete="street1"
                helperText="Park Avenue"
                fullWidth
              />
              <TextField
                {...register('adress1.number', { required: true, valueAsNumber: true })}
                id="numer1"
                type="number"
                label="Nº"
                autoComplete="number1"
                helperText="456"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Typography>
                Adress 2
              </Typography>
              <TextField
                {...register('adress2.street', { required: true })}
                id="street2"
                type="street2"
                label="Street"
                autoComplete="street2"
                helperText="Park Avenue"
                fullWidth
              />
              <TextField
                {...register('adress2.number', { required: true, valueAsNumber: true })}
                id="numer2"
                type="number"
                label="Nº"
                autoComplete="number2"
                helperText="456"
                fullWidth
              />
            </Grid>
            <Grid item md={6}>
              <TextField
                {...register('city', { required: true })}
                id="city"
                type="city"
                label="City"
                autoComplete="City"
                helperText="New York"
                fullWidth
              />
            </Grid>
            <Grid item md={6}>
              <TextField
                {...register('state', { required: true })}
                id="state"
                type="state"
                label="State"
                autoComplete="State"
                helperText="New York City"
                fullWidth
              />
            </Grid>
            <Grid item md={6}>
              <TextField
                {...register('country', { required: true })}
                id="country"
                type="country"
                label="Country"
                autoComplete="country"
                helperText="United State"
                fullWidth
              />
            </Grid>
            <Grid item md={6}>
              <TextField
                {...register('email', { required: true })}
                id="email"
                type="email"
                label="Email Adress"
                autoComplete="email"
                helperText="rock@gmail.com"
                fullWidth
              />
            </Grid>
          </Grid>
          <Button type='submit' variant='outlined'>
            Salvar
          </Button>
        </Stack>
      </Paper>      
    </main>
  );
}
