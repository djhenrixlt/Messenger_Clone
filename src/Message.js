import React from "react";
import {Card, CardContent, Typography} from "@mui/material";
import './Message.css';

function Message(message, userName) {
    const isUser =  userName === message.userName;
    return(
        <div className={'message ${isUser && message_user}'}>
            <Card  className={isUser ? "message_userCard" : "message_guestCard"}>
                <CardContent>
                    <Typography
                        color="white"
                        variant="h5"
                        component="h2"
                    >{userName}: {message}

                    </Typography>
                </CardContent>
            </Card>

        </div>
    )
}
export default Message;
