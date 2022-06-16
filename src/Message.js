import React from "react";
import {Card, CardContent, Typography} from "@mui/material";
import './Message.css';

function Message(props) {
    return(
        <div>
            <Card className="message_card">
                <CardContent>
                    <Typography
                        color="white"
                        variant="h5"
                        component="h2"
                    >{props.userName}: {props.message}

                    </Typography>
                </CardContent>
            </Card>

        </div>
    )
}
export default Message;
