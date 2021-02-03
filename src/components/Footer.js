import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
  FooterWrapper,
  FooterSocialWrapper,
  FooterSocialIcons,
} from "../elements"

export const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      facebook: file(relativePath: { eq: "socials.svg" }) {
        publicURL
      }
      linkedin: file(relativePath: { eq: "socials.svg" }) {
        publicURL
      }
      instagram: file(relativePath: { eq: "socials.svg" }) {
        publicURL
      }
      twitter: file(relativePath: { eq: "socials.svg" }) {
        publicURL
      }
    }
  `)
  return (
    <FooterWrapper>
      <FooterSocialWrapper>
        <FooterSocialIcons>
          <a href="https://facebook.com" target="_blank" rel="noopener norefer">
            <img src={data.facebook.publicURL} alt="facebook" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener norefer">
            <img src={data.linkedin.publicURL} alt="linkedin" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener norefer"
          >
            <img src={data.instagram.publicURL} alt="instagram" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener norefer">
            <img src={data.twitter.publicURL} alt="twitter" />
          </a>
        </FooterSocialIcons>
        <p>2020 company. all rights reserved.</p>
      </FooterSocialWrapper>
    </FooterWrapper>
  )
}
