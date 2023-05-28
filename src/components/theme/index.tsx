import React from 'react'
import { createGlobalStyle } from 'styled-components'
interface ThemeProps {
  children: React.ReactNode
}
export const Theme = (props: ThemeProps) => {
  const { children } = props
  return (
    <div>
      <ThemeStyle
        color={{
          white: '#fff',
          pink: '#d7b7a1',
          primaryColor: '#f77031',
          orangeRGB: '247, 112, 49',
        }}
      />
      {children}
    </div>
  )
}

const ThemeStyle = createGlobalStyle<any>`

    :root {
        --white: ${(props) => props.color.white};
        --pink: ${(props) => props.color.pink};
        --primaryColor: ${(props) => props.color.primaryColor};
        --orangeRGB: ${(props) => props.color.orangeRGB};
        /* --white2: ${(props) => props.color.white2};
        --orange2: ${(props) => props.color.orange2};
        --yellow: ${(props) => props.color.yellow};
        --green: ${(props) => props.color.green};
        --purple: ${(props) => props.color.purple};
        --black: ${(props) => props.color.black};
        --gray: ${(props) => props.color.gray};
        --red: ${(props) => props.color.red}; */
    }
    body {
      font-family: 'arial', sans-serif;
    }
`
