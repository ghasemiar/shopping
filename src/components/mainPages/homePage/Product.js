import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import LinearProgress from "@mui/material/LinearProgress";
import { Paper, Grid, Box, Button, Typography } from "@mui/material";
import { useAddItem } from '../../../store/hooks';

function Product() {
  const { userId } = useParams();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchProduct();
  }, []);
  const fetchProduct = () => {
    axios
      .get(`https://fakestoreapi.com/products/${userId}`)
      .then((res) => {
        setLoading(false);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  };
  const Loading = () => {
    return (
      <Box sx={{ width: "100%", mt: "120px" }}>
        <LinearProgress color="success" />
      </Box>
    );
  };
  
  const AddItem = useAddItem();
  const ShowDetail = () => {
    data.qty = 1;
    return (
      <Paper key={data.id} sx={{ mt: 15, ml: 5, mr: 5 }}>
        <Grid container spacing={2}>
          <Grid item xl={5} lg={5} md={12} sm={12} xs={12}>
            <Box sx={{ width: "100%" }}>
              <img src={data.image} alt="" width="100%" height="auto" />
            </Box>
          </Grid>
          <Grid item xl={7} lg={7} md={12} sm={12} xs={12} sx={{ mt: 5 }}>
            <Box>
              <Typography variant="h4" component="h4" sx={{ m: 3 }}>
                {data.title}
              </Typography>
              <Typography variant="h6" component="h6" sx={{ m: 3 }}>
                {data.category}
              </Typography>
              <Typography variant="p" component="p" sx={{ m: 3 }}>
                {data.description}
              </Typography>
              <Typography variant="p" component="p" sx={{ m: 3 }}>
                <strong>Price:</strong> {data.price}
              </Typography>
              
            </Box>
            <Box sx={{ m: 3 }}>
              <Button variant="outlined" color="inherit" onClick={()=>{AddItem(data)}}>
                Add To Cart
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    );
  };

  return <>{loading ? <Loading /> : <ShowDetail />}</>;
}
export default Product;
{
  /* <div >
      <div>
        
      </div>
      <div>
        
      </div>
    </div> */
}
