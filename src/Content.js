import { Grid, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import './Content.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function Content() {
    const [postList, setPostList] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'http://localhost:5000/get_posts'
            )
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
            <Grid className="container" container sx={{ color: 'text.primary' }}>
                <Grid item xs={2} style={{'textAlign':'left'}}>
                    <Grid container>
                        <Grid className="voting-container" item xs={2}>
                            <KeyboardArrowUpIcon fontSize="large" />
                            <Typography> {post.post.votes} </Typography>
                            <KeyboardArrowDownIcon fontSize="large" />
                        </Grid>
                        <Grid item xs={2} >
                            <Typography variant="h6"  style={{marginTop: '12%'}}> {post.post.user} </Typography>
                        </Grid>
                    </Grid>
                    <Grid className="post-info-container">
                    <Typography style={{'textDecoration': 'underline'}} variant="h6"> Description: </Typography>
                    <Typography> {post.post.description} </Typography>
                    </Grid>
                </Grid>
                <Grid item xs={10} style={{'textAlign':'left'}}>
                    <img alt="Chart of the post" src={image_link} /> 
                </Grid>
            </Grid>
        )
    }


    return (
        <Posts />
    );
    }

export default Content;