import React from 'react'
import styled from 'styled-components'

export const H2Styled = styled.h2<PropsH2>`
  color: ${({ color }) => (color ? color : '#292828')};
  font-size: ${({ fontSize }) => fontSize};
  display: block;
  text-align: ${({ textAlign }) => (textAlign ? textAlign : 'center')};
  margin: ${({ margin }) => margin};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : 'normal')};
  width: ${({ width }) => width};
  font-family: ${({ fontFamily }) => fontFamily};
  &:hover {
    color: ${({ colorHover, color }) => (colorHover ? colorHover : color)};
  }
  @media (max-width: 768px) {
    font-size: ${({ fontSizeResponsive, fontSize }) =>
      fontSizeResponsive ? fontSizeResponsive : fontSize};
  }
`

interface PropsH2 {
  children: React.ReactNode
  fontSize?: string
  color?: string
  margin?: string
  bold?: boolean
  fontWeight?: string
  width?: string
  textAlign?: 'center' | 'start' | 'end' | 'left' | 'right' | 'justify'
  marginResponsive?: string
  fontSizeResponsive?: string
  fontFamily?: string
  colorHover?: string
  [x: string]: any
}
export const H2 = (props: PropsH2) => (
  <H2Styled {...props}>{props.children}</H2Styled>
)
