import React from 'react';
import { Container, Card } from 'semantic-ui-react';
import Title from '../title'

export default function Background() {
    const cardStyle={
        "marginLeft":"25%",
        "marginRight": "25%"
    }

    return (
        <div id="#background">
            <Container>
                <Title name={"BACKGROUND"}/>
            </Container>
            <Container>
                <Card
                style={cardStyle}
                description="My journey begins with the infamous social media platform, MySpace. As a young kid, personalizing my 'Top 8' was the highlight of my life."
                >
                </Card>
            </Container>
        </div>
    )
}
