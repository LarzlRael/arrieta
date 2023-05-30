import React from 'react'
import styled from 'styled-components'
/* import { sizeMedia } from '../../../styles/mediaQuerys' */
const SpanStyled = styled.span<SpanProps>`
  color: ${({ color }) => (color ? color : '#292828')};
  display: ${({ display }) => (display ? display : 'inline-block')};
  margin-top: 1rem;
  text-align: ${({ textAlign }) => (textAlign ? textAlign : 'start')};
  margin: ${({ margin }) => margin};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : 'normal')};
`
interface SpanProps {
  fontSize?: string
  color?: string
  margin?: string
  textAlign?: 'center' | 'start' | 'end' | 'left' | 'right' | 'justify'
  fontWeight?: string
  children: React.ReactNode
  marginResponsive?: string
  display?: string
}
export const Span = (spanProps: SpanProps) => {
  return <SpanStyled {...spanProps}>{spanProps.children}</SpanStyled>
}
