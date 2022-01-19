import { Grid, Typography } from "@mui/material";
import { typography } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";


function Content() {
    const [postList, setPostList] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'http://localhost:5000/get_posts'
            )
            console.log(result.data[0].path)
            setPostList(result.data)
        }
        fetchData()
    }, [])

    const Posts = () => {
        return (
            <div>
                {postList.map(post => <Post key={post.user} post={post} />)}
            </div>
        )
    }

    const Post = (post) => {
        const image_link = "http://localhost:5000/show_image/" + post.post.path
        return (
            <Grid container sx={{ color: 'text.primary' }}>
                <Grid item xs={2} style={{'textAlign':'left'}}>
                    <Grid container>
                        <Grid item xs={6}>
                            <Typography> {post.post.votes} </Typography>
                        </Grid>
                        <Grid item xs={6} >
                            <Typography> {post.post.user} </Typography>
                        </Grid>
                    </Grid>
                    <Grid>
                    <Typography> Description: </Typography>
                    <Typography> {post.post.description} </Typography>
                    </Grid>
                </Grid>
                <Grid item xs={10} style={{'textAlign':'left'}}>
                    <img src={image_link} /> 
                </Grid>
            </Grid>
        )
    }


    return (
        <Posts />
    );
    }

export default Content;