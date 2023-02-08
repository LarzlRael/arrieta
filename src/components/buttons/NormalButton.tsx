import styled from 'styled-components'
const ButtonStyle = styled.button<{
  background?: string
  width?: string
  color?: string
  ghost?: boolean
}>`
  padding: 10px 3rem;
  border-radius: 150px;
  /* background: var(--orange2); */
  font-size: 1rem;
  border: ${({ ghost, background }) =>
    ghost ? `1px solid ${background}` : 'transparent'};
  color: white;
  cursor: pointer;
  font-family: 'Spartan', sans-serif;
  margin-bottom: 10px;
  font-weight: 500;
  background: ${({ ghost, background }) =>
    !ghost ? background : 'transparent'};
  transition: all 0.4s ease all;
  &:hover {
    border: 1px solid
      ${(props) => (props.background ? 'var(--orange)' : 'var(--orange)')};
    color: ${(props) => (props.ghost ? 'var(--orange)' : 'white')};
  }
  &:disabled {
    opacity: 0.2;
  }
  @media screen and (max-width: 425px) {
    width: 90%;
  }
`
interface NormalButtonProps {
  children: React.ReactNode
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
  disabled?: boolean
  background?: string
  width?: string
  ghost?: boolean
}
export const NormalButton = (props: NormalButtonProps) => {
  const { children, type, onClick, disabled, background, width, ghost } = props
  return (
    <ButtonStyle
      background={background}
      className="NormalButton"
      disabled={disabled}
      onClick={onClick}
      type={type}
      width={width}
      ghost={ghost}
    >
      {children}
    </ButtonStyle>
  )
}
