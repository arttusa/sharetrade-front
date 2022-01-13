import { Grid, Typography } from "@mui/material";
import { typography } from "@mui/system";


function Content() {
    

    const Posts = (posts) => {
        // Example data for testing
        const post_list = [
            {
                username: "Matti",
                description: "One month consolidation",
                chart: "",
                votes: 0
            },
            {
                username: "Mikko",
                description: "One month consolidation",
                chart: "",
                votes: 0
            },
            {
                username: "Pekka",
                description: "One month consolidation",
                chart: "",
                votes: 0
            }
        ]
        return (
            <div>
                {post_list.map(postl => <Post key={postl.username} post={postl} />)}
            </div>
        )
    }

    const Post = (post) => {
        return (
            <Grid container sx={{ color: 'text.primary' }}>
                <Grid item xs={2} style={{'textAlign':'left'}}>
                    <Grid container>
                        <Grid item xs={6}>
                            <Typography> 10 </Typography>
                        </Grid>
                        <Grid item xs={6} >
                            <Typography> Tom </Typography>
                        </Grid>
                    </Grid>
                    <Grid>
                    <Typography> Description: </Typography>
                    <Typography> One month consolidation </Typography>
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