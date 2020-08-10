import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import imagen from './carousel1.png';


export default function CarouselNov(props) {
    const { children, value, index, ...other } = props;
  
    return (
        <div className="container-fluid">
<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleControls" data-slide-to="1"></li>
    <li data-target="#carouselExampleControls" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
    <Grid container spacing={3}>
    <Grid item xs={6}>
    <img src={imagen} alt="prueba" height="100%" width="100%"/>
    </Grid>
    <Grid item xs={6}><h5 class="d-block w-150"> prueba de grillas en carousel
          </h5>
    </Grid>
    </Grid>
    </div>
    <div class="carousel-item">
      <img src="https://www.brandbucket.com/sites/default/files/logo_uploads/259178/large_medictap.png" class="d-block w-150"/>
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-150" alt="..."/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
</div>);
}