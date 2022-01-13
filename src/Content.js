import { Grid, Typography } from "@mui/material";
import { typography } from "@mui/system";


function Content() {
    

    const Posts = (posts) => {
        // Example data for testing
        const post_list = [
            {
                "username": "Matti",
                description: "One month consolidation",
                chart: "",
                votes: 20
            },
            {
                username: "Mikko",
                description: "Two month consolidation",
                chart: "",
                votes: 11
            },
            {
                username: "Pekka",
                description: "Three month consolidation",
                chart: "",
                votes: 10
            }
        ]
        return (
            <div>
                {post_list.map(post => <Post key={post.username} post={post} />)}
            </div>
        )
    }

    const Post = (post) => {
        return (
            <Grid container sx={{ color: 'text.primary' }}>
                <Grid item xs={2} style={{'textAlign':'left'}}>
                    <Grid container>
                        <Grid item xs={6}>
                            <Typography> {post.post.votes} </Typography>
                        </Grid>
                        <Grid item xs={6} >
                            <Typography> {post.post.username} </Typography>
                        </Grid>
                    </Grid>
                    <Grid>
                    <Typography> Description: </Typography>
                    <Typography> {post.post.description} </Typography>
                    </Grid>
                </Grid>
                <Grid item xs={10} style={{'textAlign':'left'}}>
                    <p> Chart comes to here </p>
                </Grid>
            </Grid>
        )
    }


    return (
        <Posts />
    );
    }

export default Content;