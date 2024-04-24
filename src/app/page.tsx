'use client';

import { useForm, SubmitHandler } from 'react-hook-form'
import { Grid, TextField, Paper, Stack, Typography, Button } from '@mui/material'
import { PersonInputs } from './types';
import { createPersonService } from './services';
import { BackdropCricle } from '../../components/BackdropCircle';
import { useState } from 'react';
import { SnackbarSavePerson } from '../../components/Snackbar';

export default function RegistrationPersonPage() {
  const { register, handleSubmit, formState: { errors }} = useForm<PersonInputs>()
  const onSubmit: SubmitHandler<PersonInputs> = async (data: PersonInputs) => {
    setLoading(true)
    try {
      await createPersonService(data)
      setSuccess(true)
    }
    catch(err){
      setSuccess(false)
      throw err
    }
    finally {
      setLoading(false)
    }
  }

  const [loading, setLoading] = useState<boolean>(false)
  const [success, setSuccess] = useState<boolean>(false)

  return (
    <main >
      <SnackbarSavePerson
        open={success}
        handleClose={() => setSuccess(false)}
      />
      <BackdropCricle
        open={loading}
      />
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
            Person Registration
          </Typography>
          <Grid container columnSpacing={2} rowSpacing={4}>
            <Grid item md={6}>
              <TextField
                {...register('firstName', { required: true })}
                id="first-name"
                type="name"
                label="First Name"
                autoComplete="first name"
                error={errors.firstName !== undefined}
                helperText={errors.firstName?.message ?? "Petter"}
                fullWidth
                required
              />
            </Grid>
            <Grid item md={6}>
              <TextField
                {...register('lastName', { required: true })}
                id="last-name"
                type="last-name"
                label="Last Name"
                autoComplete="last name"
                error={errors.lastName !== undefined}
                helperText={errors.lastName?.message ?? "Parker"}
                fullWidth
                required
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
                error={errors.adress1?.street !== undefined}
                helperText={errors.adress1?.street?.message ?? "Park Avenue"}
                fullWidth
                required
              />
              <TextField
                {...register('adress1.number', { required: true, valueAsNumber: true })}
                id="numer1"
                type="number"
                label="Nº"
                autoComplete="number1"
                error={errors.adress1?.number !== undefined}
                helperText={errors.adress1?.number?.message ?? "456"}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Typography>
                Adress 2
              </Typography>
              <TextField
                {...register('adress2.street', { required: false })}
                id="street2"
                type="street2"
                label="Street"
                autoComplete="street2"
                error={errors.adress2?.street !== undefined}
                helperText={errors.adress2?.message ?? "Park Avenue"}
                fullWidth
              />
              <TextField
                {...register('adress2.number', { required: true, valueAsNumber: true })}
                id="numer2"
                type="number"
                label="Nº"
                autoComplete="number2"
                error={errors.adress2?.number !== undefined}
                helperText={errors.adress2?.number?.message ?? "456"}
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
                error={errors.city !== undefined}
                helperText={errors.city?.message ?? "New York"}
                fullWidth
                required
              />
            </Grid>
            <Grid item md={6}>
              <TextField
                {...register('state', { required: true })}
                id="state"
                type="state"
                label="State"
                autoComplete="State"
                error={errors.state !== undefined}
                helperText={errors.state?.message ?? "New York City"}
                fullWidth
                required
              />
            </Grid>
            <Grid item md={6}>
              <TextField
                {...register('country', { required: true })}
                id="country"
                type="country"
                label="Country"
                autoComplete="country"
                error={errors.country !== undefined}
                helperText={errors.country?.message ?? "United State"}
                fullWidth
                required
              />
            </Grid>
            <Grid item md={6}>
              <TextField
                {...register('email', { required: true })}
                id="email"
                type="email"
                label="Email Adress"
                autoComplete="email"
                error={errors.email !== undefined}
                helperText={errors.email?.message ?? "rock@gmail.com"}
                fullWidth
                required
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
