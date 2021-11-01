import NextLink from "next/link";
import {Grid, Card, CardMedia, CardContent, Typography, CardActionArea, CardActions, Button} from "@material-ui/core";
import Layout from "../components/layout";
import data from '../utils/data';

export default function Home() {
    return (
        <Layout>
            <div>
                <h1>Products</h1>
                <Grid container spacing={3}>
                    {data.products.map((product) => (
                        <Grid item md={4} key={product.name}>
                            <Card>
                                <NextLink href={`/product/${product.slug}`} passHref>
                                <CardActionArea>
                                    <CardMedia component="img" image={product.image} title={product.title}></CardMedia>
                                    <CardContent>
                                        <Typography>
                                            {product.name}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                </NextLink>
                                    <CardActions>
                                    <Typography>${product.price}</Typography>
                                    <Button size="small" color="primary">Add to Cart</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </Layout>

    )
}
