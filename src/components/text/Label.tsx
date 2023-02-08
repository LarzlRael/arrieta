import styled from 'styled-components'
export const LabelStyled = styled.label<{
  fontSize?: string
  color?: string
  margin?: string
  display?: string
  textAlign?: 'center' | 'start' | 'end' | 'left' | 'right' | 'justify'
  fontWeight?:
    | 'normal'
    | 'bold'
    | 'bolder'
    | 'lighter'
    | 'initial'
    | 'inherit'
    | string
  lineHeight?: string
  marginResponsive?: string
}>`
  font-size: ${(props) => props.fontSize || '14px'};
  color: ${({ color }) => (color ? color : '#000')};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : 'start')};
  margin: ${({ margin }) => margin};
  display: ${({ display }) => (display ? display : 'inline-block')};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : 'normal')};
  line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : '1')};
  @media screen and (max-width: 768px) {
    margin: ${({ marginResponsive }) => marginResponsive};
  }
`
interface SpanProps {
  fontSize?: string
  color?: string
  margin?: string
  htmlFor?: string

  textAlign?: 'center' | 'start' | 'end' | 'left' | 'right' | 'justify'
  fontWeight?: string
  children: React.ReactNode
  display?: string
  lineHeight?: string
  marginResponsive?: string
}
export const Label = (props: SpanProps) => {
  return (
    <LabelStyled htmlFor={props.htmlFor} {...props}>
      {props.children}
    </LabelStyled>
  )
}
