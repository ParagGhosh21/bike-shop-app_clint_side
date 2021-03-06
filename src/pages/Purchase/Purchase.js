import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';

import { Button, Container, Grid, TextField, Typography } from '@mui/material';

const Purchase = () => {
    const [purchase, setPurchase] = useState([]);
    const { user } = useAuth();
    const { id } = useParams();

    useEffect(() => {
        const url = `https://sheltered-earth-85610.herokuapp.com/purchase/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setPurchase(data))
    }, [])
    const [purchaseData, setPurchaseData] = useState([]);
    const handleOnchange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newPurchaseData = { ...purchaseData };
        newPurchaseData[field] = value;
        setPurchaseData(newPurchaseData);
        console.log(value, field)
    }

    const handleLogin = e => {
        const purchase = {
            ...purchaseData


        }

        fetch('https://sheltered-earth-85610.herokuapp.com/purchase', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(purchase)
        })
            .then(res => res.json)
            .then(data => {





            })

        e.preventDefault();
    }


    return (




        <Box sx={{ my: 5, mx: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={7}>
                    <Box sx={{ textAlign: 'center' }}>
                        <img src={purchase.img} className=" info-img" alt="..." />
                    </Box>
                    <Box sx={{ width: '80%', m: 'auto' }}>
                        <Typography sx={{ my: 2 }} variant="h6" gutterBottom component="div">
                            {purchase.name}
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom component="div">
                            <b> Engine :</b>  {purchase.engine}
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom component="div">
                            <b> Bike Weight :</b>    {purchase.weight}
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom component="div">
                            <b> Average Milage :</b>    {purchase.milage}
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom component="div">
                            <b> Maximum Power :</b>    {purchase.maximumPower}
                        </Typography>
                    </Box>

                </Grid>
                <Grid item xs={12} md={5}>
                    <Box sx={{ margin: '10px' }}  >
                        <Typography sx={{ textAlign: 'center' }} variant="h6" gutterBottom component="div">
                            Book your Bike
                        </Typography>
                        <Box sx={{ textAlign: 'center' }}>
                            < form onSubmit={handleLogin} >
                                <TextField
                                    sx={{ width: '75%', m: 1 }}
                                    id="standard-basic"
                                    type='text'
                                    required
                                    name='name'

                                    onChange={handleOnchange}
                                    defaultValue={user.displayName}
                                    label="Your Name"
                                    variant="standard" />
                                <TextField
                                    sx={{ width: '75%', m: 1 }}
                                    id="standard-basic"
                                    type='email'
                                    name='email'
                                    required
                                    onChange={handleOnchange}
                                    defaultValue={user.email}

                                    label="Your Email"
                                    variant="standard" />
                                <TextField
                                    sx={{ width: '75%', m: 1 }}
                                    id="standard-basic"
                                    required
                                    type='text'
                                    name='model'
                                    onChange={handleOnchange}

                                    defaultValue={purchase.name}

                                    label="Bike Model"
                                    variant="standard" />
                                <TextField
                                    sx={{ width: '75%', m: 1 }}

                                    label="Your Phone Number"
                                    name='phoneNumber'
                                    required
                                    onChange={handleOnchange}
                                    type="number"

                                    variant="standard"
                                />
                                <TextField
                                    sx={{ width: '75%', m: 1 }}

                                    label="Your City"
                                    name='city'
                                    required
                                    onChange={handleOnchange}
                                    type="text"

                                    variant="standard"
                                />

                                <Button type='submit' variant='contained' sx={{ width: '75%', m: 1 }}>Confirm</Button>

                            </form>

                        </Box>

                    </Box>
                </Grid >

            </Grid >

        </Box >




    );
};

export default Purchase;