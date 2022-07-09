import React, { useEffect, useState } from "react";
//components
import { Link } from "react-router-dom";
import axios from "axios";

//MUI
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { Box, height } from "@mui/system";
import LinearProgress from "@mui/material/LinearProgress";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import ButtonGroup from "@mui/material/ButtonGroup";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState(products);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchProducts();
  }, []);
  const fetchProducts = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setLoading(false);
        setProducts(res.data);
        setFilter(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const filterProducts = (cat) => {
    const updatedList = products.filter((x) => x.category === cat);
    setFilter(updatedList);
  };
  const Loadingg = () => {
    return (
      <Box sx={{ width: "100%", mt: 10 }}>
        <LinearProgress color="success" />
      </Box>
    );
  };
  const ShowProducts = () => {
    return (
      <Grid container spacing={3}>
        {filter.map((product, idx) => (
          <Grid item xl={3} lg={3} md={6} sm={6} xs={12} key={idx}>
            <Card sx={{ width: "100%" }}>
              <CardMedia
                component="img"
                height="450px"
                image={product.image}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {product.title.substring(0, 12)}
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  $ {product.price}
                </Typography>
              </CardContent>

              <CardActions>
                <Button variant="outlined" size="medium" color="info">
                  <Link
                    style={{ textDecoration: "none", color: "red" }}
                    to={`/${product.id}`}>
                    <b>More...</b>
                  </Link>
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  };
  const DoFilter = () => {
    const buttons = [
      <Button key="one" onClick={() => setFilter(products)}>
        All Products
      </Button>,
      <Button key="two" onClick={() => filterProducts("men's clothing")}>
        men's clothing
      </Button>,
      <Button key="three" onClick={() => filterProducts("women's clothing")}>
        women's clothing
      </Button>,
      <Button key="four" onClick={() => filterProducts("jewelery")}>
        jewelery
      </Button>,
      <Button key="five" onClick={() => filterProducts("electronics")}>
        electronics
      </Button>,
    ];
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          "& > *": {
            m: 1,
          },
          mb: 5,
        }}>
        <ButtonGroup
          variant="contained"
          color="primary"
          aria-label="outlined button group"
          sx={{
            display: {
              xl: "flex",
              lg: "flex",
              md: "none",
              sm: "none",
              xs: "none",
            },
          }}>
          {buttons}
        </ButtonGroup>
        <ButtonGroup
          sx={{
            display: {
              xl: "nome",
              lg: "none",
              md: "flex",
              sm: "flex",
              xs: "flex",
            },
          }}
          orientation="vertical"
          color="inherit"
          aria-label="vertical outlined button group">
          {buttons}
        </ButtonGroup>
      </Box>
    );
  };
  return (
    <Box sx={{ mt: 10 }}>
      <DoFilter />
      {loading ? <Loadingg /> : <ShowProducts />}
    </Box>
  );
}
