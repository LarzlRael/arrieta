import styled from 'styled-components'
const BoxFlexStyle = styled.div<BoxFlexI>`
  margin: ${(props) => props.margin};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: ${(props) => props.background};
  padding: ${(props) => props.padding};
  @media screen and (max-width: 425px) {
    padding: ${(props) => props.paddingResponsive};
    margin: ${(props) => props.marginResponsive};
    flex-direction: column;
  }
`
interface BoxFlexI {
  children: React.ReactNode
  className?: string
  margin?: string
  width?: string
  style?: React.CSSProperties
  padding?: string
  paddingResponsive?: string
  marginResponsive?: string
  background?: string
  height?: string
}
export const Box = (props: BoxFlexI) => {
  const { children, style } = props
  return (
    <BoxFlexStyle className={props.className} style={style} {...props}>
      {children}
    </BoxFlexStyle>
  )
}
