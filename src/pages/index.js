import React from "react"
import { Container, FeatureImage, Content, ContentCard } from "../components"

const IndexPage = () => {
  return (
    <Container>
      <FeatureImage />
      <Content>
        <ContentCard
          date="March 2-th, 2020"
          title="Big TItle"
          excerpt="excerpt here"
          slug="/test"
        />
      </Content>
    </Container>
  )
}

export default IndexPage
